<template>
  <div class="my-4">
    <v-tabs
    v-model="tab"
    align-with-title
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab key="html">
      HTML
    </v-tab>
    <v-tab key="html-code" v-if="this.$props.htmlCode">
      HTML kods
    </v-tab>
    <v-tab key="code" v-if="this.$props.code">
      Javascript
    </v-tab>
  </v-tabs>
  <v-tabs-items v-model="tab">
      <v-tab-item
        key="html"
      >
        <v-card flat class="html-block">
          <slot name="html"></slot>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="html-code"
        v-if="this.$props.htmlCode"
      >
        <v-card flat class="hljs code-block">
          <pre>
            <code v-html="htmlCodeText">

            </code>
          </pre>
        </v-card>
      </v-tab-item>
      <v-tab-item
        key="code"
        v-if="this.$props.code"
      >
        <v-card flat class="hljs code-block">
          <pre>
            <code v-html="codeText">

            </code>
          </pre>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
  
</template>
<script>
import hljs from 'highlight.js/lib/core';
export default {
  name: 'CodePreview',
  props: ['code', 'htmlCode'],
  data(){
    return {
      tab: 'html',
    }
  },

  computed: {
    codeText(){
      return hljs.highlight(
      this.$props.code,
      { language: 'js' }
    ).value
    },
    htmlCodeText(){
      return hljs.highlight(
      this.$props.htmlCode,
      { language: 'html' }
    ).value
    }
  }
}
</script>
<style>
.hljs {
	display: block !important;
	overflow-x: auto !important;
	padding: .5em !important;
	color: #abb2bf !important;
	background: #282c34 !important;
}

.hljs-comment,
.hljs-quote {
	color: #5c6370 !important;
	font-style: italic !important;
}

.hljs-doctag,
.hljs-formula,
.hljs-keyword {
	color: #c678dd !important;
}

.hljs-deletion,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-subst {
	color: #e06c75 !important;
}

.hljs-literal {
	color: #56b6c2 !important;
}

.hljs-addition,
.hljs-attribute,
.hljs-meta-string,
.hljs-regexp,
.hljs-string {
	color: #98c379 !important;
}

.hljs-built_in,
.hljs-class .hljs-title {
	color: #e6c07b !important;
}

.hljs-attr,
.hljs-number,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
	color: #d19a66 !important;
}

.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
	color: #61aeee !important;
}

.hljs-emphasis {
	font-style: italic !important;
}

.hljs-strong {
	font-weight: 700 !important;
}

.hljs-link {
	text-decoration: underline !important;
}

.html-block {
  border: 2px #5c5b5b solid !important;
  min-height: 200px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>
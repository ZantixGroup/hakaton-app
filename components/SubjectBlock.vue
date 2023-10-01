<template>
  <v-card :class="`${color} white--text`" flat @click="(e)=>cEvent(e)">
    <div :class="{
          'd-flex': true,
          'flex-column': true,
          'text-center': true,
          'mx-3': true,
          'card-container': true,
          'md': $vuetify.breakpoint.mdAndUp,
          'sm': $vuetify.breakpoint.smAndUp,
          'xs': $vuetify.breakpoint.smAndDown,
        }">
        <div class="d-flex flex-column mt-7">
        <h1 :class="{
          'title': true,
          'md': $vuetify.breakpoint.mdAndUp,
          'sm': $vuetify.breakpoint.smAndUp,
          'xs': $vuetify.breakpoint.smAndDown,
        }">{{ title }}</h1>
        <span :class="{
          'desc': true,
          'md': $vuetify.breakpoint.mdAndUp,
          'sm': $vuetify.breakpoint.smAndUp,
          'xs': $vuetify.breakpoint.smAndDown,
        }">{{ description }}</span>
      </div>
      <v-spacer/>
      <div :class="{
          'my-3': true,
          'score': true,
          'md': $vuetify.breakpoint.mdAndUp,
          'sm': $vuetify.breakpoint.smAndUp,
          'xs': $vuetify.breakpoint.smAndDown,
        }">
        <b>{{ score }}/{{ maxScore }}</b>
      </div>
    </div>
    <img class="background-icon" :src="svgPath" />
  </v-card>
</template>
<script>
export default {
  props: ['title', 'description', 'color', 'score', 'maxScore', 'svgPath'],
  name: 'MathSelect',
  methods: {
    cEvent(e){
      this.$emit('click', e)
    }
  }
}
</script>
<style scoped lang="scss">
.v-card {
  overflow: hidden;
  transition: .3s all;
}

.v-card:hover {
  transform: scale(1.02);
}
.card-container {
  height: calc((100vh - 112px - 5px) / 2);
  z-index: 3;
  &.md { height: auto }
  &.sm { height: calc((100vh - 112px - 5px) / 2); }
}

.title {
  font-size: 2rem !important;
  font-weight: 900 !important;
  z-index: 111113;
  &.md { font-size: 2.25rem !important; }
  &.sm { font-size: 1.85rem !important; }
  &.xs { font-size: 1.5rem !important; }
}

.desc {
  z-index: 111113;
  font-size: 1.2rem;
  text-wrap: balance;
  &.md { font-size: 1.1rem; }
  &.sm { font-size: 1.0rem; }
  &.xs { font-size: 0.8rem; }
}

.score {
  font-size: 3rem;
  z-index: 111113;
  &.md { font-size: 8rem; }
  &.sm { font-size: 3rem; }
  &.xs { font-size: 1.75rem; }
}

.red {
  background: $color-card-red !important;
}
.green {
  background: $color-card-green !important;
}
.blue {
  background: $color-card-blue !important;
}
.orange {
  background: $color-card-orange !important;
}

.background-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 145%;
  opacity: 0.07;
  z-index: 2;
}
</style>

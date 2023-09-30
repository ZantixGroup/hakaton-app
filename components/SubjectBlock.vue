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
.card-container {
  height: calc((100vh - 112px - 5px) / 2);
  &.md { height: auto }
  &.sm { height: calc((100vh - 112px - 5px) / 2); }
}

.tite {
  font-size: 2.5rem;
  &.md { font-size: 1.75rem; }
  &.sm { font-size: 1.35rem; }
  &.xs { font-size: 1rem; }
}

.desc { 
  font-size: 1.2rem;
  text-wrap: balance;
  &.md { font-size: 1.1rem; }
  &.sm { font-size: 1.0rem; }
  &.xs { font-size: 0.8rem; }
}

.score { 
  font-size: 3rem;
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
</style>
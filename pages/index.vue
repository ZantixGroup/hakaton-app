<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <LessonButt>
      </LessonButt>
      
    </v-col>
  </v-row>
</template>

<script>
import TestAnimation from '~/components/TestAnimation.vue';
import ScienceSelect from '~/components/subjectSelect/science.vue'
import MathSelect from '~/components/subjectSelect/math.vue'
import MechSelect from '~/components/subjectSelect/mech.vue'
import TechSelect from '~/components/subjectSelect/tech.vue'
import LessonButt from '~/components/LessonButt.vue';
export default {
    name: 'IndexPage',
    components: { TestAnimation, ScienceSelect, MathSelect, MechSelect, TechSelect, LessonButt },
    methods: {
      changeToCategory(e){
        this.$router.push({ name: e})
      }
    }
}
</script>
<style scoped>
.mobile-grid {
  display: grid;
  grid-row: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.mobile-grid > * {
  margin: 5px;
}
</style>
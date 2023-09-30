<template>
  <v-row justify="center" align="center" style="height: 100%;">
    <v-col cols="12">
      <v-card flat>
        <div :class="($vuetify.breakpoint.mobile? $vuetify.breakpoint.xs?'mobile-grid':'mobile-grid':'d-flex justify-center margin-5')">
          <ScienceSelect @click="changeToCategory('science')"/>
          <MathSelect @click="changeToCategory('math')"/>
          <MechSelect @click="changeToCategory('mech')"/>
          <TechSelect @click="changeToCategory('tech')"/>
        </div>
      </v-card>
      
    </v-col>
  </v-row>
</template>

<script>
import TestAnimation from '~/components/TestAnimation.vue';
import ScienceSelect from '~/components/subjectSelect/science.vue'
import MathSelect from '~/components/subjectSelect/math.vue'
import MechSelect from '~/components/subjectSelect/mech.vue'
import TechSelect from '~/components/subjectSelect/tech.vue'
export default {
    name: 'IndexPage',
    components: { TestAnimation, ScienceSelect, MathSelect, MechSelect, TechSelect },
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
.margin-5 > * {
    margin: 5px;
}
</style>
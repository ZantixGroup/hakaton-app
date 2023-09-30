<template>
  <v-row justify="center" align="center" style="height: 100%;" class="bg">
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
import {UserData} from "~/storage/user";
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
<style scoped lang="scss">
.mobile-grid {
  display: grid;
  width: 100% !important;
  overflow: hidden;
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

.col {
  padding: 0px !important;
  padding-inline: 5px !important;
}

.v-card {
  background: transparent;
}
</style>

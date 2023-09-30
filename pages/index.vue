<template>
  <v-row justify="center" align="center" class="bg">
    <v-col cols="12">
      <v-card flat>
        <div :class="($vuetify.breakpoint.mobile? $vuetify.breakpoint.xs?'mobile-flex':'mobile-flex':'desktop-grid')">
          <SubjectBlock @click="changeToCategory('science')" title="Zinātne" description="Sistemātiska un kārtota patiesības meklēšana" color="red" score="25" maxScore="100"/>
          <SubjectBlock @click="changeToCategory('mathematics')" title="Matemātika" description="Abstrakts skaitļu un lielumu pētījums" color="green" score="25" maxScore="100"/>
          <SubjectBlock @click="changeToCategory('engineering')" title="Indžinierija" description="Izstrādā risinājumus reāliem izaicinājumiem" color="blue" score="25" maxScore="100"/>
          <SubjectBlock @click="changeToCategory('technology')" title="Tehnoloģija" description="Inovatīvi rīki kas veido mūsu nākotni" color="orange" score="25" maxScore="100"/>
        </div>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
import SubjectBlock from '~/components/SubjectBlock.vue';
import TestAnimation from '~/components/TestAnimation.vue';

export default {
  name: 'IndexPage',
  auth: false,
  components: { TestAnimation, SubjectBlock },
  methods: {
    changeToCategory(e){
      this.$router.push({ name: e})
    }
  }
}
</script>
<style scoped lang="scss">
.mobile-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  & > :global(.v-card){
    flex: 1 0 calc(50% - 5px / 2);
    margin: 0px !important;
  }

  & > * {
    margin: 5px;
  }
}

.desktop-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;

  & > :global(.v-card){
    margin: 0px !important;
  }
}

.col {
  padding: 0px !important;
  padding-inline: 5px !important;
}

.v-card {
  background: transparent;
}
</style>

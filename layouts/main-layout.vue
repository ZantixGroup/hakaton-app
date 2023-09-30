<template>
  <v-app style="overflow: hidden; height: 100vh">
    <div class="main">
      <v-main>
        <Nuxt />
      </v-main>
      <img class="main-svg" :src="`svg/mainPageSVG.svg`">
      <div class="main-decoration">
        <div/>
      </div>
    </div>
  </v-app>
</template>

<script>
import {DataStorage} from "~/storage/init";
export default {
  name: 'MainLayout',
  created(){
    DataStorage.initialize(this)
  },
}

</script>

<style scoped>

.main {
  display: flex;
  justify-content: center;
  background-color: #80DB56;
}

.main-decoration {
  position: relative;
  width: 50vw;
  height: 200vh;
  transition: 0.2s;
}

.main-decoration > div {
  transition: 0.2s;
  position: absolute;
  top: 25%;
  left: 75%;
  transform: translate(-50%,-50%) rotate(-15deg);
  width: 70vw;
  height: 200vh;
  background-color: white;
}

.main-svg {
  width: 1000px;
  z-index: 123;
  position: absolute;
  top: 61%;
  left: 76%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 975px) {
  .main-decoration,
  .main-decoration > div {
    width: 0;
  }
}

@media only screen and (max-width: 1400px) {
  .main-svg {
    display: none;
  }
}
</style>

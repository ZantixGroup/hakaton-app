<template>
  <v-app style="overflow: hidden; height: 100vh">
    <div class="register-main">
      <div class="register-decoration">
        <div/>
      </div>
      <v-main>
        <Nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import {DataStorage} from "~/storage/init";
export default {
  name: 'RegisterLayout',
  created() {
    DataStorage.initialize(this)
  },
}

</script>

<style scoped>
.register-main {
  display: flex;
  justify-content: center;
  background-color: #FFC532;
}

.register-decoration {
  position: relative;
  width: 50vw;
  height: 200vh;
  transition: 0.2s;
}

.register-decoration > div {
  z-index: 1;
  transition: 0.2s;
  position: absolute;
  top: 25%;
  left: 20%;
  transform: translate(-50%,-50%) rotate(15deg);
  width: 70vw;
  height: 200vh;
  background-color: white;
}

@media only screen and (max-width: 975px) {
  .register-decoration,
  .register-decoration > div {
    width: 0;
  }
}
</style>

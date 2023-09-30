<template>
  <v-app style="overflow: hidden; height: 100vh">
    <div class="login-main">
      <v-main>
        <Nuxt />
      </v-main>
      <div class="login-decoration">
        <div/>
      </div>
    </div>
  </v-app>
</template>

<script>
import {DataStorage} from "~/storage/init";
export default {
  name: 'LoginLayout',
  created(){
    DataStorage.initialize(this)
  },
}

</script>

<style scoped>
.login-main {
  display: flex;
  justify-content: center;
  background-color: #80DB56;
}

.login-decoration {
  position: relative;
  width: 50vw;
  height: 200vh;
  transition: 0.2s;
}

.login-decoration > div {
  transition: 0.2s;
  position: absolute;
  top: 25%;
  left: 75%;
  transform: translate(-50%,-50%) rotate(-15deg);
  width: 70vw;
  height: 200vh;
  background-color: white;
}

@media only screen and (max-width: 975px) {
  .login-decoration,
  .login-decoration > div
  {
    width: 0;
  }

}

</style>

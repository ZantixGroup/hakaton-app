<template>
  <v-app style="overflow: hidden; height: 100vh">
<!--    <v-app-bar fixed app>-->
<!--      <v-icon style="color:green; font-size: 32px">mdi-account-plus-outline</v-icon>-->
<!--      <v-toolbar-title style="color: green; margin-left: 10px">Pieslēgšanās</v-toolbar-title>-->
<!--    </v-app-bar>-->
    <div class="login-main">
      <v-main>
        <Nuxt />
<!--        &copy; {{ new Date().getFullYear() }} SIA Zantix visas tiesības aizsargātas-->
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
  height: 150vh;
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

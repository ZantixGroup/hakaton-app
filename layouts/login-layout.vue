<template>
  <v-app class="app">
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
.app {
  overflow: hidden;
  height: 100vh;
  background-color: #80DB56;
}

.login-main {
  display: flex;
  justify-content: center;
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

@media only screen and (min-width: 1200px) {
  .app {
    overflow: hidden;
  }

  .login-decoration {
    animation: decoration-div-in 1s forwards;
  }

  .login-decoration > div {
    animation: decoration-cube-in 1s forwards;
  }
}

@media only screen and (max-width: 1200px) {
  .app {
    overflow: auto;
  }

  .login-decoration,
  .login-decoration > div {
    animation: decoration-out 1s forwards;
  }
}

@keyframes decoration-out {
  0% {

  } 100% {
      width: 0;
      height: 0;
    }
}

@keyframes decoration-div-in {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 50vw;
    height: 200vh;
  }
}

@keyframes decoration-cube-in {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 70vw;
    height: 200vh;
  }
}
</style>

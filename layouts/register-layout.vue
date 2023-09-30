<template>
  <v-app class="app">
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
.app {
  overflow: hidden;
  height: 100vh;
  background-color: #FFC532;
}

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

@media only screen and (min-width: 1200px) {
  .app {
    overflow: hidden;
  }

  .register-decoration {
    animation: decoration-div-in 1s forwards;
  }

  .register-decoration > div {
    animation: decoration-cube-in 1s forwards;
  }
}

@media only screen and (max-width: 1200px) {
  .app {
    overflow: auto;
  }

  .register-decoration,
  .register-decoration > div {
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

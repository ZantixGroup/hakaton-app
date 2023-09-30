<template>
  <v-app>
    <v-app-bar
      fixed
      app
      elevation="0"
      class="white-bg"
    >
      <div class="green--text--better"
      >
        <v-icon class="icon" @click="navigateTo('index')">mdi-home</v-icon>
        <b>Sākumlapa</b>
    </div>
     <v-spacer v-if="!$vuetify.breakpoint.mobile"/>
     <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn v-for="(item,i) in items" :key="i" text flat :value="item.to" @click="navigateTo(item.to)" :class="activeCategory===item.to?'light-green accent-1 selected-btn':''">
        <span v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
        <v-icon x-large class="mr-0 icon">{{ item.icon }}</v-icon>
      </v-btn>
     </div>
     <v-spacer/>
     <ScoreDisplay/>
    </v-app-bar>
    <v-main>
      <v-container style="height: 100%;">
        <template>
          <Nuxt/>
        </template>
      </v-container>
    </v-main>
    <v-footer
      v-if="!$vuetify.breakpoint.mobile"
      app
      height="60px"
    >
      <v-spacer>
      <v-row justify="center" no-gutters>
        <v-col class="text-center">
          &copy; {{ new Date().getFullYear() }} SIA Zantix visas tiesības aizsargātas
        </v-col>
      </v-row>
      </v-spacer>
    </v-footer>
    <v-bottom-navigation v-else v-model="activeCategory" horizontal fixed>
      <v-btn v-for="(item,i) in items" :key="i" :value="item.to" @click="navigateTo(item.to)" :ripple="false" :class="activeCategory===item.to?'selected-btn':''">
        <span v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
        <img :src="item.iconPath" height="35px" width="40px"/>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import ScoreDisplay from '~/components/ScoreDisplay.vue'
import { DataStorage } from '~/storage/init'
import {UserData} from "~/storage/user";
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          iconPath: 'svg/pedastel.svg',
          title: 'Tops',
          to: 'top'
        },
        {
          iconPath: 'svg/book.svg',
          title: 'Mācības',
          to: 'index'
        },
        {
          iconPath: 'svg/user.svg',
          title: 'Profils',
          to: 'profile'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      activeCategory: undefined
    }
  },
  components: { ScoreDisplay },
  created(){
    DataStorage.initialize(this)
    this.$nextTick(()=>{
      if(!UserData.IsLoggedIn){
        this.$router.push({ name: 'login'})
      }
    })
  },
  methods: {
    navigateTo(page){
      console.log(this.activeCategory)
      this.$router.push({ name: page})
    }
  }
}
</script>
<style lang="scss">
.v-btn {
  transition: 0.2s !important;
}
.v-btn:hover::before {
  display: none !important;
}
.bg-gray {
  background-color: $color-bg-grey;
}
.selected-btn {
  border-radius: $border-radius !important;
  background: $color-light-green !important;
  margin-top: -10px !important;
  height: 70px !important;
  transition: 0.2s !important
}

.icon {
  color: $color-icons !important;
}

.green--text--better * {
  color: $color-primary;
}
.white-bg {
  background-color: white !important;
}

</style>

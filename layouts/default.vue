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
        <v-icon class="icon" @click="lastPage()">{{ activeCategory==='index'?'mdi-home':'mdi-arrow-left' }}</v-icon>
        <b>{{ routeNames[activeCategory] }}</b>
    </div>
     <v-spacer v-if="!$vuetify.breakpoint.mobile"/>
     <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn v-for="(item,i) in items" :key="i" text  :value="item.to" @click="navigateTo(item.to)" :ripple="false" :class="item.to === 'index' ? (activeCategory !== 'top' && activeCategory !== 'profile' ? 'selected-btn-top': ''):(item.to === activeCategory? 'selected-btn-top':'')">
        <span v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
        <img :src="item.iconPath" height="35px" width="40px"/>
      </v-btn>

     </div>
     <v-spacer/>
     <ScoreDisplay/>
    </v-app-bar>
    <v-main>
      <v-container fluid style="height: 100%;">
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
    <v-bottom-navigation v-else horizontal fixed>
      <v-btn v-for="(item,i) in items" :key="i" :value="item.to" @click="navigateTo(item.to)" :ripple="false" :class="item.to === 'index' ? (activeCategory !== 'top' && activeCategory !== 'profile' ? 'selected-btn': ''):(item.to === activeCategory? 'selected-btn':'')">
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
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/vbscript-html';
export default {
  name: 'DefaultLayout',
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          iconPath: '/svg/pedastel.svg',
          title: 'Tops',
          to: 'top',
          toPrec: true
        },
        {
          iconPath: '/svg/book.svg',
          title: 'Mācības',
          to: 'index'
        },
        {
          iconPath: '/svg/user.svg',
          title: 'Profils',
          to: 'profile',
          toPrec: true
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      routeNames: {
        "index": "Sākumlapa",
        "top": "Tops",
        "profile": "Profils",
        "math": "Matemātika",
        "tech": "Tehnoloģijas",
        "mech": "Inženierija",
        "science": "Zinātne",
        "tech-1": "Ievads Javascript",
        "tech-2": "Javascript selektori",
        "tech-3": "Animācijas ar javascript",
        "tech-4": "Dati no citām sistēmām",
      }
    }
  },
  components: { ScoreDisplay },
  computed: {
    activeCategory(){
      return this.$route.name
    }
  },
  created(){
    DataStorage.initialize(this)
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('html', html);
    this.$nextTick(()=>{
      if(!UserData.IsLoggedIn){
        this.$router.push({ name: 'login'})
      }
    })
  },
  methods: {
    navigateTo(page){
      this.$router.push({ name: page})
    },
    lastPage(){
      let a = this.activeCategory.split('-')
      a.pop()
      if(a.length === 0){
        a = ['index']
      }
      this.navigateTo(a.join('-'))
    },
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
.bg {
  background-color: transparent !important;
}
.selected-btn {
  border-radius: $border-radius !important;
  background: $color-light-green !important;
  margin-top: -10px !important;
  height: 70px !important;
  transition: 0.2s !important
}
.selected-btn-top {
  border-radius: $border-radius !important;
  background: $color-light-green !important;
  margin-bottom: -20px !important;
  height: 70px !important;  
  transition: 0.2s !important
}

.icon {
  color: $color-icons !important;
}

.container {
  background: $color-bg-grey;
  width: 100% !important;
  overflow-x: hidden !important;
}

.green--text--better * {
  color: $color-primary;
}
.white-bg {
  background-color: white !important;
}

.v-main {
  max-height: calc(100vh - 56px) !important;
}

html, body {
  overflow: hidden;
}
</style>

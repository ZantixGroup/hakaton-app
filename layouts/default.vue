<template>
  <v-app>
    <v-app-bar
      fixed
      app
      elevation="0"
      class="white-bg"
    >
      <div class="nav-container">
        <div class="green-text-better" @click="lastPage()">
          <v-icon class="icon">{{ activeCategory==='starter'?'mdi-home':'mdi-arrow-left' }}</v-icon>
          <b>{{ routeNames[activeCategory] }}</b>
        </div>
      </div>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"/>
      <div class="header-nav" v-if="!$vuetify.breakpoint.mobile">
        <v-btn v-for="(item,i) in items" :key="i" text  :value="item.to" @click="navigateTo(item.to)" :ripple="false" :class="item.to === 'starter' ? (activeCategory !== 'top' && activeCategory !== 'profile' ? 'selected-btn-top': ''):(item.to === activeCategory? 'selected-btn-top':'')">
          <span class="nav-btn-title" v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
          <img :src="item.iconPath" height="35px" width="40px"/>
        </v-btn>
      </div>
      <v-spacer/>
      <div class="nav-container right">
        <ScoreDisplay/>
      </div>
    </v-app-bar>
    <v-main :class="{
      'main': true,
      'md': $vuetify.breakpoint.mdAndUp,
    }">
      <v-container style="height: 100%;" :class="{
        'container': true,
        'md': $vuetify.breakpoint.mdAndUp,
      }">
        <template>
          <Nuxt/>
        </template>
      </v-container>
    </v-main>
    <v-footer
      v-if="!$vuetify.breakpoint.mobile"
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
      <v-btn v-for="(item,i) in items" :key="i" :value="item.to" @click="navigateTo(item.to)" :ripple="false" :class="item.to === 'starter' ? (activeCategory !== 'top' && activeCategory !== 'profile' ? 'selected-btn': ''):(item.to === activeCategory? 'selected-btn':'')">
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
          to: 'starter'
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
        "starter": "Sākumlapa",
        "top": "Tops",
        "profile": "Profils",
        "math": "Matemātika",
        "technology": "Tehnoloģijas",
        "mech": "Inženierija",
        "science": "Zinātne",
        "technology-1": "Ievads Javascript",
        "technology-2": "Javascript selektori",
        "technology-3": "Animācijas ar javascript",
        "technology-4": "Dati no citām sistēmām",
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
        a = ['starter']
      }
      this.navigateTo(a.join('-'))
    },
  }
}
</script>
<style scoped lang="scss">
.v-btn {
  transition: 0.2s !important;
  &:hover::before {
    display: none !important;
  }
}

.v-btn:not(.v-btn--round).v-size--default {
  height: auto !important;
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: transparent !important;
}


.nav-btn-title {
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  color: $color-text-green;
  text-transform: capitalize !important;
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
  margin-bottom: -10px !important;
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
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  &.md {
    max-width: 100% !important;
    padding-inline: calc((100vw - 1100px)/2) !important;
  }
}

.nav-container {
  display: flex;
  flex: 1 1 200px;
  &.right {
    justify-content: flex-end;
  }
}
.green-text-better {
  height: 100%;
  cursor: pointer;
  user-select: none;
  color: $color-primary;
  * {
    color: $color-primary !important;
  }
}
.white-bg {
  background-color: white !important;
}

.main {
  max-height: calc(100vh - 56px) !important;
  background: $color-bg-grey !important;
  &.md { overflow: visible !important; }
}

.header-nav {
  height: 100% !important;
  display: flex;
  align-items: flex-start;
  & > * {
    min-height: 100% !important;
  }
}

:global(.v-toolbar__content) {
  padding-block: 0px !important;
}

:global(html, body) {
  overflow: hidden !important;
}
</style>

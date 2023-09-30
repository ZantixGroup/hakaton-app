<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <div class="green--text"
      >
        <v-icon color="green" @click="navigateTo('index')">mdi-home</v-icon>
        <b>Sākumlapa</b>
    </div>
     <v-spacer v-if="!$vuetify.breakpoint.mobile"/>
     <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn v-for="(item,i) in items" :key="i" plain flat :value="item.to" @click="navigateTo(item.to)" :class="activeCategory===item.to?'light-green accent-1 selected-btn':''">
        <span v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
        <v-icon color="green" x-large class="mr-0">{{ item.icon }}</v-icon>
      </v-btn>
     </div>
     <v-spacer/>
     <ScoreDisplay/>
    </v-app-bar>
    <v-main>
      <v-container style="height: 100%;">
        <Nuxt />
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
    <v-bottom-navigation v-else v-model="activeCategory" horizontal>
      <v-btn v-for="(item,i) in items" :key="i" :value="item.to" @click="navigateTo(item.to)" :class="activeCategory===item.to?'light-green accent-1 selected-btn':''">
        <span v-if="!$vuetify.breakpoint.smAndDown">{{ item.title }}</span>
        <v-icon color="green" x-large class="mr-0">{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import ScoreDisplay from '~/components/ScoreDisplay.vue'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Tops',
          to: 'top'
        },
        {
          icon: 'mdi-eye',
          title: 'Mācības',
          to: 'index'
        },
        {
          icon: 'mdi-chart-bubble',
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
  methods: {
    navigateTo(page){
      console.log(this.activeCategory)
      this.$router.push({ name: page})
    }
  }
}
</script>
<style>
.selected-btn {
  border-radius: 5px !important;
  margin-top: -20px !important;
}
</style>
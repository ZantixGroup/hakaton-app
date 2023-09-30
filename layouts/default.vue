<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
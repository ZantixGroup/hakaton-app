<template>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card class="no-outline">
          <!-- Vuetify Toolbar -->
          <v-toolbar color="white" light class="no-outline">
            <v-spacer></v-spacer>
            <v-toolbar-title class="black--text">
              <div class="text-center">
                {{ title1 }}
              </div>
              <div class="undertitle">
                {{ subtitle1 }}
              </div>
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <!-- Spacer to visually separate the Toolbar from the List -->
          <div style="height: 20px;"></div>

          <!-- Transparent Vuetify List with Vertical Lines -->
          <v-list class="transparent no-outline">
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
                <v-col>
                    <v-row @click="emitClick(item)">
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            <v-list-item-subtitle style="white-space: break-spaces">{{ item.subtitle }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn
                              fab
                              elevation="2"
                              large
                              dark      
                              :readonly="item.locked"
                              class=""
                              :color="item.locked?'#8C8C8C':`${colors[color].secondary}`" 
                              :style="`border: 7px solid ${!item.locked?`${colors[color].primary}; box-shadow: 0px 4px 0 ${colors[color].shadow} !important;`:`#848484; pointer-events: none; box-shadow: 0px 4px 0 #8C8C8C !important;`}`"
                            >
                              <h1 style="color: white">{{ index+1 }}</h1>
                            </v-btn>
                        </v-list-item-action>
                    </v-row>
                    <div v-if="index > 0" class="vertical-line"></div>
                </v-col>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "stbutton",
  props: ["title1", "subtitle1", "items", "color"],
  data () {
    return {
      description: "among us",
      colors: {
        red: {
          primary: "#EC5757",
          secondary: "#F06868",
          shadow: "#E14242"
        },
        green: {
          primary: "#8CE961",
          secondary: "#A8F186",
          shadow: "#7BDA50"
        },
        blue: {
          primary: "#708EF8",
          secondary: "#869EF3",
          shadow: "#5A7AEB"
        },
        orange: {
          primary: "#FFC632",
          secondary: "#FAD370",
          shadow: "#DEB448"
        },
      }
    }
  },

  methods: {
    emitClick(e){
      if(!e.locked)
        this.$router.push({ name: e.target})
    }
  }
}
</script>

<style scoped>
.v-btn {
  transition: 0.2s !important;
  &:hover {
    scale: 1.1 !important;
  }
}

.no-outline {
    box-shadow: none !important; /* Remove box shadow */
    border: none !important; /* Remove border */
}
.transparent {
    background-color: transparent; /* Transparent background */
    padding: 0; /* Remove default padding */
}
.v-list-item{
    border: none !important; /* Remove default list item border */
}
.vertical-line {
    width: 1px;
    min-height: 20%; /* Adjust the height as needed */
    background-color: #ccc; /* Grey vertical line */
    position: absolute;
    top: -10%;
    right: 47.5px; /* Adjust the spacing from the button */
}
.undertitle {
    font-size: 16px;
    color: #555;
    text-align: center;
}
</style>
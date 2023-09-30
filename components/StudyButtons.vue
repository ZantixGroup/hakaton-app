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
                    <v-row>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn
                                fab
                                elevation="2"
                                large
                                color="#f06868" 
                                dark      
                                style="border: 7px solid #ec5757"
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
  props: ["title1", "subtitle1", "items"],
  data () {
    return {
      description: "among us"
    }
  },
}
</script>

<style>
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
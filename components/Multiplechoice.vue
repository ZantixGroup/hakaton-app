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
                    Question {{ number }}
                </div>
                <div class="undertitle" v-if="typeof question==='string'">
                    {{ question }}
                </div>
                <div v-else>
                    <component :is="question" ></component>
                </div>
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>

            <v-row>
                <v-spacer></v-spacer>
                <div class="d-flex justify-center">
                    <v-radio-group v-model="radioGroup" class="d-flex flex-wrap" row style="width: 400px;">
                        <v-radio
                            v-for="(answer, index) in answers"
                            :key="index"
                            :label="`${answer}`"
                            :value="index"
                            class="mt-6"
                            style="width: 100px"
                        ></v-radio>
                    </v-radio-group>
                </div>
            </v-row>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "multch",
    props: ["number", "question", "answers"],
    data () {
      return {
        description: "among us",
        radioGroup: null,
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
  .undertitle {
      font-size: 16px;
      color: #555;
      text-align: center;
  }
  </style>
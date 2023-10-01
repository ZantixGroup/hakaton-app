<template>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        offset-sm="3"
      >
        <v-card class="no-outline">
            <!-- Vuetify Toolbar -->
            <h2 class="text-center">
                Jautājums {{ number }}
            </h2>
            <p class="undertitle" v-if="typeof question==='string'">
                 {{ question }}
            </p>
            <div v-else>
                <component :is="question" ></component>
            </div>

            <div>
                <v-radio-group v-model="radioGroup" class="d-flex flex-wrap" row>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-wrap">
                        <v-radio
                        v-for="(answer, index) in answers"
                        :key="index"
                        :label="`${answer}`"
                        :value="index"
                        class="mt-6"
                        style="width: 100px"
                        ></v-radio>
                    </div>
                    <v-spacer></v-spacer>
                </v-radio-group>
            </div>
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
</style>

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
            <div class="undertitle">
              {{ question }}
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <!-- Spacer to visually separate the Toolbar from the List -->
        <div style="height: 20px;"></div>

        <v-text-field label="Answer" outlined></v-text-field>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "texttsk",
  props: ["number", "question"],
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
.undertitle {
    font-size: 16px;
    color: #555;
    text-align: center;
}
</style>
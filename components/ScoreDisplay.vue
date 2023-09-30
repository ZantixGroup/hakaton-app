<template>
  <v-btn rounded outlined elevation="0" plain class="green lighten-3">
    <v-icon>mdi-eye</v-icon>
    {{ score }}
  </v-btn>
</template>
<script>
import { UserData } from '../storage/user.ts'
export default {
  name: 'ScoreDisplay',
  computed: {
    score(){
      return UserData.Score
    }
  }
}
</script>
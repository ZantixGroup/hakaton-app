<template>
  <v-btn rounded outlined elevation="0" plain class="green-border">
    <img src="svg/star.svg" height="20px" width="20px" />
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

<style scoped lang="scss">
.green-border {
  background-color: $color-bg-green;
  border-color: $color-primary;
  border-width: 3px;
}
</style>

<template>
  <v-container class="bg-gray d-flex flex-column align-items-center">
    <div class="pedestal" v-if="leaderboard?.length > 0">
      <div class="bronze">
        <img :src="`svg/avatars/${leaderboard[2].avatar}.svg`" width="93.6px" height="93.6px">
        <img src="svg/pedestal/bronze.svg" width="78px">
      </div>
      <div class="gold">
        <img src="svg/pedestal/crown.svg" width="60px">
        <img :src="`svg/avatars/${leaderboard[0].avatar}.svg`" width="93.6px" height="93.6px">
        <img src="svg/pedestal/gold.svg" width="78px">
      </div>
      <div class="silver">
        <img :src="`svg/avatars/${leaderboard[1].avatar}.svg`" width="93.6px" height="93.6px">
        <img src="svg/pedestal/silver.svg" width="78px">
      </div>
    </div>
    <v-simple-table >
    <template v-slot:default>
      <tbody>
        <tr
          v-for="(item, index) in leaderboard"
          :key="item.name"
          :class="{'user-highlight':  item.id === id}"
          class="bg g-row bg-gray bg-gray-children"
          @click="prevent"
        >
          <td><b>{{ index+1 }}</b></td>
          <td class="image-column"><img :src="`svg/avatars/${item.avatar}.svg`" width="35px" height="35px"></td>
          <td><b>{{ item.name }} {{ item.surname }}</b></td>
          <td style="display: flex; align-items: center;"> <img src="svg/star.svg" height="20px" width="20px" style="float: left"/> <b style="margin-left: 10px;">{{ item.score }}</b></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</v-container>
</template>
<script>
import { UserData } from '../storage/user.ts'
export default {
  transition: {
    name: 'test',
    mode: 'out-in'
  },
    name: 'TopPage',
    data () {
    return {
      leaderboard: []
    }
  },
  computed: {
    id(){
      return UserData.Id
    }
  },
  created() {
    this.$axios.get('/users').then(res => {
      this.leaderboard = res.data.data
    })
  },
  methods: {
    changeToCategory(e){
      this.$router.push({ name: e})
    },
    prevent(e){
      e.preventDefault()
      e.stopImmediatePropagation()
      e.stopPropagation()
    }
  }
}
</script>
<style scoped lang="scss">
.bg-gray-children * {
  background-color: $color-bg-grey !important;
}
.bg-gray {
  background-color: $color-bg-grey !important;
}
.g-row {
  border-color: transparent;
  border: 0px;
  outline: 3px;
}

.g-row * {
  border-color: transparent !important;
  border: 0px !important;
  outline: 3px;
  pointer-events: none;
}

.user-highlight > td:first-child {
  border-left: 3px solid #80DB56 !important;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.user-highlight > td:last-child{
  border-right: 3px solid #80DB56 !important;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.user-highlight > td {
  border-top: 3px solid #80DB56 !important;
  border-bottom: 3px solid #80DB56 !important;
}

tr:first-child > .image-column > img:first-child {
  outline: 3px solid #FFD12D !important;
  border-radius: 50%;
}

tr:nth-child(2) > .image-column > img:first-child {
  outline: 3px solid #B1B4BD !important;
  border-radius: 50%;
}

tr:nth-child(3) > .image-column > img:first-child {
  outline: 3px solid #F7B59B !important;
  border-radius: 50%;
}

.pedestal {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: auto;
  padding-top: 50px;
}

.gold {
  transform: translateY(-50px);
}

.pedestal > div > img:last-child {
  transform: translateY(-20px);
}

.pedestal > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.gold > img:first-child {
  transform: translateY(30px) translateX(-30px);
}
</style>

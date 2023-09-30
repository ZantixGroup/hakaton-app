<template>
  <div class="bg-gray">
    <img src="/top.png" width="100%"/>
    <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr
          v-for="item in leaderboard"
          :key="item.name"
          class="bg-gray"
        >
          <td><b>{{ item.place }}</b></td>
          <td>pfp-{{ item.avatar }}</td>
          <td><b>{{ item.name }}</b></td>
          <td style="display: flex; align-items: center;"> <img src="svg/star.svg" height="20px" width="20px" style="float: left"/> <b style="float: right; margin-left: 10px;">{{ item.score }}</b></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>
<script>
export default {
    name: 'TopPage',
    data () {
    return {
      leaderboard: [
        { place: 1, avatar: 0, name: "Testa lietotajs 1", score: 107 },
        { place: 2, avatar: 1, name: "Testa lietotajs 2", score: 106 },
        { place: 3, avatar: 2, name: "Testa lietotajs 3", score: 105 },
        { place: 4, avatar: 0, name: "Testa lietotajs 4", score: 104 },
        { place: 5, avatar: 1, name: "Testa lietotajs 5", score: 103 },
        { place: 6, avatar: 2, name: "Testa lietotajs 6", score: 102 },
        { place: 7, avatar: 0, name: "Testa lietotajs 7", score: 101 },
        { place: 8, avatar: 1, name: "Testa lietotajs 8", score: 100 },
      ]
    }
  },
    methods: {
      changeToCategory(e){
        this.$router.push({ name: e})
      }
    }
}
</script>
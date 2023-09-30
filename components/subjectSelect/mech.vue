<template>
  <v-card class="blue white--text" flat @click="(e)=>cEvent(e)">
    <div class="d-flex flex-column text-center mx-3" style="height: 400px;">
      <div class="d-flex flex-column mt-7">
        <h1>Inženierija</h1>
        <span>
          Izstrādā risinājumus reāliem izaicinājumiem
        </span>
      </div>
      <v-spacer/>
      <div class="my-3" style="font-size: 50px;">
        <b>25/100</b>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'MechSelect',
  methods: {
    cEvent(e){
      this.$emit('click', e)
    }
  }
}
</script>
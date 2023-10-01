<template>
  <v-card class="red white--text" flat @click="(e)=>cEvent(e)">
    <div class="d-flex flex-column text-center mx-3" style="height: 400px;">
      <div class="d-flex flex-column mt-7">
        <h1>Zinātne</h1>
        <span>
          Sistemātiska un kārtota patiesības meklēšana
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
  name: 'ScienceSelect',
  methods: {
    cEvent(e){
      this.$emit('click', e)
    }
  }
}
</script>
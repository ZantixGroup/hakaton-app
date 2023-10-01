<template>
  <v-row justify="center" align="center" style="height: 100%;" class="bg">
    <v-col cols="12">
      <StudyButtons :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
    </v-col>
  </v-row>
</template>
<script>
import StudyButtons from '~/components/StudyButtons.vue';

export default {
  name: "info-container",
  components: { StudyButtons },
  data() {
      return {
          title: "Inženierzinātnes",
          subtitle: "Arhitektūra un būvnieciba",
          items: [
          {title: "Ievads", subtitle: "Ievads inženierzinātnēs", locked: true}, 
          {title: "Grafisko zīmēšanas pamati", subtitle: "Internacionālie standarti veidojot grafiskos zīmējumus", locked: true}, 
          {title: "Vizualizācijas", subtitle: "3-skati, rasēšana", locked: true}, 
          {title: "SOLIDWORKS", subtitle: "Elektroniskā rasēšana", locked: true}, 
          ],
        
      };
  },
  components: { StudyButtons }
}
</script>
<template>
  <v-row justify="center" align="center" style="height: 100%;" class="bg">
    <v-col cols="12">
      <StudyButtons :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
      <StudyButtons :title1="title2" :subtitle1="subtitle2" :items="items2"></StudyButtons>
      <StudyButtons :title1="title3" :subtitle1="subtitle3" :items="items3"></StudyButtons>
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
          title: "Fizika",
          subtitle: "Fizikas nozare, dabas izspēte",
          items: [
          {title: "Ievads", subtitle: "Ievads fizikas nozārē un saistītajās jomās", locked: true}, 
          {title: "Vielu agregātstāvokļi", subtitle: "Cietas, skirdas, gāzveida vielas", locked: true}, 
          {title: "Elektriskā strāva", subtitle: "Elektrība, strāva, lādiņs", locked: true}, 
          {title: "Darbs, jauda, enerģija", subtitle: "Vilcējspējs, siltumenerģija", locked: true}, 

          ],
          
          title2: "Ķīmija",
          subtitle2: "Vielu pārvēršana un transformācija",
          items2: [
            {title: "Ievads", subtitle: "Ķīmijas nozare", locked: true }, 
            {title: "Fizieskie lielumi", subtitle: "Fizikālie lielumi pasaulē", locked: true }, 
            {title: "Šķīdumi", subtitle: "Ūdens, skābes, bāzes", locked: true }, 
            {title: "Metāli", subtitle: "Dzelzs, alumīnija, vara izpēte", locked: true }, 
            {title: "Atomu un vienu uzbūve", subtitle: "Atoma sastāvdaļu izpēte", locked: true },  
          ],

          title3: 'Bioloģija',
          subtitle3: 'Dabas un cilvēka izpēte. No vissīkākajiem organismiem līdz visplašākajām sistēmām uz šīs planētas.',
          items3: [
            {title: "Augi", subtitle: "Augi ekosistēmās - mežos, krastos, kalnos, tuksnešos", locked: true }, 
            {title: "Aļģes", subtitle: "Ūdens pasaules izpētne", locked: true }, 
            {title: "Dzīvnieki", subtitle: "Dzivnieku evolūcija un savstarpējās attiecības", locked: true }, 
            {title: "Cilvēks", subtitle: "Šūnu uzbūve, saistautdi, nervaudi", locked: true }, 
            {title: "Biotehnoloģijas", subtitle: "DNS, RNA, selekcija", locked: true },
          ]
      };
  },
  components: { StudyButtons }
}
</script>
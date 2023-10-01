<template>
  <v-row justify="center" align="center" style="height: 100%;" class="bg">
    <v-col cols="12">
      <StudyButtons color="green" :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
      <StudyButtons color="green" :title1="title2" :subtitle1="subtitle2" :items="items2"></StudyButtons>
      <StudyButtons color="green" :title1="title3" :subtitle1="subtitle3" :items="items3"></StudyButtons>
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
          title: "Algebra",
          subtitle: "Algebriskie vienādojumi",
          items: [
          {title: "Ievads", subtitle: "Ievads algebrā", target: 'mathematics-1', locked: false}, 
          {title: "Daļveida izteiksmes", subtitle: "Daļveida izteiksmes un to pielietojums", target: 'mathematics-2', locked: false}, 
          {title: "Kvadrātfunkcija", subtitle: "Darbs ar kvadrātfunkcijām", target: 'tech-4', locked: true}, 
          {title: "Polinomu dalīšana", subtitle: "Polinomu aprēķināšanas veidi", target: 'tech-2', locked: true, locked: true},          
          {title: "Statistika", subtitle: "Kolerācija ", locked: true }, ],
          
          title2: "Ģeometrija",
          subtitle2: "Trīstūri, riņķi un citas figūras",
          items2: [
            {title: "Riņķa līnija", subtitle: "Riņķi un apļi", target: "mathematics-g1",locked: false }, 
            {title: "Sin, cos", subtitle: "Sīnusi un kosīnusi", target: "mathematics-g2",locked: false }, 
            {title: "Taisnleņķa trīstūris", subtitle: "Aprēķināšana, hipetenūza, mediānas", locked: true }, 
            {title: "Lenķi un nogriežņi", subtitle: "Taisnu, paralēlu un citu līniju aprēķināšana", locked: true }, 
          ],

          title3: 'Matricas',
          subtitle3: 'Darbs ar matricām, to manipulācija',
          items3: [
            {title: "Matricu reizināšana ar konstanti", subtitle: "Ievads rēķināšanā ar matricām un reizināšana ar konstantēm", locked: true }, 
            {title: "Matricu saskaitīšana un atņemšana", subtitle: "N-tās dimensija matricu saskaitīšana", locked: true }, 
            {title: "Matricu reizināšana", subtitle: "Vairāku dimensiju matricu reizināšana", locked: true }, 
            {title: "Determinanti", subtitle: "Determinantu definīcija un to aprēķināšana", locked: true }, 
            {title: "N-tās pakāpes determinanti", subtitle: "N-tās pakāpes matricas aprēķināšana", locked: true },
          ]
      };
  },
  components: { StudyButtons }
}
</script>
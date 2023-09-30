<template>
    <v-row justify="center" align="center" style="height: 100%;" class="bg">
      <v-col cols="12">
        <StudyButtons :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
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
            title: "Javascript",
            subtitle: "Ievads un praktiskās mācības Javascript valodā",
            items: [
            {title: "Ievads", subtitle: "Ievads Javascript valodā, kur tiek parādītas Javascript valodas spējas", target: 'tech-1'}, 
            {title: "Javascript selektori", subtitle: "Kā izvēlēties html elementus no javascript, prieks manipulācijas", target: 'tech-2'}, 
            {title: "Animācijas ar javascript", subtitle: "Vienkāršas animācijas un objektu kustība", target: 'tech-3'}, 
            {title: "Dati no citām sistēmām", subtitle: "Dati iegūšana un nosūtne no ārējām sistēmām", target: 'tech-4'}, 

            {title: "Darbs ar Vue.JS", subtitle: "Vue.JS kopne, darbs ar to", locked: true }, 
            {title: "Javascript serveru vidē", subtitle: "Kā izmantot Javascript, lai sazinātos ar datubāzēm un citām sistēmām", locked: true }, 
            {title: "AI Javascript pasaulē", subtitle: "Mākslīga intelekta pamati un javascript pakotnes prieks AI", locked: true }, 
            {title: "Integrācija ar AI", subtitle: "Kā savienot mākslīga intelekta sistēmas ar mājaslapām caur Javascriptu", locked: true }, 
            ]
        };
    },
    components: { StudyButtons }
}
</script>
<template>
  <v-row justify="center" align="center" style="height: 100%;" class="bg">
    <v-col cols="12">
      <StudyButtons color="red" :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
      <StudyButtons color="red" :title1="title2" :subtitle1="subtitle2" :items="items2"></StudyButtons>
      <StudyButtons color="red" :title1="title3" :subtitle1="subtitle3" :items="items3"></StudyButtons>
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
          {title: "Vielu agregātstāvokļi", subtitle: "", locked: true}, 
          {title: "Elektriskā strāva", subtitle: "Vienkāršas animācijas un objektu kustība", locked: true}, 
          {title: "Darbs, jauda, enerģija", subtitle: "Dati iegūšana un nosūtne no ārējām sistēmām", locked: true}, 

          ],
          
          title2: "Ķīmija",
          subtitle2: "Serveru un programmatūras uzstādne un apkope",
          items2: [
            {title: "Linux uzstādne", subtitle: "Kas ir linux, kur to izmanto un kā uzstādīt", locked: true }, 
            {title: "Bash pamata komandas", subtitle: "Bash komandrinda un populārākie rīku izmantošana", locked: true }, 
            {title: "Tīkla pamata darbība", subtitle: "TCP/IP, Arp un tīklu veidi", locked: true }, 
            {title: "Apache2/Nginx web serveri", subtitle: "Pamata web servera uzstādne, ķešēšana, drošība", locked: true }, 
            {title: "DNS serveris", subtitle: "Kas ir DNS un kā to uzstādīt izmantojot BIND9", locked: true }, 
            {title: "E-pasta serveri un IMAP", subtitle: "Privāta e-pasta servera uzstādne mājas tīklā", locked: true }, 
          ],

          title3: 'Bioloģija',
          subtitle3: 'Darbs ar lielajiem datiem un to lietišķa izmantošana',
          items3: [
            {title: "Kas ir lielie dati?", subtitle: "Kas ir lielie dati un kā tos izmantot", locked: true }, 
            {title: "Statistika un trendi", subtitle: "Nākotnes trendu noteikšana izmantojot Excel", locked: true }, 
            {title: "Kā mākslīgais intelekts iekļaujas", subtitle: "Kā mākslīgais  inteleks izmanto lielos datus un pielāgojas", locked: true }, 
            {title: "AI ar Python", subtitle: "Ai pamati ar PyTorch un tirgus situācijas analīzes veikšana izmantojot publiski piejamos datus", locked: true }, 
            {title: "Modernie lielo datu rīki", subtitle: "Kā ChatGPT un citi rīki integrējas darba gaitā", locked: true },
          ]
      };
  },
  components: { StudyButtons }
}
</script>
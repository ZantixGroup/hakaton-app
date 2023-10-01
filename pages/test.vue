<template>
  <div>
    <div class="tests-container" v-if="show">
      <h1>Atbildot uz šiem jautājumiem, mēs sapratīsim Tavas striprās puses</h1>
      <br>
      <div>
        <h2>1. Kā Tu pavadi savu brīvo laiku?</h2>
        <v-radio-group
            column
        >
          <v-radio
              label="Tērzējot ar draugiem."
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Lasīt žurnālus, avīzes, ziņas, skatos ziņu raidījumus."
              value="radio-2"
          ></v-radio>
          <v-radio
              label="Eju iepirkties, salīdzinot cenas."
              value="radio-3"
          ></v-radio>
          <v-radio
              label="Remontējot, kaut ko konstruējot, instalējot datorprogrammas."
              value="radio-4"
          ></v-radio>
          <v-radio
              label="Apmeklēju kultūras pasākumi."
              value="radio-5"
          ></v-radio>
        </v-radio-group>
      </div>

      <div>
        <h2>2. Kas Tev ir galvenais savā darbā?</h2>
        <v-radio-group
            column
        >
          <v-radio
              label="Saliedēta komanda."
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Iespēja mācīties, apgūt ko jaunu."
              value="radio-2"
          ></v-radio>
          <v-radio
              label="Stabili ienākumi, karjeras izaugsme."
              value="radio-3"
          ></v-radio>
          <v-radio
              label="Spēja kaut ko uzlabot."
              value="radio-4"
          ></v-radio>
          <v-radio
              label="Radošums."
              value="radio-5"
          ></v-radio>
        </v-radio-group>
      </div>

      <div>
        <h2>3. Kas Tev dzīvē ir galvenais?</h2>
        <v-radio-group
            column
        >
          <v-radio
              label="Attiecības."
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Izziņa."
              value="radio-2"
          ></v-radio>
          <v-radio
              label="Finanšu stabilitāte."
              value="radio-3"
          ></v-radio>
          <v-radio
              label="Modernizācija"
              value="radio-4"
          ></v-radio>
          <v-radio
              label="Spēja radīt."
              value="radio-5"
          ></v-radio>
        </v-radio-group>
      </div>

      <div>
        <h2>4. Kas Tev cilvēkā ir galvenais?</h2>
        <v-radio-group
            column
        >
          <v-radio
              label="Laipnība un līdzjūtība."
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Godīgums."
              value="radio-2"
          ></v-radio>
          <v-radio
              label="Smags darbs."
              value="radio-3"
          ></v-radio>
          <v-radio
              label="Iztēles klātbūtne."
              value="radio-4"
          ></v-radio>
        </v-radio-group>
      </div>

      <div>
        <h2>5. Ko Tu darītu bez maksas?</h2>
        <v-radio-group
            column
        >
          <v-radio
              label="Strādātu ar cilvēkiem."
              value="radio-1"
          ></v-radio>
          <v-radio
              label="Mācītos kaut ko jaunu."
              value="radio-2"
          ></v-radio>
          <v-radio
              label="Neko."
              value="radio-3"
          ></v-radio>
          <v-radio
              label="Izgudrot kaut ko jaunu."
              value="radio-4"
          ></v-radio>
          <v-radio
              label="Veidot."
              value="radio-5"
          ></v-radio>
        </v-radio-group>
      </div>
      <v-btn variant="tonal" @click="magic">
        Iesniegt
      </v-btn>
    </div>
    <div v-show="!show" style="text-align: center">
      <h1>Pēc testa rezultāta mēs esam noteikuši, ka Tu varētu būt<br> <u>{{ result.speciality }}</u> - <u>{{ result.category }}</u> jomā</h1>
      <br>
      <div class="center" style="text-align: center;">
        <v-btn variant="tonal" style="text-align: center;" @click="$router.push('/starter')">
          Iet mācīties
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// import {UserData} from "~/storage/user";

export default {
  name: 'profile',
  layout: 'test-layout',
  data() {
    return {
      show: true,
      specialities: {
        math: ["Matemātiķis", "Ekonomists", "Kriptogrāfs", "Statistiķis", "Investīciju, finanšu, budžeta analītiķis", "Grāmatvedis", "Auditors", "Pētnieks", "Skolotājs", "Meteorologs", "Apdrošināšanas speciālists", "Animators", "Datorspēļu dizaineris", "Žurnālists", "Fotogrāfs"],
        technology: ["Programmēšanas inženieris", "Mājas lapu izstrādātāji", "IT administratori", "Datortīklu un datorsistēmu administratori", "Biznesa analītiķis", "Inženieris", "Datortehnikas mehāniķis", "Datubāzes programmētājs", "Projektu vadītājs", "Statistiķis", "Skolotājs", "Tehnisko risinājumu speciālists"],
        engineer: ["Inženieris"],
        science: ["Inženieris", "Astronauts", "Pilots", "Arhitekts", "Elektriķis", "Apskaņotājs", "Ģeologs", "Medicīnas fiziķis", "Kodolfiziķis", "Datorsistēmu analītiķis", "Skolotājs", "Metalurgs", "Patentu aģents", "Optometrists", "Jūrnieks"]
      },
      result: {
        category: null,
        speciality: null
      }
    }
  },
  methods: {
    magic () {
      const category = this.getRandomInt(0, 4)
      if(category === 0) {
        this.result.category = 'Matemātikas'
        this.result.speciality = this.specialities.math[this.getRandomInt(0, this.specialities.math.length-1)]
      }

      if(category === 1) {
        this.result.category = 'Tehnoloģijas'
        this.result.speciality = this.specialities.engineer[this.getRandomInt(0, this.specialities.engineer.length-1)]
      }

      if(category === 2) {
        this.result.category = 'Indžinierijas'
        this.result.speciality = this.specialities.engineer[this.getRandomInt(0, this.specialities.engineer.length-1)]
      }

      if(category === 3) {
        this.result.category = 'Zinātnes'
        this.result.speciality = this.specialities.science[this.getRandomInt(0, this.specialities.science.length-1)]
      }
      this.show = false
    },
    getRandomInt (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
  }
}
</script>

<style scoped>
.tests-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 300px;
}

.center {
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100px;
}
</style>

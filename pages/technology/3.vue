
<template>
  <div class="d-flex justify-center">
    <v-card max-width="800px" >
    <v-card-title>
      Vienkāršas animācijas un objektu kustība
    </v-card-title>
    <v-card-text>
      Animācijas iespējams izveidot izmantojot "animejs" pakotni. Šī pakotne tiks izmantota visos piemēros.
      Pašas elementārākās operācijas ir bloku pārvietošana izmantojot `translateX` css stilu.
      <div>
        <CodePreview :code="task1Code" :htmlCode="task1Html">
          <template v-slot:html>
            <div style="gap: 5p; width: 200px;">
              <div class="grid-element task-1" />
              <div class="grid-element task-2" />
              <div class="grid-element task-3" />
            </div>
          </template>
        </CodePreview>
      </div>
      Ir arī iespējams pārvaldīt specifiskus laika intervālus. Sekojošajā piemērā ar slider palīdzību var izvēlēties cik tālu animācijā ir noteiktais objekts.
      <div>
        <CodePreview :code="task1Code" :htmlCode="task1Html">
          <template v-slot:html>
            <div style="gap: 5p; width: 200px;">
              <div class="grid-element task-4" />
              <div class="grid-element task-5" />
              <div class="grid-element task-6" />
              <v-slider
                max="100"
                min="0"
                @input="changeAnim"
              ></v-slider>
            </div>
          </template>
        </CodePreview>
      </div>
      <h2 class="my-3">Uzdevums</h2>
      Lai pabeigtu šo DEMO gala uzdevumā nepieciešams atbildēt uz izvēles jautājumu.
      <div>
        Vai ir iespējams izveidot animāciju, kura iet mūžīgi?
        <v-radio-group v-model="radioChoice">
          <v-radio
            :label="`Nē, nav iespējams`"
            :value="0"
          ></v-radio>
          <v-radio
            :label="`Ir iespējams, bet tikai ļoti noteiktos gadījumos`"
            :value="1"
          ></v-radio>
          <v-radio
            :label="`Ir iespējams`"
            :value="2"
          ></v-radio>
        </v-radio-group>
        <v-btn :disabled="doneTask" color="primary" @click="checkCode()">Pārbaudīt</v-btn>
        <v-alert color="error" class="my-2 mx-2" v-if="testFail" style="color: white">
          <v-icon color="white" class="mx-2">mdi-alert</v-icon> Nepareizi!
        </v-alert>
      </div>
      <v-card-actions>
        <v-spacer/>
      <v-btn v-if="doneTask" color="primary" text @click="nextCat()">
        Pabeigt DEMO
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
  </div>
  
</template>
<script>
import anime from 'animejs';
import CodePreview from '~/components/CodePreview.vue';
export default {
  name: 'JS-Task-3',
  data(){
    return {
      task1Code: `
      anime({
        targets: '.task-1', // Izvēlas visus elementus ar klasi "task-1" priekš animācijas
        translateX: 270, // Cik pikseļus pārvietoties X virzienā
        direction: 'alternate', // Kāda virzienā veikt animācija. Šajā gadījuma pārvietojoties pa labi, un tad agriežoties
        loop: true, // Vai atkārtot šo animāciju?
        easing: 'easeInOutSine' // Funkcija, kuru izmanto prieks animācijas aprēķina
      });
      anime({
        targets: '.task-2',
        translateX: 180,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.task-3',
        translateX: 90,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
      `,
      task1Html: `
      <div class="grid-element task-1" />
      <div class="grid-element task-2" />
      <div class="grid-element task-3" />
      <input class="slider" step="0.01" type="range" min="0" max="100" value="0" />
      `,
      task2Code: `
      var animation = anime({
      targets: '.task-1',
      translateX: 270,
      delay: function(el, i) { return i * 100; },
      elasticity: 200,
      easing: 'easeInOutSine',
      autoplay: false
    });

    var progressBar = document.querySelector('.slider');
    progressBar.oninput = function() {
      animation.seek(animation.duration * (progressBar.value / 100));
    };
      `,

      animation1: undefined,
      animation2: undefined,
      animation3: undefined,


      radioChoice: undefined,
      doneTask: false,
      testFail: false,
    }
  },
  mounted(){
    setTimeout(()=>{
      anime({
        targets: '.task-1',
        translateX: 270,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.task-2',
        translateX: 180,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
      anime({
        targets: '.task-3',
        translateX: 90,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
      
      this.animation1 = anime({
        targets: '.task-4',
        translateX: 270,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false
      });

      this.animation2 = anime({
        targets: '.task-5',
        translateX: 250,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false
      });

      this.animation3 = anime({
        targets: '.task-6',
        translateX: 230,
        delay: function(el, i) { return i * 100; },
        elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false
      });

    }, 300)
  },  
  methods: {
    changeBtnColor(){
      this.isBtnClicked = !this.isBtnClicked
    },
    changeAnim(v){
      if(!this.animation1) return
      this.animation1.seek(this.animation1.duration * (v / 100));
      this.animation2.seek(this.animation2.duration * (v / 100 * 0.7));
      this.animation3.seek(this.animation3.duration * (v / 100 * 0.5));
    },
    checkCode(){
          if(this.radioChoice === 2){
            this.doneTask = true
          }
          else {
            this.testFail = true
          }
        },
        nextCat(){
          this.$router.push({ name: "technology"})
        }
  }
}
</script>
<style>
.greenBtn {
  background-color: rgb(84, 216, 84);
}
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
  width: 300px;
}
.grid-element {
  width: 20px;
  height: 20px;
  background-color: green;
  transform: translateX(0);
}
</style>

<template>
  <div class="d-flex justify-center">
    <v-card max-width="800px" >
    <v-card-title>
      Javascript selektori
    </v-card-title>
    <v-card-text>
      Ar Javarscript valodu ir iespējams izvēlēties vairākus html elementus, ar kuriem pēctam ir iespējams strādāt.
      Viens vienkārš piemērs ir - skaitītājs. Katru reizi kad nospiež pogu, skaitītājs palielinbas par 1.
      <div>
        <CodePreview :code="counterCode" :htmlCode="counterHtmlCode">
          <template v-slot:html>
            <div class="mx-4 my-2"><b>{{ counterVal }}</b></div>
            <v-btn color="primary" @click="counterVal++">
              <v-icon>mdi-plus</v-icon> Palielināt
            </v-btn>
          </template>
        </CodePreview>
      </div>
      Dotā koda gabala dziļāks paskaidrojums -
       ...
      

      <h2>Uzdevums</h2>
      Ir dots sekojošais koda gabals - 
      <div>
        <CodePreview :htmlCode="testHtmlCode">
          <template v-slot:html>
            <v-btn color="primary" id="testButton">
              Testa poga
            </v-btn>
          </template>
        </CodePreview>
      </div>
      Papildināt doto Javascript kodu, kurs nomaina iekšējo pogas tekstu uz "Mainīta poga!"
      <div>
        <v-textarea
          :disabled="doneTask"
          label="Javascript kods"
          v-model="userCode"
        ></v-textarea>
        <v-btn :disabled="doneTask" color="primary" @click="checkCode()">Pārbaudīt</v-btn>
        <v-alert color="error" class="my-2 mx-2" v-if="testFail" style="color: white">
          <v-icon color="white" class="mx-2">mdi-alert</v-icon> Rezultējošās pogas teksts nav vienāds ar "Mainīta poga!"
        </v-alert>
      </div>
      <v-card-actions>
        <v-spacer/>
      <v-btn v-if="doneTask" color="primary" text @click="nextCat()">
        Tālāk
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      </v-card-actions>
      
    </v-card-text>
  </v-card>
  </div>
  
</template>
<script>
import CodePreview from '~/components/CodePreview.vue';
export default {
    name: 'JS-Task-2',
    data() {
        return {
            tab: 'html',
            counterVal: 0,
            counterCode: `
      let btn = document.getElemenyById('btn'); // Atrod pogas elementu
      let counter = document.getElemenyById('counter'); // Atrod skaitītāja elementu
      let skaitlis = 0; // Izveido mainīgo "skaitlis" ar vērtību 0
      btn.onclick = ()=>{ // Kad to noklišķina
        skaitlis += 1; // Palielina mainīgo pa 1
        counter.innerHtml = skaitlis;
      }`,
            counterHtmlCode: `
      <div>
        <div id="counter">0</div>
        <button id="btn">+ Palielināt</button>
      </div>
      `,
            testHtmlCode: `
      <button id="testButton" style="background-color: blue">
        Testa poga
      </button>
            `,
            userCode: 'let btn = document.getElementById("testButton")',
            testFail: false,
            doneTask: false
        };
    },
    methods: {
        changeBtnColor() {
            this.isBtnClicked = !this.isBtnClicked;
        },

        checkCode(){
          try{
            eval(this.userCode)
          }catch(e){console.log(e)}
          console.log(document.getElementById('testButton').innerText)
          if(!(document.getElementById('testButton').innerText.toLowerCase() === 'mainīta poga!')){
            this.testFail = true
          }
          else {
            this.doneTask = true
          }
        },

        nextCat(){
          this.$router.push({ name: "tech-3"})
        }
    },
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
}
</style>
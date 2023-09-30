
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
      
      <v-card-actions>
        Visi šie uzdevumi tiks praktiski parādīti tālākās lapās - 
        <v-spacer/>
      <v-btn color="primary" text>
        Tālāk
        <v-icon>mdi-arrow-right</v-icon>
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
  name: 'JS-Task-1',
  data(){
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
      `
    }
  },
  mounted(){
    setTimeout(() => {
      anime({
        targets: '.grid .grid-element',
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [13, 6], from: 'center'}),
        loop: true
      });
    }, 1000);
  },  
  methods: {
    changeBtnColor(){
      this.isBtnClicked = !this.isBtnClicked
    },
    loadFakeApi(){
      this.fakeTable = []
      this.isLoadingTableData = true
      setTimeout(()=>{
        this.isLoadingTableData = false
        this.fakeTable = this.loadedFakeTable
      }, 1000)
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
}
</style>
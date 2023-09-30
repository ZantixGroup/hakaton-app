
<template>
  <div class="d-flex justify-center">
    <v-card max-width="800px" >
    <v-card-title>
      Ievads Javascript
    </v-card-title>
    <v-card-text>
      Javascript ir moderna programēšanas valoda paredzēta prieks WEB izstrādes. 
      Javascipt tiek bieži izmantots, lai piešķirtu pogām funkcionalitāti -
      <div>
        <CodePreview :code="btnDisplayCode">
          <template v-slot:html>
            <v-btn :color="isBtnClicked?'error':'primary'" @click="changeBtnColor()">
              {{ !isBtnClicked?'Nosklišķiniet mani!':'Krāsa noaminīta uz sarkanu'}}
            </v-btn>
          </template>
        </CodePreview>
      </div>
      Iegūtu datus no citām sistēmām -
      <div>
        <CodePreview :code="tableDisplayCode">
          <template v-slot:html>
            <div class="d-flex flex-column">
              <v-btn
              class="my-2"
              color="primary"
              :loading="isLoadingTableData"
              :disabled="isLoadingTableData"
              @click="loadFakeApi">Ielādēt datus </v-btn>
              <v-simple-table class="mx-4 my-2" style="width:100%">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Vārds
                    </th>
                    <th class="text-left">
                      Punkti
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in fakeTable"
                    :key="item.name"
                  >
                    <td >{{ item.name }}</td>
                    <td >{{ item.points }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            </div>
           
          </template>
        </CodePreview>
      </div>
      Vai arī veidotu citas advancētās funkcionalitātes -
      <div> 
        <CodePreview :code="animeDisplayCode">
          <template v-slot:html>
            <div class="grid mx-4">
              <div v-for="i in gridArr" class="grid-element" />
            </div>
          </template>
        </CodePreview>
      </div>
      
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
      isBtnClicked: false,
      btnDisplayCode: `
      let btn = document.getElemenyById('btn') // Atrod pogas elementu
      btn.onclick = ()=>{ // Kad to noklišķina
        btn.color = "red"; // Nomaina krāsu uz sarkano
      }`,
      tableDisplayCode: `
        let tableData = []
        let btn = document.getElemenyById('btn') 
        btn.onclick = ()=>{
          let data = loadFromApi(); // Ielādē servera datus
          for(let i =0; i < data.length; i++){ // Iziet tiem cauri
            tableData.push(parseServerData(data[i])) // Katru elementu pārvēršs lietojamā formā
          }
        }
      `,
      animeDisplayCode: `
        anime({
          targets: '.grid .grid-element', // Iegūst visus elementus zem .grid
          scale: [
            {value: .1, easing: 'easeOutSine', duration: 500}, // Maina to izmērus
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ],
          delay: anime.stagger(200, {grid: [13, 6], from: 'center'}),
          loop: true // Un atkārto animācijui
        });
      `,
      fakeTable: [],
      loadedFakeTable: [
        { name: 'Jānis', points: 413 },
        { name: 'Olafs', points: 341 },
        { name: 'Miks', points: 279 },
        { name: 'Alberts', points: 190 },
        { name: 'Markuss', points: 89 },
        { name: 'Igors', points: 17 },
      ],
      isLoadingTableData: false,

      gridArr: new Array(78)
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
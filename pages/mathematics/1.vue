<template>
    <div class="d-flex justify-center">
        <v-card max-width="800px" >
            <v-card-title>
            Ievads Algebrā
            </v-card-title>
            <v-card-text>
                <p>Algebra ir viena no matemātikas pamatnozarēm. Algebra ir zinātne par kopām ar operācijām, kas zināmā mērā analogas darbībām ar skaitļiem. Algebrisku sistēmu piemēri ir grupas, lauki, vektoru telpas, gredzeni, struktūras.</p>
                <p>Vienkāršo algebru uzskata par būtisku pamatu jebkurai matemātikas pētīšanai, zinātnei vai inženierzinātnei, kā arī medicīnai un ekonomikai.</p>
                <p>Vienkāršā algebra atšķiras no aritmētikas ar to, ka tajā izmantotas abstrakcijas, piemēram, skaitļus aizstājot ar burtiem — gan nezināmos, gan izmantojot dažādas pieņemtas vērtības. Piemēram, x+2=5, burts “x” ir nezināmais, bet, izmantojot pretēju darbību, var iegūt “x” vērtību: x=5-2; x=3. Izteiksmē E=mc2, apzīmējumi “E” un “m” ir mainīgie, bet apzīmējums “c” ir konstanta vērtība — gaismas ātrums vakuumā.</p>
                <p>Algebra rada metodes, lai atrisinātu vienādojumus un izteiktu formulas, kas būtiski atvieglo matemātiskus aprēķinus.</p>
                <div>
                    <Multiplechoice :number="number" :question="questions" :answers="answers"></Multiplechoice>
                </div>
                <v-btn color="primary" text @click="nextCat">
                    Tālāk
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import Multiplechoice from '~/components/Multiplechoice.vue';

export default{
    name: "info-container",
    components: { Multiplechoice },
    data(){
        return{
            number: "1",
            questions: "Vai izteiksme x+3x+6-7=x ir algebriska izteiksme?",
            answers: ["Jā!", "Nē!"]
        };
    }, methods: {
        nextCat(){
          this.$router.push({ name: "mathematics-2"})
        }
    }
}
</script>

<style>
</style>
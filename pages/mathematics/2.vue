<template>
    <div class="d-flex justify-center">
        <v-card max-width="800px" >
            <v-card-title>
            Daļveida izteiksmes
            </v-card-title>
            <v-card-text>
                <p>Ja matemātikā izteiksme satur tikai skaitļus, aritmētisko darbību zīmes un iekavas, tad tā ir skaitliska izteiksme, bet, izpildot visas norādītās darbības, iegūst skaitliskās izteiksmes vērtību.</p>
                <p>Skaitliska izteiksme ir (-3)^2+5⋅0,2, bet tās vērtība ir 10.</p>
                <p>Ja skaitliskā izteiksmē kāda skaitļa vietā ir mainīgais, kas apzīmēts ar burtu, tad to sauc par algebrisku izteiksmi.</p>
                <p>Algebrisku izteiksmi, kurā ir saskaitīšana, atņemšana, reizināšana, dalīšana un kāpināšana naturālā pakāpē, sauc par racionālu algebrisku izteksmi.</p>
                <p>Racionālu algebrisku izteiksmi, kurā nav neviena dalītāja vai arī dalītājs ir skaitlis, sauc par veselu izteiksmi.</p>
                <p>Racionālu izteiksmi, kurā dalītājs satur mainīgo, sauc par daļveida izteiksmi.</p>
                <p>Daļveida racionālu izteiksmi, kurā skaitītājs un saucējs ir polinomi, sauc par algebrisku daļu.</p>
                <p>(Atceries! Par polinomu sauc monomu summu, piemēram 𝑥+𝑦;𝑥^2+3;𝑥+𝑥^2−4𝑦).</p>
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
            questions: "Vai izteiksme y-3/y^2-4y+2 ir daļveida izteiksme?",
            answers: ["Jā!", "Nē!"]
        };
    }, methods: {
        nextCat(){
          this.$router.push({ name: "mathematics"})
        }
    }
}
</script>

<style>
</style>
<template>
    <div class="d-flex justify-center">
        <v-card max-width="800px" >
            <v-card-title>
            Sinus, cosinus un tangens
            </v-card-title>
            <v-card-text>
                <p>Par taisnleņķa trijstūra šaurā leņķa sinusu sauc pretkatetes attiecību pret hipotenūzu.</p>
                <p>Par taisnleņķa trijstūra šaurā leņķa kosinusu sauc piekatetes attiecību pret hipotenūzu.</p>
                <p>Par taisnleņķa trijstūra šaurā leņķa tangensu sauc pretkatetes attiecību pret piekateti.</p>
                <p>Funkcijas sin A, cos A un tg A sauc par trigonometriskām funkcijām.</p>
                <p>Lai trigonometriskās sakarības varētu izmantot trijstūra šauro leņķu un malu aprēķināšanā, ir jāzina to vērtības.</p>
                <p>Skolas kursā visbiežāk izmanto vērtības 30, 45 un 60 grādiem. Lai uzzinātu citas vērtības jāizmanto tabulas vai kalkulators.</p>
                <TxtWithAnim :type="type"  :n="n" :text="text"></TxtWithAnim>
                <v-btn color="primary" text @click="nextCat">
                    Tālāk
                    <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import TxtWithAnim from '~/components/TxtWithAnim.vue';

export default{
    name: "info-container",
    components: { TxtWithAnim },
    data(){
        return{
            type: "sin",
            n: "100",
            text: "Sinusa piemērs"

            
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
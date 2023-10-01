<template>
    <div class="d-flex justify-center">
        <v-card max-width="800px" >
            <v-card-title>
            Rinķa līnija
            </v-card-title>
            <v-card-text>
                <p>Par riņķa līniju sauc figūru, kas sastāv no visiem tiem plaknes punktiem, kas atrodas vienādā attālumā no kāda plaknes punkta (šo punktu sauc par riņķa līnijas centru).</p>
                <p>Par riņķi sauc riņķa līniju kopā ar plaknes daļu, kuru tā ierobežo.</p>
                <p>Nogriezni, kas savieno riņķa līnijas centru ar riņķa līniju, sauc par rādiusu.</p>
                <p>Nogriezni, kas savieno divus riņķa līnijas punktus un iet caur centru, sauc par diametru.</p>
                <p>Taisni, kura krusto riņķa līniju divos punktos, sauc par sekanti.</p>
                <p>Nogriezni, kas savieno divus riņķa līnijas punktus, sauc par hordu.</p>
                <p>Taisni, kurai ar riņķa līniju ir tikai viens kopējs punkts, sauc par pieskari.</p>
                <TxtWithAnim :type="type" :x="x" :y="y" :butt="butt" :n="n" :text="text"></TxtWithAnim>
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
            type: "circ",
            n: "100",
            text: "Riņķa līnijas piemērs"
        };
    }, methods: {
        nextCat(){
          this.$router.push({ name: "mathematics-g2"})
        }
    }
}
</script>

<style>
</style>
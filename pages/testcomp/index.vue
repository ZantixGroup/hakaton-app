<template>
    <v-row justify="center" align="center" style="height: 100%;" class="bg">
      <v-col cols="12">
        <TxtWithAnim :type="type" :x="x" :y="y" :n="100" :butttype="buttype"></TxtWithAnim>
      </v-col>
    </v-row>
</template>

<script>

import TxtWithAnim from '~/components/TxtWithAnim.vue';

export default {
    name: "info-container",
    data() {
    return {
    };
  }
}

</script>
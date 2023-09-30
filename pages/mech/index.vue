<template>
    <v-row justify="center" align="center" style="height: 100%;" class="bg">
      <v-col cols="12">
        <StudyButtons :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
        <StudyButtons :title1="title" :subtitle1="subtitle" :items="items"></StudyButtons>
      </v-col>
    </v-row>
  </template>
<script>
import StudyButtons from '~/components/StudyButtons.vue';

export default {
    name: "info-container",
    components: { StudyButtons },
    data() {
        return {
            title: "Mech",
            subtitle: "mech",
            items: [
            {title: "Mech", subtitle: "mech"}, 
            {title: "Mech", subtitle:"mech"}]
        };
    }
}
</script>
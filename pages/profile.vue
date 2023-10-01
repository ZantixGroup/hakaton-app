<template>
  <div v-if="user" class="profile-container">
    <img :src="`svg/avatars/${user.avatar}.svg`" width="105px" height="105px">
    <h2>{{ user.name + ' ' + user.surname }}</h2>
    <p style="font-size: 12px;font-weight: bold">{{ user.email }}</p>
    <score-display style="margin-bottom: 10px"/>
    <div class="profile-subjects">
      <div style="background-color: #EC5757" class="profile-science">
        <img class="profile-subject-icon" :src="`svg/Science.svg`">
        <h2>Zinātne</h2>
        <h1>{{ user.s_level }}/100</h1>
      </div>
      <div style="background-color: #8CE961" class="profile-math">
        <img class="profile-subject-icon" :src="`svg/Math.svg`">
        <h2>Matemātika</h2>
        <h1>{{ user.m_level }}/100</h1>
      </div>
      <div style="background-color: #708EF8" class="profile-engineering">
        <img class="profile-subject-icon" :src="`svg/Engineering.svg`">
        <h2>Indžinierija</h2>
        <h1>{{ user.e_level }}/100</h1>
      </div>
      <div style="background-color: #FFC532" class="profile-technology">
        <img class="profile-subject-icon" :src="`svg/Technology.svg`">
        <h2>Tehnoloģijas</h2>
        <h1>{{ user.t_level }}/100</h1>
      </div>
    </div>
    <v-btn style="color: white; margin-top: 50px" color="#EC5757" height="50px" @click="logout()">
      Pieslēgties
    </v-btn>
  </div>
</template>

<script>
import {UserData} from "~/storage/user";

export default {
  name: 'profile',
  layout: 'default',
  data() {
    return {
      user: null
    }
  },
  created() {
    this.$axios.get('/me').then(res => {
      this.user = res.data.data
    })
  },
  methods: {
    logout() {
      UserData.logout().then(()=>{
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
.profile-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-subjects {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
  min-width: 450px;
}

.profile-science,
.profile-math,
.profile-engineering,
.profile-technology {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 75px;
  width: 100%;
  border-radius: 15px;
  background-color: red;
  overflow: hidden;
  color: white;
}

.profile-science:hover,
.profile-math:hover,
.profile-engineering:hover,
.profile-technology:hover {

}

.profile-subject-icon {
  position: absolute;
  height: 200px;
  width: 200px;
  transform: rotate(15deg);
  opacity: 0.1;
  left: 0;
}

</style>

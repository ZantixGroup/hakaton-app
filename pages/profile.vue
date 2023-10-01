<template>
  <div v-if="user" class="profile-container">
    <div>
      <div style="position: relative">
        <img class="profile-icon" :src="`svg/avatars/${user.avatar}.svg`" @click="isIconSelectorOpened = !isIconSelectorOpened">
        <div class="profile-icons-container" :style="{ display: isIconSelectorOpened ? 'flex' : 'none' }">
          <img v-for="icon in 4" class="profile-icon" :src="`svg/avatars/${icon}.svg`" @click="selectProfileIcon(icon)">
          <v-btn style="color: #CDCDCD;" height="50px" text @click="isIconSelectorOpened = false">
            Aizvērt
          </v-btn>
        </div>
      </div>
    </div>
    <h2>{{ user.name + ' ' + user.surname }}</h2>
    <p style="font-size: 12px;font-weight: bold">{{ user.email }}</p>
    <score-display style="margin-bottom: 10px"/>
    <div class="profile-subjects">
      <div style="background-color: #EC5757" class="profile-science" @click="$router.push('/science')">
        <img class="profile-subject-icon" :src="`svg/Science.svg`">
        <h2>Zinātne</h2>
        <h1>{{ user.s_level }}/100</h1>
      </div>
      <div style="background-color: #8CE961" class="profile-math" @click="$router.push('/mathematics')">
        <img class="profile-subject-icon" :src="`svg/Math.svg`">
        <h2>Matemātika</h2>
        <h1>{{ user.m_level }}/100</h1>
      </div>
      <div style="background-color: #708EF8" class="profile-engineering" @click="$router.push('/engineering')">
        <img class="profile-subject-icon" :src="`svg/Engineering.svg`">
        <h2>Indžinierija</h2>
        <h1>{{ user.e_level }}/100</h1>
      </div>
      <div style="background-color: #FFC532" class="profile-technology" @click="$router.push('/technology')">
        <img class="profile-subject-icon" :src="`svg/Technology.svg`">
        <h2>Tehnoloģijas</h2>
        <h1>{{ user.t_level }}/100</h1>
      </div>
    </div>
    <v-btn style="color: white; margin-top: 50px; margin-bottom: 25px" color="#EC5757" height="50px" @click="logout()">
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
      isIconSelectorOpened: false,
      user: null
    }
  },
  created() {
    this.$axios.get('/me').then(res => {
      this.user = res.data.data
    })
  },
  methods: {
    async selectProfileIcon(icon) {
      console.log(icon)
      this.user.avatar = icon
      await this.$axios.post('/self_edit', this.user)
      this.isIconSelectorOpened = false
    },
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
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-icon {
  position: relative;
  width: 105px;
  height: 105px;
  margin-bottom: 10px;
  transition: 0.2s;
  cursor: pointer;
}

.profile-icon:hover {
  scale: 1.05;
}

.profile-icons-container {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 300px;
  padding: 15px;
  background-color: white;
  border-radius: 15px;
}

.profile-subjects {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 450px;
}

.profile-science,
.profile-math,
.profile-engineering,
.profile-technology {
  user-select: none;
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
  transition: 0.2s;
  cursor: pointer;
}

.profile-science:hover,
.profile-math:hover,
.profile-engineering:hover,
.profile-technology:hover {
  scale: 1.05;
}

.profile-subject-icon {
  position: absolute;
  height: 200px;
  width: 200px;
  transform: rotate(15deg);
  opacity: 0.1;
  left: 0;
}

@media only screen and (max-width: 480px) {
  .profile-subjects {
    width: 90%;
    min-width: 300px;
  }
}
</style>

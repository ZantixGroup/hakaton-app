<template>
  <v-app style="display: flex">
    <div class="container">
      <div class="head">
        <h1>Māksla zināt!</h1>
        <div class="head_text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        </div>
        <v-btn class="additional-button" @click="$router.push('/login')">
          Sākt
        </v-btn>
      </div>
      <p style="color: white; margin-top: auto;">&copy; {{ new Date().getFullYear() }} SIA Zantix - Visas tiesības aizsargātas</p>
    </div>
  </v-app>
</template>

<script>
import {UserData} from "~/storage/user";

export default {
  auth: false,
  layout: 'main-layout',
  data() {
    return {

    }
  },
  created(){
    if (UserData.IsLoggedIn) {
      this.$router.push('/starter')
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #80DB56;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.head {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  justify-content: left;
  border-radius: 15px;
  padding: 32px;
  min-width: 400px;
  width: 60%;
}

.head > h1 {
  text-align: left;
  font-weight: 700 !important;
  font-size: 120px;
  color: white;
  margin-bottom: 10px;
}

.head_text{
  text-align: left;
  font-weight: normal;
  width: 100%;
  color: white;
}

.additional-button {
  align-self: left;
  background-color: #FFFFFF;
  border-radius: 10px;
  color: #80DB56;
  font-weight: 900 !important;
  width: 200px;
  height: 50px !important;
  box-shadow: none;
  margin-top: 20px;
  transition: .6;
}

.additional-button:hover {
  background-color: #e5e5e5;
  scale: 1.1;
}

@media only screen and (max-width: 975px) {
  .head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: auto;
    padding: 0px;
    border-radius: 15px;
    width: 100%;
    gap: 30px;
  }
  .head > h1 {
    text-align: center;
    font-weight: bold !important;
    font-size: 50px;
    color: white;
  }
  .head_text{
    text-align: left;
    font-weight: normal;
    font-size: 15px;
    text-wrap: balance;
    padding-left: 10px;
    width: 100%;
    color: white;
  }
  .container > p {
    align-self: center;
  }

  .additional-button {
    align-self: center;
    background-color: #FFFFFF;
    border-radius: 10px;
    color: #80DB56;
    font-weight: 20px;
    width: 150px;
    box-shadow: none;
    margin-top: 50px;
  }

  .additional-button:hover {
    background-color: #e5e5e5;
    scale: 1.1;
  }
}


</style>

<template>
  <v-app>
    <div class="login-container">
      <v-form class="login" ref="form" @submit.prevent="login()">
        <h1>Pieslēgšanās</h1>
        <div class="input-container">
          <p>E-pasts</p>
          <v-text-field v-model="form.email" placeholder="Ievadiet e-pastu" color="green" :rules="emailRules" outlined></v-text-field>
        </div>
        <div class="input-container">
          <p>Parole</p>
          <v-text-field v-model="form.password" placeholder="Ievadiet paroli" color="green" :rules="passwordRules" outlined type="password"></v-text-field>
        </div>
        <v-alert
          v-if="!isCorrect"
          dense
          type="error"
        >Nepareizs epasts vai parole!</v-alert>
        <v-btn type="submit" color="#80DB56" height="50px">
          Pieslēgties
        </v-btn>
        <div class="additional-buttons">
          <v-btn text>Aizmirsi paroli?</v-btn>
          <v-btn @click="$router.push('/register')" text>Izveidot kontu</v-btn>
        </div>
      </v-form>
      <p style="color: white; margin-top: auto;">&copy; {{ new Date().getFullYear() }} SIA Zantix - Visas tiesības aizsargātas</p>
    </div>
  </v-app>
</template>

<script>
import {UserData} from "~/storage/user";

export default {
  auth: false,
  layout: 'login-layout',
  data() {
    return {
      form: [
        email => null,
        password => null
      ],
      isCorrect: true,
      emailRules: [
        value => !!value || 'Lauks ir obligāts',
        (v) => /.+@.+\..+/.test(v) || 'Lūdzu ievadiet derīgu e-pastu',
        (v) => (v !== undefined && v.length < 256) || 'Ēpastam jābūt īsākam',
      ],
      passwordRules: [
        value => !!value || 'Lauks ir obligāts',
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      if(UserData.IsLoggedIn) {
        this.$router.push('/')
      }
    })
  },
  methods: {
    login() {
      if (!this.$refs.form.validate() ) { return }
      UserData.login(this.form.email, this.form.password).then(isSuccess => {
        this.isCorrect = isSuccess
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-color: #80DB56;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.login {
  margin-top: auto;
  border-radius: 15px;
  padding: 24px;
  background-color: white;
  width: 450px;
}

.login > h1 {
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #80DB56;
  margin-bottom: 10px;
}

.input-container > p {
  padding: 0 !important;
  color: #868686;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-container > div {
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 8px !important;
}

.login > button {
  width: 100%;
  color: white;
  box-shadow: none;
  border-radius: 8px !important;
}

.additional-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.additional-buttons > button {
  transition: 0.2s;
  text-transform: unset !important;
  font-size: 12px;
  color: #CDCDCD;
  margin-top: 10px;
}
.additional-buttons > button:hover {
  color: initial;
}

@media only screen and (max-width: 480px) {
  .login {
    width: 90%;
  }
}

@media only screen and (max-width: 400px) {
  .login {
    width: 350px;
  }
}
</style>

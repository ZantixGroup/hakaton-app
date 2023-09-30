<template>
  <v-app>
    <div class="register-container">
      <v-form class="register" ref="form" @submit.prevent="register()">
        <h1>Reģistrācija</h1>
        <div class="full-name">
          <div class="input-container">
            <p>Vārds</p>
            <v-text-field v-model="form.name" placeholder="Ievadiet Vārdu" color="#FFC532" :rules="nameRules" outlined></v-text-field>
          </div>
          <div class="input-container">
            <p>Uzvārds</p>
            <v-text-field v-model="form.surname" placeholder="Ievadiet Uzvārdu" color="#FFC532" :rules="surnameRules" outlined></v-text-field>
          </div>
        </div>
        <div class="input-container">
          <p>E-pasts</p>
          <v-text-field v-model="form.email" placeholder="Ievadiet e-pastu" color="#FFC532" :rules="emailRules" outlined></v-text-field>
        </div>
        <div class="input-container">
          <p>Parole</p>
          <v-text-field v-model="form.password" placeholder="Ievadiet paroli" color="#FFC532" :rules="passwordRules" outlined type="password"></v-text-field>
        </div>
        <div class="input-container">
          <p>Atkartot parole</p>
          <v-text-field v-model="form.password_confirmation" placeholder="Ievadiet atkārtoti paroli" color="#FFC532" :rules="passwordRules" outlined type="password"></v-text-field>
        </div>
        <v-alert
          v-if="!isCorrect"
          dense
          type="error"
        >E-pasts jau eksistē!</v-alert>
        <v-btn type="submit" color="#FFC532" height="50px">
          Reģistrēties
        </v-btn>
        <div class="additional-buttons">
          <div/>
          <v-btn @click="$router.push('/login')" text>Konts jau izveidots?</v-btn>
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
  layout: 'register-layout',
  data() {
    return {
      form: [
        name => null,
        surname => null,
        email => null,
        password => null,
        password_confirmation => null
      ],
      isCorrect: true,
      nameRules: [
        value => !!value || 'Lauks ir obligāts',
        (v) => (v !== undefined && v.length < 256) || 'Vārdam jābūt īsākam',
        (v) => !Number.isInteger(Number(v)) || 'Vārds var sastāvēt tikai no burtiem',
      ],
      surnameRules: [
        value => !!value || 'Lauks ir obligāts',
        (v) => (v !== undefined && v.length < 256) || 'Uzvārdam jābūt īsākam',
        (v) => !Number.isInteger(Number(v)) || 'Uzvārds var sastāvēt tikai no burtiem',
      ],
      emailRules: [
        value => !!value || 'Lauks ir obligāts',
        (v) => /.+@.+\..+/.test(v) || 'Lūdzu ievadiet derīgu e-pastu',
        (v) => (v !== undefined && v.length < 256) || 'Ēpastam jābūt īsākam',
      ],
      passwordRules: [
        value => !!value || 'Lauks ir obligāts',
        (v) => (v !== undefined && v.length < 256) || 'Parolei jābūt īsākai',
        (v) => (v !== undefined && v.length > 7) || 'Parolē jābūt vismaz 8 simboliem',
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
    register() {
      if (!this.$refs.form.validate() ) { return }
      this.$axios.post('/register', {
        'avatar': Math.floor(Math.random() * 4) + 1,
        'name': this.form.name,
        'surname': this.form.surname,
        'email': this.form.email,
        'password': this.form.password,
        'password_confirmation': this.form.password_confirmation,
      }).then(res => {
        this.$router.push('/login')
      }).catch(e => {
        this.isCorrect = false
      })
    }
  }
}
</script>

<style scoped>

.register-container {
  width: 100%;
  height: 100vh;
  background-color: #FFC532;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.register {
  margin-top: auto;
  border-radius: 15px;
  padding: 32px;
  background-color: white;
  width: 500px;
}

.register > h1 {
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: #FFC532;
  margin-bottom: 10px;
}

.full-name {
  display: flex;
  gap: 10px
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

.register > button {
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

@media only screen and (max-width: 550px) {
  .register {
    width: 90%;
  }
}

@media only screen and (max-width: 420px) {
  .register {
    width: 350px;
  }
  .full-name {
    flex-direction: column;
    gap: 0;
  }
}
</style>

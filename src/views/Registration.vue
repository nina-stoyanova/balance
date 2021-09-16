<template>
  <v-main class="orange lighten-5">
    <v-card width="500" class="mx-auto mt-9 red lighten-2 white--text">
      <v-card-title class="justify-center"> REGISTRATION </v-card-title>
      <v-card-text>
        <v-text-field label="Email" prepend-icon="mdi-email" v-model="email" />
        <v-text-field
          label="Firstname"
          prepend-icon="mdi-account-circle"
          v-model="firstName"
        />
        <v-text-field
          label="Lastname"
          prepend-icon="mdi-account-circle"
          v-model="lastName"
        />
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
          v-model="password"
        />
      </v-card-text>
      <v-btn
        class="mb-2"
        color="primary"
        elevation="2"
        rounded
        small
        @click="onRegister"
        >REGISTER</v-btn
      >
    </v-card>
  </v-main>
</template>
<style>
</style>
<script>
import { registerAxios } from "../services/api";

export default {
  data: () => ({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    registerInSuccess: false,
    registerInError: false,
  }),

  methods: {
    onRegister() {
      registerAxios(this.email, this.firstName, this.lastName, this.password)
        .then(() => {
          this.registerInSuccess = true;
        })
        .catch(() => {
          this.registerInError = true;
        });
    },
  },
};
</script>
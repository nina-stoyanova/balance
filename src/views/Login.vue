<template>
  <v-main class="orange lighten-5">
    <v-card width="500" class="mx-auto mt-9 red lighten-2 white--text">
      <v-card-title class="justify-center"> WELCOME </v-card-title>
      <v-card-text>
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
          v-model="email"
        />
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
          v-model="password"
        />
      </v-card-text>
      <v-btn
        @click="onLogin"
        class="mb-2"
        color="primary"
        elevation="2"
        rounded
        small
        >LOGIN</v-btn
      >
      <v-alert v-if="loggedInSuccess" type="success">Logged in success</v-alert>
      <v-alert v-if="loggedInError" type="error">Error</v-alert>
    </v-card>
  </v-main>
</template>

<style>
</style>

<script>
import { loginAxios2 } from "../services/api";

export default {
  data: () => ({
    loggedInSuccess: false,
    loggedInError: false,
    email: null,
    password: null,
  }),

  methods: {
    onLogin() {
      loginAxios2(this.email, this.password)
        .then(() => {
          //here we use the function from api
          //export user from api
          this.loggedInSuccess = true;
          this.email = null;
          this.password = null;
        })
        .catch(() => {
          this.loggedInError = true;
          this.email = null;
          this.password = null;
        });
    },
  },
};
</script>

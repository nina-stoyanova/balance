<template>
  <v-content class="orange lighten-5">
    <v-card width="500" class="mx-auto mt-9 red lighten-2 white--text">
      <v-card-title class="justify-center"> REGISTRATION </v-card-title>
      <v-card-text>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field label="Email" prepend-icon="mdi-email" />
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
        />
      </v-card-text>
      <v-btn class="mb-2" color="primary" elevation="2" rounded small
        >REGISTER</v-btn
      >
    </v-card>
  </v-content>
</template>
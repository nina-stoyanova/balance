<template>
  <v-content class="orange lighten-5">
    <v-card width="500" class="mx-auto mt-9 red lighten-2 white--text">
      <v-card-title class="justify-center"> PROFILE </v-card-title>
      <v-card-text>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field label="Email" prepend-icon="mdi-email" />
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
        />
        <v-text-field label="Age" type="password" prepend-icon="mdi-account" />
      </v-card-text>
      <div class="d-flex justify-end">
        <v-btn color="primary" elevation="2" small class="mr-2 mb-2"
          >EDIT</v-btn
        >
      </div>
    </v-card>
  </v-content>
</template>
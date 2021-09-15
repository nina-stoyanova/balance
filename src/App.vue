<template>
  <v-app>
    <v-app-bar class="flex-grow-0 red lighten-2">
      <v-icon large color="#fff"> mdi-scale-balance </v-icon>

      <v-spacer></v-spacer>

      <router-link to="/" class="link white--text">Home</router-link>
      <router-link to="/about" class="link white--text">About</router-link>
      <router-link to="/login" class="link white--text">Login</router-link>
      <router-link to="/profile" class="link white--text">Profile</router-link>
      <router-link to="/registration" class="link white--text"
        >Registration</router-link
      >
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<style lang="scss">
// * {
//   border: 1px solid red;
// }

.link {
  text-decoration: none;
  margin-right: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

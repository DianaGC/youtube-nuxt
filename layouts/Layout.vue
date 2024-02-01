<script>
import "./layout.scss";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  data: () => ({
    open: false,
  }),
  computed: {
    imagePath: (vm) => `/images/logo.png`,
    ...mapState({
      user: (state) => {
        return state.login.user;
      },
    }),
  },
  methods: {
    handlerSingIn() {
      this.$router.push("/login");
    },
    handlerSingOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar class="bar " app>
      <v-app-bar-nav-icon @click.stop="open = !open"></v-app-bar-nav-icon>
      <img v-if="!open" :src="imagePath" alt="logo" width="100" height="auto" />
      <v-text-field
        style="border-radius: 10px"
        density="compact"
        variant="solo"
        label="Search"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        outlined
      ></v-text-field>

      <v-btn icon> <v-icon>mdi-magnify</v-icon></v-btn>

      <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
      <div v-if="user">
        <p style="margin: 10%">{{ user }}</p>
      </div>

      <div v-if="user">
        <v-btn class="text" variant="outlined" v-on:click="handlerSingOut">
          Sign Out
        </v-btn>
      </div>

      <h1 v-else>
        <v-btn class="text" variant="outlined" v-on:click="handlerSingIn">
          Sign in
        </v-btn>
      </h1>
    </v-app-bar>
    <v-navigation-drawer app v-model="open">
      <div class="containerLogo">
        <img :src="imagePath" alt="Ejemplo" width="130" height="auto" />
      </div>
      <v-divider />
      <v-list>
        <v-list-item link to="/">
          <div class="d-flex">
            <v-icon>mdi-home</v-icon>
            <div class="menu text-subtitle-2">Home</div>
          </div></v-list-item
        >
        <v-list-item link to="/shorts"
          ><div class="d-flex">
            <v-icon>mdi-account</v-icon>
            <div class="menu text-subtitle-2">Shorts</div>
          </div></v-list-item
        >
        <v-list-item link to="/shorts"
          ><div class="d-flex">
            <v-icon>mdi-folder</v-icon>
            <div class="menu text-subtitle-2">You</div>
          </div></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

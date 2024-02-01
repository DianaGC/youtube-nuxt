<script>
import "./login.scss";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <v-container>
    <form @submit.prevent="login">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1">Account</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
          required
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
        </div>
        <v-text-field
          type="password"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="password"
          required
        ></v-text-field>

        <v-btn
          type="submit"
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Log In
        </v-btn>
      </v-card>
    </form>
  </v-container>
</template>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <About v-if="false"/>
      <WorkExperience/>
    </v-content>
  </v-app>
</template>

<script>
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

export default {
  name: "App",

  components: {
    About,
    WorkExperience
  },

  data: () => ({
    //
  })
};
</script>

<template>
  <v-container fluid class="main-content">
    <v-layout text-left wrap>
      <v-flex xs2>
        <v-list shaped>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(page, index) in nativeLinks"
              class="pa-1"
              :key="index"
            >{{ page.text }}</v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex xs10>
        <v-card class="main-content-wrapper">content</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    item: "",
    nativeLinks: [
      {
        text: "Work Experience",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "Technology Know",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ]
  })
};
</script>

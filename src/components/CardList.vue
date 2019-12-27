<template>
  <v-container fluid class="main-content">
    <v-row no-gutters justify="center">
      <template v-for="(item, index) in list">
        <v-col
          cols="12"
          sm="3"
          :key="index"
          class="my-2"
          @mouseleave="item.show = !item.show"
          @click="item.show = !item.show; setChildrens(item.children, item.show) "
        >
          <v-card class="pa-4 mx-2" color="rgba(255, 0, 0, 0.5)">
            <v-card-text class="py-4 my-4">{{ item.name }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text>{{ item.numbers}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <Card-list v-if="childrens.length > 0 && show" :list="childrens"></Card-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardList",
  props: ["list"],
  data: () => ({
    childrens: [],
    show: false
  }),
  methods: {
    setChildrens(items, show) {
      this.childrens = items;
      if (this.show != show) this.show = show;
    }
  }
};
</script>

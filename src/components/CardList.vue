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
          <v-card class="pa-4 pb-2 mx-2" min-height="190">
            <v-card-text class="py-2">
              <div class="text-center">
                <span class="d-block py-2 pb-3 title">{{ item.name }}</span>
                <div class="pb-2">
                  <v-progress-circular
                    :value="item.knowledge"
                    :rotate="0"
                    :width="6"
                    size="50"
                    color="light-blue"
                  >{{ item.knowledge}}%</v-progress-circular>
                </div>
                <span class="d-block sub-heading">{{ item.numbers}}</span>
              </div>
            </v-card-text>

            <div>
              <span
                class="caption d-block text-right"
                v-if="item.children && item.children.length > 0"
              >click to see details</span>
            </div>
          </v-card>
        </v-col>
      </template>
      <Card-list v-if="childrens && childrens.length > 0 && show" :list="childrens"></Card-list>
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

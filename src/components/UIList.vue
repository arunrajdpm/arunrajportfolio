<template>
  <v-container fluid class="ui_listComponent_wrappers">
    <v-row no-gutters>
      <template v-for="(item, index) in list">
        <v-col
          cols="12"
          sm="4"
          md='3'
          xs='6'
          :key="index"
          class="my-2"
        
        ><router-link :to="item.route">
          <v-card class=" ma-3 elevation-3  pa-1" >
            <img :src='getImgPath(item)' class="component_image"/>
            <v-card-text class="py-2">
              <div class="component_name title py-3">
                {{ item.name }}
              </div>
            </v-card-text>
          </v-card>
          </router-link>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {        
  name: "UiList",
  props: ["list"],
  data: () => ({
    childrens: [],
    show: false
  }),
    
  methods: {
    getImgPath(item) {
       return require("../assets/"+ item.imgPath + ".png");
    }
  }
};
</script>

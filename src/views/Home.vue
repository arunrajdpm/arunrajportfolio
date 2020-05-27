<template>
 <v-container fluid class="px-0 py-0 home-page_wrapper" >
    <v-content class="info_wrapper">
      <section>
          I'm Arunraj Govindsamy.
          Web Developer
      </section>
    </v-content>
    <v-content class="uicomponent_wrapper">
       <ui-list :list='list' />
    </v-content>
 </v-container>
</template>
<script>
//import About from "../components/About";
import UiList from "../components/UIList";
export default {
  name: "home",

  components: {
 //  About,
   UiList
  },

  data: () => ({    
    list: [
        {
        name: "Log In",
        desc: 'dec',
        imgPath: 'login',
        route: '/loginComponent'
        },
        {
        name: "Dashboard",
        desc: 'dec',
        imgPath: 'dashboard',
        route: '/dashboardComponent'
        },
        
    
    ]
  })
};
</script>
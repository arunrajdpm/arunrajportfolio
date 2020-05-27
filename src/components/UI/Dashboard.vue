<template>
  <v-container fluid class="pa-8" >
     <v-card class="dashboard_header">
         <v-layout justify-center align-center class="pa-3">
             <v-flex xs9>
                  <ul>
                        <li v-for='(menuItem, index) in menuItems' class="dashboard_menuItems" :key='index'>
                           <v-btn text small> {{ menuItem }} </v-btn>
                        </li>
                  </ul>
             </v-flex>
             <v-flex xs3>
                  <div class="d-flex justify-end align-center">
                    <v-btn medium  color="light-blue accent-3 white--text">
                        <i class="fas fa-plus mr-2 "></i>
                        Add new Segment
                    </v-btn>
                    <i class="mx-6 px-3 far fa-bell"></i>
                    <section class="mx-4">
                        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"  height="40" width='40'></v-img>
                    </section>
                  </div>
             </v-flex>
         </v-layout>
     </v-card>
     <v-layout class="content_wrapper py-6">
         <v-flex xs2>
             <v-card class="d-flex justify-end flex-column align-center ">
                 <section class="mx-3 caption text-center py-8" >
                     <v-img src='../../assets/upgrade.png' class="mb-6"  width="220" height="145"></v-img>
                    Upgrade to PRO to unlock more features
                 </section>
                 <v-btn large class="mb-8 px-8 light-blue accent-3 white--text">
                     Upgrade
                 </v-btn>
             </v-card>
         </v-flex>
         <v-flex xs10>
             <v-container fluid class="pa-0 ma-0">
                <v-layout row class="mx-0 pl-6">
                    <v-flex xs6  :class="index == 1 ? '': 'pr-4'" v-for='(menuItem, index) in 2' :key='index'> 
                         <v-card
                                class="mx-auto text-center"
                                color="cyan"
                                dark
                                max-width="600"
                            >
                                <v-card-text>
                                <v-sheet color="rgba(0, 0, 0, .12)">
                                    <v-sparkline
                                    :value="values[menuItem]"
                                    color="rgba(255, 255, 255, .7)"
                                    height="70"
                                    padding="24"
                                    stroke-linecap="round"
                                    smooth
                                    >
                                    <template v-slot:label="item">
                                        ${{ item.value }}
                                    </template>
                                    </v-sparkline>
                                </v-sheet>
                                </v-card-text>
                                <v-card-text class="pt-0">
                                        <div class="title font-weight-medium"> {{ label[menuItem] }}</div>
                                </v-card-text>
                            </v-card>       
                    </v-flex>
                    <v-flex  xs12>
                        <v-card class="d-flex justify-center  align-center mt-3 pa-2   chartLower_content">
                            <template v-for='(menuItem, index) in listOfItems'
                                >
                                <div class="flex-column align-center justify-center mx-5" :key="index">
                                      <div class="py-1 caption text-center">  {{ menuItem.name }}  </div>
                                        <v-progress-circular                                    
                                            :size="50"
                                            :width="8"
                                            :value="menuItem.nos"
                                            class="mx-3"
                                            color="light-blue accent-3 white--text"
                                        
                                        >
                                           <span class="caption"> {{ menuItem.nos }}</span>
                                        </v-progress-circular>
                                    </div>
                                </template>
                        </v-card>
                    </v-flex>
                 </v-layout>
            </v-container>
         </v-flex>
     </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Dashbord",
  data: () => ({
    menuItems: ['Dashboards', 'Projects', 'Users'],
    listOfItems: [ { name: 'Direct', nos: 26}, { name: 'Solid', nos: 72 }, { name: 'Organic', nos: 68}],
    label: {
        1: 'Sales this Month',
        2: 'Sales last Month'
    },
    values: {
        1:  [
        123,
        346,
        975,
        810,
        590,
        610,
        1760,
       ],
       2: [
        123,
        846,
        475,
        710,
        330,
        110,
        600,
      ]
    }
  })
};
</script>

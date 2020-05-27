<template>
  <v-container fluid class="login-content">
    <v-layout justify-center>
        <v-flex xs6>
           <v-card class='login-container'>
               <v-layout>
                   <v-flex xs7>
                       <div class="login-main_content">
                            <span class="login-header title"> Log In</span>  
                            <span  class="login-header_content caption my-2 mb-3 d-block"> Log into your account to upload or download pictures, videos or music</span>

                            <v-text-field
                                v-model="email"
                                label="Enter your Email here.."
                                outlined
                                required
                                hide-details
                            ></v-text-field>

                            <div class="d-flex justify-space-between align-center my-5">
                                <span class="caption">Forgot Password?</span>
                                
                                <v-btn medium class="light-blue lighten-1 white--text">
                                     Next                                 
                                     <v-icon small class="ml-3">mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                             
                            <v-divider class="my-5 mx-1 d-block"></v-divider>

                            <div>
                                <span class="d-block text-center my-5 caption">Or login with</span>
                                <div class="d-flex justify-center">
                                <v-btn medium outlined class="mr-3" color='grey'>
                                    <i class="fab fa-facebook mr-1"></i>
                                    facebook
                                </v-btn>
                                  <v-btn medium outlined  color='grey'>
                                    <i class="fab fa-twitter mr-1 "></i>
                                    Twitter
                                </v-btn> </div>
                                <span class="d-block text-center mt-5 pt-3 caption">Don't you have the account?<a class="ml-1 indigo--text text--darken-2">Sign Up</a></span>
                            </div>
                     </div>
                   </v-flex>
                   <v-flex xs5>                      
                       <v-img src="../../assets/sample.jpg"  ></v-img>
                   </v-flex>
               </v-layout>
           </v-card>
        </v-flex>
    </v-layout>
  </v-container>    
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    item: "",
    email: '',
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

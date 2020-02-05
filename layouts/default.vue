<template>
<v-app id="inspire" >
    <div  v-if="isAuthenticated">

       <v-btn
           small
          top
          left
       
          fab
          dark
          @click.stop="drawer = !drawer"
          

        >
                <v-icon >mdi-menu</v-icon>
        </v-btn>
    </div>
      </v-row>
    <v-navigation-drawer
    
     absolute
     temporary=""
     v-model="drawer" 
     app
     >
           <v-btn
       
          small
          top
          left
          fab
          dark
          
          @click.stop="drawer = !drawer"
        >
                <v-icon>mdi-window-close</v-icon>
        </v-btn>
      <v-list dense>

        <nuxt-link to="/" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/drummondslist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Drummonds</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/cheesemanlist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Cheeseman</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/shoppinglist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Shopping</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/vegetableslist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Vegetables</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/fruitslist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Fruits</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link to="/ampmeatslist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Amp Meats</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
         <v-divider></v-divider>
        <!-- <nuxt-link to="/login" style="text-decoration: none">
          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn block>Login</v-btn>
              </v-list-item-title>
        
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
         -->

          <v-list-item >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <v-btn @click="logout" block>Logout</v-btn>
              </v-list-item-title>
        
            </v-list-item-content>
          </v-list-item>
      

            <nuxt-link  v-if="!isAuthenticated" to="/register" style="text-decoration: none" >
          <v-list-item   >
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title><v-btn block>Register</v-btn></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

 

    <v-content >
     <nuxt/>
    </v-content>

    <v-footer color="teal darken-3" app>
      <span class="white--text ">&copy; FreshProcurement 2019</span>
    </v-footer>
 
  </v-app>

</template>
<script>

import axios from "axios"

export default {
  props: {
    source: String
  },

  data: () => ({

        drawer: null,
        miniVariant: false,
        expandOnHover: true,
        background: false,
  }),
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut')
    }
  }
};
</script>



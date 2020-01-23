

<template>

  <v-app id="inspire">
  
    <v-navigation-drawer
     :expand-on-hover="expandOnHover"
     :mini-variant="miniVariant"
 
     v-model="drawer" 
     app
     >
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
        <nuxt-link to="/procurementlist" style="text-decoration: none" >
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Procurement List</v-list-item-title>
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
        <nuxt-link to="/login" style="text-decoration: none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
            <nuxt-link to="/register" style="text-decoration: none" >
          <v-list-item link  >
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="green darken-2" left dark @click.stop="drawer = !drawer">
          <v-icon>mdi-hamburger</v-icon>
        </v-btn>
      </v-row>
    </v-container> -->

    <v-content>
     <nuxt/>
    </v-content>
    <v-footer color="green darken-2" app>
      <span class="white--text">&copy; FreshProcurement 2019</span>
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
        drawer: true,
        miniVariant: false,
        expandOnHover: true,
        background: false,
      
  })
};
</script>


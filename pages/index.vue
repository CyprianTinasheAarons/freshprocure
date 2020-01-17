<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Procurement List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Drummonds</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cheeseman</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Shopping</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vegetables</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Fruits</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Amp Meats</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green darken-2"
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>FreshProcurement</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <template>
              <v-simple-table>
                  <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Quantities</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in boxes" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

              </v-simple-table>
            </template>
         
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="green darken-2"
      app
    >
      <span class="white--text">&copy; FreshProcurement 2019</span>
    </v-footer>
  </v-app>

</template>


<script>


export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
        boxes: [
          {
            name: 'Standard Box',
            quantity: 159,
          },
          {
            name: 'Couples Box',
            quantity: 237,
          },
          {
            name: 'Banting Low Carb Box',
            quantity: 262,
          },
          {
            name: 'Diaspora Family Box',
            quantity: 305,
          },
          {
            name: 'Imported Fruit Box ',
            quantity: 356,
          },
          {
            name: 'Big Cheese Box',
            quantity: 375,
          },
          {
            name: 'Chicken(1.8kg)',
            quantity: 392,
          },
          {
            name: 'Chicken (2kg)',
            quantity: 408,
          },
          {
            name: '15kg Potatoes  ',
            quantity: 452,
          },
          {
            name: 'Big Breakfast Add-on',
            quantity: 518,
          },
           {
            name: 'Diaspora Family Box',
            quantity: 305,
          },
          {
            name: 'Imported Fruit Box ',
            quantity: 356,
          },
          {
            name: 'Big Cheese Box',
            quantity: 375,
          },
          {
            name: 'Chicken(1.8kg)',
            quantity: 392,
          },
          {
            name: 'Chicken (2kg)',
            quantity: 408,
          },
          {
            name: '15kg Potatoes  ',
            quantity: 452,
          },
          {
            name: 'Big Breakfast Add-on',
            quantity: 518,
          },
        ],
      })
    
 
  }

</script>


<template>

  <v-content>

      <div class="text-center">
  
   
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Uploading data to googlesheets...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
    <v-container class="fill-height" fluid >
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
         Box Numbers
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <template>
              <v-simple-table id="my-table">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Quantities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(name , index) in names" :key="index">
                      <td class="text-uppercase font-weight-bold">
                        <input type="text" v-model="name[0]" />
                      </td>

                      <td>
                        <v-text-field v-model="name[1]"  name="quantity"  ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
              
                </template>
              </v-simple-table>  
             <span 
              @click="dialog = true"
              :disabled="dialog"
              :loading="dialog">
              <v-btn 
           
              @click="formSubmit "
              
          >Submit</v-btn>
          </span>
          </template>
        </v-col>
      </v-row>
         
    </v-container>
       
  </v-content>
</template>


<script>

import axios from 'axios'

export default {
   middleware ({store,redirect}){
    //if the user is not authenticated
    if (!store.state.isAuthenticated){
        return redirect('/login')
    }
},
 
  props: {
    source: String
  },

  data: () => ({

    name: "",
    names: "",
    box: "",
    quantity: "",
    rows: null,
    drawer: null,
    dialog: false,
  
  }),
  mounted(){
    this.showNames()
  },
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },

  methods: {

    showNames(){
     axios
        .get("https://safe-atoll-22739.herokuapp.com/")
        .then(response => {
          this.names = response.data;
        })
        .catch(error => console.log(error));
        },

    formSubmit(e) {

      let currentObj = this;
      axios
        .post("https://safe-atoll-22739.herokuapp.com/submit", {
          productQuantity: document.getElementsByName("quantity")
          
        })
        .catch(error => console.log(error));
      
    }
  }
};
</script>




<template>
  <v-content >
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col class="text-center">
           <v-btn depressed small color="red darken-3" class="ma-2" tile >Clear</v-btn>
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
                    <tr v-for="(name , index) in names" :key="index">
                      <td>
                        <input type="text" v-model="name[0]"/>
                      </td>

                      <td>
                        <v-text-field v-model="name[1]"  name="quantity" ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
           
          </template>
        <v-alert 
        value="alert"
      color="teal darken-3"
      dark
      border="top"
      icon="mdi-check"
      transition="scale-transition"
      dismissible
                >
      Successful Calculation
    </v-alert>
    <v-btn
        @click.prevent="formSubmit"
        depressed 
        small color="teal darken-3"
        class="ma-2" 
        tile
      >
      Submit
      </v-btn>

        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
import axios from "axios";
import io from 'socket.io-client';

export default {
  props: {
    source: String
  },

  data: () => ({
    alert: false,
    name: "",
    box: "",
    quantity: "",
    rows: null,
    names: null,
    drawer: null,
    socket: io('localhost:5000')
  
  }),
  mounted(){

     axios
      .get("http://localhost:5000/")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));
  },

  methods: {

    formSubmit(e) {
      let currentObj = this;
    
   
      axios
        .post("http://localhost:5000/submit", {
          productQuantity: document.getElementsByName("quantity")
        })
        .catch(error => console.log(error));
      console.log(name);

    },

     
  }
};
</script>


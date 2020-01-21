

<template>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <template>
              <form  @submit.prevent="formSubmit">
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
                          <input type="text" v-model="name[0]">
                        </td>

                        <td>
                          <v-text-field v-model="name[1]"  >
                          </v-text-field>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn  class="ma-2" tile color="indigo" dark  type="submit">Submit</v-btn>
              </form>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  
</template>


<script>

import axios from "axios"

export default {


  props: {
    source: String
  },

  data: () => ({
    
    box: '',
    quantity: '',
    rows: null,
    names: null,
    drawer: null
  }),
  mounted() {
    axios
      .get("http://localhost:5000/")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

  },
  methods: {
    formSubmit(e) {
      axios
        .post("http://localhost:5000/submit", {
          box: document.getElementById(boxId),
          quantity: document.getElementById(quantityId)
        })
        .catch(error => console.log(error));
        console.log(name)
    }
  }
};
</script>


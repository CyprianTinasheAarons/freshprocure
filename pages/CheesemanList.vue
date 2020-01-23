<template>

<v-content>
   <template>

  <v-simple-table dense >
    <template v-slot:default>
          <tbody>
                      <tr v-for="(name , index) in names" :key="index">
              
                        <td>
                          <input  v-model="name[0]">
                          <input v-model="name[1]"  >
                          <input v-model="name[2]"  >
                          <input v-model="name[3]"  >
                          <input v-model="name[4]"  >
                          <input v-model="name[5]">
                          </input>
                        </td>
                      </tr>
                    </tbody>


    </template>
   
  </v-simple-table>

</template>
          <v-btn  class="ma-2" tile color="teal darken-3" dark  type="submit"><v-icon>mdi-whatsapp</v-icon>Share on Whatsapp</v-btn>
           <v-btn  class="ma-2" tile color="red darken-3" dark  type="submit">Print Pdf</v-btn>

</v-content>
       

   </template>

<script>
 import axios from 'axios'

  export default {
    data: () => ({
      names: ''
    }),
        mounted() {
    axios
      .get("http://localhost:5000/cheesemanList")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

  }

  }
</script>

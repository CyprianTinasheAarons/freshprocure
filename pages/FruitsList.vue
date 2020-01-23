

<template>

<v-content>
   <template>
     Fruits
       <v-simple-table dense>
    
    <template v-slot:default>
  
          <tbody>
                      <tr v-for="(name , index) in names" :key="index">
                        <td >
                        
                        {{name[0]}}
                        
                        </td>
                      </tr>
                    </tbody>

    </template>
  </v-simple-table>

</template>
          <v-btn  class="ma-2" tile color="teal darken-3" dark  type="submit"><v-icon>mdi-whatsapp</v-icon>Share on Whatsapp</v-btn>
           <v-btn  class="ma-2" tile color="red darken-3" dark  type="submit"><v-icon>mdi-printer</v-icon>Print Pdf</v-btn>

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
      .get("http://localhost:5000/fruitList")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

  }

  }
</script>

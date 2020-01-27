<template>

<v-content>
   <template>
           <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
         Drummonds
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  
     <v-simple-table dense>
    
    <template v-slot:default>

          <tbody>
                      <tr v-for="(name , index) in names" :key="index">
                        <td  class="text-uppercase font-weight-bold">
                          {{name[0]}} &nbsp;&nbsp;  {{name[1]}}
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
      .get("https://safe-atoll-22739.herokuapp.com/drummondsList")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

  }
  }
</script>

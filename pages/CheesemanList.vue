<template>

<v-content>
   <template>
           <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
       Cheeseman
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  

  <v-simple-table dense id="my-table" >
    <template v-slot:default>
          <tbody>
                      <tr v-for="(name , index) in names" :key="index">
              
                        <td class="text-uppercase font-weight-bold">
                          <input  v-model="name[0]">
                          <input v-model="name[1]"  >
                          <input v-model="name[2]"  >
                          <input v-model="name[3]"  >
                          <input v-model="name[4]"  >
                          <input v-model="name[5]">
                         
                        </td>
                      </tr>
                    </tbody>

</template>
   
  </v-simple-table>

</template>
          <v-btn  class="ma-2" tile color="teal darken-3" dark  type="submit"><v-icon>mdi-whatsapp</v-icon>Share on Whatsapp</v-btn>
           <v-btn  class="ma-2" tile color="red darken-3" dark  type="submit" @click="printPdf">Print Pdf</v-btn>

</v-content>
       

   </template>

<script>
 import axios from 'axios'
 import jsPDF from 'jspdf';
 import 'jspdf-autotable';
 const doc = new jsPDF();
doc.autoTable({html: '#my-table'});


  export default {
    data: () => ({
      names: ''
    }),
  mounted() {
     this.getCheeseman();
   
  },
  methods: {

  getCheeseman(){
    axios
      .get("http://localhost:5000/cheesemanList")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));
    }
    ,
    printPdf(){
   
      doc.save('table.pdf');
    }
  }

  }
</script>

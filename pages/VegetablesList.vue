<template>

<v-content>
   <template>
           <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
        Vegetables
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  
    <v-simple-table dense>
    
    <template v-slot:default>

          <tbody>
                      <tr v-for="(name , index) in names" :key="index">
                        <td class="text-uppercase font-weight-bold">
                          {{name[0]}}
                          {{name[1]}}
                        
                        </td>
                      </tr>
                    </tbody>

    </template>
  </v-simple-table>
</template>
       <a href @click="submitWhatsapp" :href="href" >
          <v-btn  class="ma-2" tile color="teal darken-3" dark type="submit"><v-icon>mdi-whatsapp</v-icon>Share on Whatsapp</v-btn></a>
           <v-btn  class="ma-2" tile color="red darken-3" dark  type="submit" @click="printPdf">Print Pdf</v-btn>
</v-content>
    

   </template>

<script>

import axios from "axios";
  import jsPDF from 'jspdf';
  import 'jspdf-autotable';
  const doc = new jsPDF();

  export default {
    data: () => ({
      names: '',
           href: ''
    
    })
    ,
  mounted() {
    axios
      .get("https://safe-atoll-22739.herokuapp.com/vegetableslist")
      .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

  },
  methods: {
  submitWhatsapp() {
    let i ;
    for(i=0 ;i<this.names.length ; i++){

    this.href = "https://api.whatsapp.com/send?text="+`${this.names[i]}`
    }

  } ,  
  printPdf(){
    let i ;
    for(i=0 ;i<this.names.length ; i++){
    doc.autoTable({
      body:[ this.names[i]] });}

      doc.save('vegetables.pdf');
    }
  }

  }
</script>

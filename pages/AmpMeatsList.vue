<template>

<v-content>
<template>
        <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
        Amp Meats
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  


  <v-simple-table dense>
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
                          </input>
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

 import axios from 'axios';
   import jsPDF from 'jspdf';
  import 'jspdf-autotable';
  const doc = new jsPDF();

  export default {
    data: () => ({
      names: '',    
       href: ''

    }),
    mounted(){
      axios
        .get("https://safe-atoll-22739.herokuapp.com/ampmeats")
        .then(response => {
        this.names = response.data;
      })
      .catch(error => console.log(error));

    },
  methods: {
  submitWhatsapp() {

    this.href = "https://api.whatsapp.com/send?text="+`${this.names}`

  } ,  
 printPdf(){
    let i ;
    for(i=0 ;i<this.names.length ; i++){
    doc.autoTable({
      body:[ this.names[i]] });}

      doc.save('amp.pdf');
    }
  }
  }
</script>

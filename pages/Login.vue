<template>

<v-content>
   <template>
   
  <v-form v-model="valid">
    <v-container>
        Login
      <v-row>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

    
      </v-row>
      <v-row>
     
             <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn  class="ma-2" tile color="red darken-3" dark  type="submit">Login</v-btn>
    </v-container>
         

  </v-form>
</template>

</v-content>
   </template>

   <script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>


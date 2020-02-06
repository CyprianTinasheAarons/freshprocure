<template>

<v-content>
   <template>
   
  <v-form ref="form" v-model="valid" lazy-validation>
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
            type="email"
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
           label="Password" 
           id="password"
          type="password" 
          required 
          v-model="password" 
          :rules="passwordRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" @click.prevent="submit" class="ma-2" tile color="red darken-3" dark  type="submit">Login</v-btn>
      
            <nuxt-link   to="/register" style="text-decoration: none" >Register</nuxt-link>

    </v-container>
         

  </v-form>
</template>

</v-content>
   </template>

   <script>
  export default {
    data: () => ({
      valid: false,
     
      password: '',
      passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  
   methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
                   this.$router.push('/')
        }
    }
    }
</script>


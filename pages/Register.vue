<template>

<v-content>
<template>
  
  <v-form  ref="form" v-model="valid" lazy-validation>
    <v-container>
      Register
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
            type ="email"
            name ="email"
            ></v-text-field>
        </v-col>

      </v-row>
         <v-row>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            name="password"
            id="password"
            type="password"
            :rules="passwordRules"
            :counter="10"
            label="Password"
            required
          ></v-text-field>
        </v-col>
         </v-row>
      <v-btn  class="ma-2" tile color="red darken-3" dark  :disabled="!valid" @click.prevent="submit" type="submit">Register</v-btn>
                <nuxt-link   to="/login" style="text-decoration: none" >Login</nuxt-link>
    </v-container>
  </v-form>
</template>
    
</v-content>
   </template>

<script>
  export default {
    data: () => ({
      v: '',
      valid: false,
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Password is required',
        v =>
            v.length >= 6 ||
            'Password must be greater than 6 characters'
    ],
    }),
       methods: {
        submit() {
            if(this.$refs.form.validate()){
                this.$store.dispatch('userJoin', {
                    email: this.email,
                    password: this.password
                })
            }

            this.$router.push('/')
        }}

  }
</script>
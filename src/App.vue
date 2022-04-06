<template>
   <v-app>
   <v-snackbar color="green" v-model="snackbar">
               Login success
        </v-snackbar>
       <div class="background"></div>
         <v-main class="d-flex justify-center align-center">
           <v-col cols="10" lg="4" class="mx-auto">

              <v-card>
                  <div class="text-center">
                    <img src="./assets/Logo of apijug.svg">
                  </div>
          <v-form @submit.prevent="submitHandler" ref="form">
                    <v-card-text>
                       <v-text-field
                       v-model="email"
                       :rules="emailRules"
                         type="email"
                         label="email"
                         placeholder="email"
                         prepend-inner-icon="mdi-account"/>
                          <v-text-field
                       v-model="phone"
                       :rules="phoneRules"
                         type="phone number"
                         label="phone number"
                         placeholder="phone number"
                         prepend-inner-icon="mdi-phone"/>
                       <v-text-field
                       v-model="password"
                       :rules="passwordRules"
                         :type="passwordShow?'text':'password'"
                         label="password"
                         placeholder="password"
                         prepend-inner-icon="mdi-key"
                         :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                         @click:append="passwordShow = !passwordShow"/>
                     </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn  type="submit" color="indigo">
                        <span class="white--text px-8">Login</span>
                    </v-btn>
                </v-card-actions>
       </v-form>
     </v-card>
   </v-col>
  </v-main>
 </v-app>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'App',


  data: () => ({
    loading:false,
    snackbar:false,
    passwordShow:false,
     password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length >=6) || 'password must be less than 6 character or more',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone:'',
      phoneRules:[
        v => !!v || 'phone number is required',
        v => (v && v.length >=10) ||'number must be valid'
      ],
  }),
  methods:{
    submitHandler(){
      if( this.$refs.form.validate()){
        this.loading= true
         this.snackbar=true
      }
    }
  }
};
</script>
<style>
.text-center{
  padding:4px;
}
</style>

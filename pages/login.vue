<template>
  <div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
                <v-spacer></v-spacer>
                <!-- <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="tcode" label="รหัสครู" type="text"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="password"  label="รหัสผ่าน" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="gotoPage">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
  export default {
    data() {
      // drawer: null
      return {
      tcode: '',
      password: '',
    }},// data
      // async created(){
      // console.log('ok1')
      // let res = await this.$http.post('/teacher/' )


      // this.tcode = res.data.teacher.tcode || ''
      // this.tname = res.data.teacher.tname || ''
      // this.password = res.data.teacher.password || ''

      // tcode = res.data.teacher.tcode || ''
      // password = res.data.teacher.password || ''
  // },
    methods:{
    async gotoPage() {     
      // console.log(this.tcode,this.password) 
      // console.log(tcode,password) 
      //       let res = await this.$http.post('/student/login',
      // // tcode==this.tcode,
      // // password==this.password,
      // )
      // if(tcode === this.tcode,
      // password===this.password
      // )
      {

    this.$router.push('/linkstu1')  
           }
          //  else{
          //  this.$router.push('/login')    
          //  }
           },  
   },
       layout: 'login1',
  }
</script>



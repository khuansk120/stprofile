<template>
<div>
  <h1 class="header">สมัครการเข้าใช้งาน</h1>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field label="รหัสครู" v-model="tcode" :rules="[rules.required]" 
                v-validate="'required|max:10'" :counter="10" 
                />
                <v-text-field label="ชื่อครู" v-model="tname"  :rules="[rules.required1]"
                validate="'required|max:50'" :counter="50"/>
                <v-text-field label="แผนกวิชา" v-model="department" :rules="[rules.required2]"
                validate="'required|max:50'" :counter="50"/>
            </v-flex>
    
        </v-layout>
    </v-container>
        <v-btn @click="gotosreg">บันทึก</v-btn><v-btn @click="goback1">กลับ</v-btn>
      </div>
</template>
<script>
  export default {
      layout:'stvie',
    data () {
      return {
        tcode:'',
        tname:'',
        department:'',
        title: 'Preliminary report',
        email: '',
        rules: {
          required: (value) => !!value || 'กรุณากรอกรหัสครู.',
          required1: (value) => !!value || 'กรุณากรอกชื่อครู.',
          required2: (value) => !!value || 'กรุณากรอกแผนกวิชา.',
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    },
      async created(){
      console.log('ok1')
      let res = await this.$http.get('/teacher/id/' + this.$route.query.id)
      this.tcode = res.data.teacher.tcode || ''
      this.tname = res.data.teacher.tname || ''
      this.department = res.data.teacher.department || ''
  },
    layout: 'stvie',
    methods: {    
  async gotosreg() {      
      let res = await this.$http.post('/student/insert',{
        //ทำการยิงการเชื่อมต่อในรูปแบบ post(รู้ว่าโพสต์ ไปดูจากตัว demo-ap- ไฟล์ student.js ประมาณบรรทัดที่ 55) 
      tcode:this.tcode,
      //ทำการเชื่อมต่อ ฐานข้อมูล(tcode) ให้มีค่าเท่ากับตัวแปลนี้(this.tcode)
      tname:this.tname,
      department:this.department
      })
    this.$router.push('/iteacher')  
           },  
  goback1() {      
    this.$router.push('/login')  
           },    
     },
  }
</script>
<style scoped>
.header{
  font-size: 28px;color: blue;
}
.text1{
  font-size: 18px;color: blueviolet;
}

</style>
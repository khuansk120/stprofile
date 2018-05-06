<template>
<div>
  <h1 class="header">สมัครการเข้าใช้งาน</h1>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field label="รหัสนักศึกษา" v-model="code" :rules="[rules.required]"/>
                <v-text-field label="ชื่อนักศึกษา" v-model="fname"  :rules="[rules.required1]"/>
                <v-text-field label="นามสกุลนักศึกษา" v-model="lname" :rules="[rules.required2]"/>
                <v-text-field label="แผนกวิชา" v-model="department" :rules="[rules.required3]"/>
                <v-text-field label="วันเดือนปีเกิด" v-model="birth"  :rules="[rules.required4]"/>
                <v-text-field label="ระดับชั้น" v-model="class1" :rules="[rules.required5]"/>
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
        code:'',
        fname:'',
        lname:'',
        department:'',
        birth:'',
        class1:'',
        title: 'Preliminary report',
        email: '',
        rules: {
          required: (value) => !!value || 'กรุณากรอกรหัสนักศึกษา.',
          required1: (value) => !!value || 'กรุณากรอกชื่อนักศึกษา.',
          required2: (value) => !!value || 'กรุณากรอกนามสกุลนักศึกษา.',
          required3: (value) => !!value || 'กรุณากรอกแผนกวิชา.',
          required4: (value) => !!value || 'กรุณากรอกวันเดือนปีเกิด.',
          required5: (value) => !!value || 'กรุณากรอกระดับชั้น.',
          // email: (value) => {
          //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          //   return pattern.test(value) || 'Invalid e-mail.'
          // }
        }
      }
    },
      async created(){
      console.log('ok1')
      let res = await this.$http.get('/student/id/' + this.$route.query.id)
      this.code = res.data.student.code || ''
      this.fname = res.data.student.fname || ''
      this.lname = res.data.student.lname || ''
      this.department = res.data.student.department || ''
      this.birth = res.data.student.birth || ''
      this.class1 = res.data.student.class || ''


  },
    layout: 'stvie',
    methods: {    
  async gotosreg() {      
      let res = await this.$http.post('/student/insert1',{
        //ทำการยิงการเชื่อมต่อในรูปแบบ post(รู้ว่าโพสต์ ไปดูจากตัว demo-ap- ไฟล์ student.js ประมาณบรรทัดที่ 55) 
      tcode:this.tcode,
      //ทำการเชื่อมต่อ ฐานข้อมูล(tcode) ให้มีค่าเท่ากับตัวแปลนี้(this.tcode)
      fname:this.fname,
      lname:this.lname,
      department:this.department,
      //ทำการเชื่อมต่อ ฐานข้อมูล(tcode) ให้มีค่าเท่ากับตัวแปลนี้(this.tcode)
      birth:this.birth,
      class1:this.class

      })
    this.$router.push('/istu')  
           },  
  goback1() {      
    this.$router.push('/linkstu1')  
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
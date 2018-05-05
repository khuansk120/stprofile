<template>
<div>
  <h1 class="header">ประวัตินักศึกษา</h1>
  <h1 class="text1">ชื่อ</h1>
       <li v-for="st in student" :key="st.id">
         {{st.code}}{{st.fname}}{{st.lname}}
     </li>
    <v-layout row><v-flex xs8>
        <v-text-field name="fname1" :value="fname" label="FirstName" single-line type="text"></v-text-field>
  <h1 class="text1">นามสกุล</h1>
        <v-text-field name="lname1" label="LastName" single-line type="text"></v-text-field>
  <h1 class="text1">แผนกวิชา</h1>
        <v-text-field name="dname1" label="Department Name" single-line type="text"></v-text-field>
      </v-flex> </v-layout>
      <v-btn @click='goedit' color="info">
      แก้ไขข้อมูลนักศึกษา
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
      <v-btn color="info" @click='golink'>
      กลับหน้าหลัก
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
  <!-- <nuxt></nuxt>  -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      fname:"[st.code]",
      lname:'กรุณาใส่นามสกุล',
      dname:'กรุณาใส่แผนกวิชา',
      student:[],
          }
    },
    layout: 'stvie',
methods: {    
  goedit() {      
    this.$router.push('/pageEdit')  
           },  
  golink() {      
    this.$router.push('/linkstu')  
           },    
     },
  //     watch: {
  //   cls() {
  //     this.getStudent()
  //   },
  // },

    async created(){
      console.log('YoYo')
      let res = await this.$http.get('/student', {params:{fname: "Supajaroen"}})

      // let res = await this.$http.get('/student', {params:{department: 'com'}})
    // console.log(res.data.student)
    this.student=res.data.student
    //ไม่ว่าจะฟังก์ชั่นต์ไหนก็ตาม ถ้ามีการใช้ await ต้องมีการประกาศ  async ด้านหน้า
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
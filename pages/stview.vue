<template>
<div>
  <h1 class="header">ประวัตินักศึกษา</h1>
  <h1 class="text1">ชื่อ</h1>
       <li v-for="st in student" :key="st.id">
         {{st.code}}{{st.fname}}{{st.lname}}
     </li>
    <v-layout row><v-flex xs8>
        <v-text-field name="fname1" v-model="fname" single-line type="text"/>
  <h1 class="text1">นามสกุล</h1>
        <v-text-field name="lname1" v-model="lname"  single-line type="text"/>
  <h1 class="text1">แผนกวิชา</h1>
        <v-text-field name="dname1" v-model="dname"  single-line type="text"/>
      </v-flex>
      <v-btn @click='goedit' color="info">
      แก้ไขข้อมูลนักศึกษา
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn> <br>
      <v-btn color="info" @click='golink'>
      กลับหน้าหลัก
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn>
    </v-layout>
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

  // async created(){
  //     console.log('YoYo')
  //     let res = await this.$http.get('/student/id', {params:{fname: "Supajaroen"}})
  //   this.student=res.data.student

  async created(){
      console.log('ok1')
      let res = await this.$http.get('/student/id/' + this.$route.query.id)
      this.fname = res.data.student.fname || ''
      this.lname = res.data.student.lname || ''
      this.dname = res.data.student.department || ''
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
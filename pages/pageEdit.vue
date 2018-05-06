<template>
  <div>
      <h1>Student Edit</h1>
      <v-text-field v-model="fname" label="ชื่อ" />
     <v-text-field v-model="lname" label="นามสกุล" />
     <v-text-field v-model="department" label="สาขาวิชา" />
    <v-btn @click="save">บันทึก</v-btn>
  </div>
</template>
<script>
export default {
  data(){
      return{
          fname: '',
          lname: '',
          department: '',
      }
  },
  async created(){
      let res = await this.$http.get('/student/id/' + this.$route.query.id)
      this.fname = res.data.student.fname || ''
    this.lname = res.data.student.lname || ''
     this.department = res.data.student.department || ''
  },
  methods: {
      async save() {
          let res = await this.$http.post('/student/save',{
              id: this.$route.query.id,
              fname: this.fname,
              lname: this.lname,
              department: this.department,
          })
          this.$router.push('linkstu1')
          if(!res.data.ok){
              //ToDo: แสดงข้อความว่าบันทึกไม่สำเร็จ
          } else{
              //ToDo: แสดงข้อความว่าบันทึกสำเร็จ
          }
      },
  },
   layout: 'pageEdit'
//ddd
  }
</script>

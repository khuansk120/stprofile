<template>
<div>
  <h1>เพิ่มนักศึกษาสำเร็จ</h1>
  <v-btn @click="goback1">กลับหน้าล็อกอิน</v-btn>
  </div>
</template>
<script>
export default {
     layout: 'stvie',
//     data(){
//         return{
//             tcode:'',
//             tname:'',
//             department:'',
//         }
//     },

//   async created(){
//       console.log('ok1')
//       let res = await this.$http.get('/teacher/id/' + this.$route.query.id)
//       this.tcode = res.data.teacher.tcode || ''
//       this.tname = res.data.teacher.tname || ''
//       this.department = res.data.teacher.department || ''
//   },
  methods:{
      goback1(){
          this.$router.push('/linkstu1')
      }
  },
}
</script>


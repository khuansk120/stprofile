<template>
  <div>
      <h1>Student Edit</h1>
      <v-text-field v-model="fname" label="ชื่อ" />
     <v-text-field v-model="lname" label="นามสกุล" />

    <v-btn @click="home">home</v-btn>
  </div>
</template>
<script>
export default {
  data(){
      return{
          fname: '',
          lname: '',
      }
  },
  async created(){
      let res = await this.$http.get('/student/id/' + this.$route.query.id)
      this.fname = res.data.student.fname || ''
    this.lname = res.data.student.lname || ''
  },
  methods: {
      home() {
        //   let res = await this.$http.post('/student/save',{
        //       id: this.$route.query.id,
        //       fname: this.fname,
        //       lname: this.lname,
        //   })
          this.$router.push('linkstu1')

      },
  },
   layout: 'pageEdit'

  }
</script>
<template>
  <div>
    <h1>Student List</h1>
 
  
      <li v-for="st in students" :key="st.id">
        {{ st.code }} {{ st.fname }} {{ st.lname }} {{ st.department }}
        
        <v-icon @click="editStudent(st.id)" mdi color="blue darken-2">edit</v-icon>
        <v-icon @click="viewStudent(st.id)" mdi color="red darken-2">search</v-icon>
     
    </li>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      //department: 'com',
      students: [],
      // departmentList: [
      //   { value: 'com', text: 'computer' },
      //   { value: 'acc', text: 'account' },
      //   { value: 'ele', text: 'electronic' },
      // ],
    }
  },
  // watch: {
  //   department() {
  //     this.getStudent()
  //   },
  // },
  async created() {
    console.log('created')
    this.getStudent()
  },
      layout: 'stvie',
  methods: {
    async getStudent() {
      // let res = await this.$http.get('/student?class=' + this.department)
      let res = await this.$http.get('/student', {params: {department: this.department}})
      this.students = res.data.student
    },
    editStudent(id) {
        this.$router.push('/pageEdit?id=' + id)
    },
        viewStudent(id) {
        this.$router.push('/view?id=' + id)
    },
  }, // methods
}
</script>
<template>
  <div>
    <h1>Student List</h1>
    <v-select
      :items="departmentList"
      v-model="department"
      label="Select"
      single-line
    />
    <select v-model="department">
      <option value="com">com</option>
      <option value="acc">acc</option>
    </select>
    <ul>
      <li v-for="st in students" :key="st.id">
        {{ st.code }} {{ st.fname }} {{ st.lname }}
        <v-btn @click="editStudent(st.id)">Edit</v-btn>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      department: 'com',
      students: [],
      departmentList: [
        { value: 'com', text: 'computer' },
        { value: 'acc', text: 'account' },
        { value: 'ele', text: 'electronic' },
      ],
    }
  },
  watch: {
    department() {
      this.getStudent()
    },
  },
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
        this.$router.push('/stview?id=' + id)
    },
  }, // methods
}
</script>
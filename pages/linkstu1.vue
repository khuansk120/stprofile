<template> 
<div> 
<v-toolbar card> 
        <v-toolbar-title class="title">ข้อมูลนักศึกษา</v-toolbar-title> 
</v-toolbar> 

<v-container grid-list-md> 
  <v-layout row wrap> 
     
    <v-text-field label="รหัสประจำตัว"></v-text-field>  
    <v-text-field label="ชื่อนักศึกษา" ></v-text-field>  
    <v-text-field label="นามสกุล" ></v-text-field> 
    <v-text-field label="แก้ไข" ></v-text-field> 
    
    </v-layout></v-container> 
    <ul> 
      <li v-for="st in students" :key="st.id"> 
        <v-container grid-list-md> 
          <v-layout row wrap> 
        <v-text-field  :value="st.code"></v-text-field>  
        <v-text-field :value="st.fname" ></v-text-field>  
        <v-text-field :value="st.lname" ></v-text-field>  
        <v-icon @click="editStudent(st.id)" large color="blue darken-2">chat</v-icon> 
          </v-layout></v-container></li> 
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
        this.$router.push('/pageEdit?id=' + id) 
       }, 
  }, // methods 
} 
</script>
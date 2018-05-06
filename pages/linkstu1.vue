<template> 
<div> 
<v-toolbar card> 
        <v-toolbar-title class="title">ข้อมูลนักศึกษา</v-toolbar-title> 
</v-toolbar> 

<v-container grid-list-md> 
  <v-layout row wrap> 
     <h3>รหัสนักเรียน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชื่อนักเรียน&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;นามสกุล&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดูข้อมูล&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แก้ไข</h3>
    <!-- <v-text-field label="รหัสนักเรียน"></v-text-field>  
    <v-text-field label="ชื่อนักเรียน" ></v-text-field>  
    <v-text-field label="นามสกุล" ></v-text-field> 
    <v-text-field label="ดูข้อมูล" ></v-text-field> 
    <v-text-field label="แก้ไข" ></v-text-field>  -->
    
    </v-layout></v-container> 
    <ul> 
      <li v-for="st in students" :key="st.id"> 
        <v-container grid-list-md> 
          <v-layout row wrap> 
        <v-text-field  :value="st.code"></v-text-field>  
        <v-text-field :value="st.fname" ></v-text-field>  
        <v-text-field :value="st.lname" ></v-text-field>  
        <v-icon @click="stview(st.id)" large color="blue darken-2">search</v-icon> 
        <v-icon @click="editStudent(st.id)" large color="blue darken-2">chat</v-icon> 
          </v-layout></v-container></li> 
    </ul> 

  </div> 
</template> 
<script> 
export default { 
  data() { 
    return { 
      // department: 'com', 
      students: [], 
      // departmentList: [ 
      //   { value: 'com', text: 'computer' }, 
      //   { value: 'acc', text: 'account' }, 
      //   { value: 'ele', text: 'electronic' }, 
      // ], 
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
      let res = await this.$http.get('/student') 
      this.students = res.data.student 
    }, 
    editStudent(id) { 
        this.$router.push('/pageEdit?id=' + id) 
       }, 
    stview(id) { 
        this.$router.push('/stview?id=' + id) 
       }, 


       
  }, // methods 
} 
</script>

<template>
  <div>
    <h1>  Data  Students </h1><br> 
    <h1>**************** </h1><br>
    <input type="text" :value="name">
    <button @click="addStudent">Add</button>
    <input type="text" :value="dep">
    <button @click="addDepartment">Add</button>
    <ul>
       <li v-for="st in student" :key="st.code" >
        {{ st.code }} {{ st.name }} {{ st.dep }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      code: '',
      dep: '',
      student: [
        { code: '001', name: 'Name1', dep: 'Dep1' },
        { code: '002', name: 'Name2', dep: 'Dep2' },
        { code: '003', name: 'Name3', dep: 'Dep3' },
        { code: '004', name: 'Name4', dep: 'Dep4' },
        { code: '005', name: 'Name5', dep: 'Dep5' },
        { code: '006', name: 'Name6', dep: 'Dep6' },
        { code: '007', name: 'Name7', dep: 'Dep7' },
        { code: '008', name: 'Name8', dep: 'Dep8'},
        { code: '009', name: 'Name9', dep: 'Dep9' },
        { code: '010', name: 'Name10', dep: 'Dep10' },
       
      ],
    } 
  },//data
  methods: {
    addStudent() {
      this.student.push({
        code: this.student.length+1,
        name: this.name,
        dep: this.dep,
      })
    }
  }
}
</script>

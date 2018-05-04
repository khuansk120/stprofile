<template>
  <div>
     
    <h2 >Edit ST Profile</h2>
    
    ชื่อ : <input type="text" :value="fname" style="border: 2px black solid" class="big" ><br><br>
    นามสกุล : <input type="text" :value="lname" style="border: 2px black solid" class="f-color"><br><br>
    สาขาวิชา : <input type="text" :value="department" style="border: 2px black solid"><br><br>
    <button @click="edit">Submit</button>
    
    <ul>
      <li  v-for="st in student" :key="st.code">
        <span>{{ st.code }}</span>
        <span>{{ st.name }}</span>
      </li>
    </ul>

    </div>
</template>
<script>

export default {
 
  methods:{
    addStudent() {
      this.student.push({
        code: this.code,
        name: this.name,

      })
    },


  }, 
   layout: 'pageEdit'

  }
</script>
<style scoped>
.big {
  color: red;
}
.f-color {
  color: blue;
}
</style>


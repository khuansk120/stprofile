<template>
  <div>
     
    <h2 >Edit ST Profile</h2>
    
   <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="fname" label="ชื่อ:" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" name="lname" label="นามสกุล" id="lname" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" name="department" label="สาขาวิชา" id="department" type="text"></v-text-field>
                </v-form>
              </v-card-text>
    
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


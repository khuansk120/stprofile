<template>
<div>
  
  <ul>
    <li v-for="st in 10" :key="st.id" >
      {{st.code}} {{st.first_name}} {{st.lastt_name}}
    </li>
   </ul>
  </div>
</template>
<script>
export default {
 data() {
   return {
     students: [],
   }
 },
 async created() {
    console.log ('created')
    let res = await this.$http:get('/student')
    this.students = res.data.student
 },
}
</script>


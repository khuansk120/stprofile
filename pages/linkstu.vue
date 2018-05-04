<template>
<div>
  
  <ul>
    <li v-for="n in 10" :key="n" ><nuxt-link :to="'/No0'+n">No0{{n}}</nuxt-link> 
    <v-btn color="yellow"  @click="showStu"><v-btn flat icon color="pink"><v-icon>favorite</v-icon></v-btn>ดูประวัตินักศึกษา</v-btn>
    <v-btn color="red" @click="editStu" ><v-btn flat icon color="blue"><v-icon>thumb_up</v-icon></v-btn>แก้ไขประวัตินักศึกษา</v-btn></li>
    <br>
   
   </ul>
 
 </div>
</template>
<script>
export default {
  layout: 'layerlinkstu',
  methods: {
      showStu(){
        this.$router.push('/stview')
      },
       editStu(){
        this.$router.push('/pageEdit')
       },
  }
}
</script>


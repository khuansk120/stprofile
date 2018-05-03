<template>
<div>
  <h1 class="header">ประวัตินักศึกษา</h1>
  <h1 class="text1">ชื่อ</h1><input type="text" :value="fname">
  <h1 class="text1">นามสกุล</h1><input type="text" :value="lname">
  <h1 class="text1">แผนกวิชา</h1><input type="text" :value="dname">
      <nuxt-link to="/pageEdit.vue"><v-btn
      color="info"
      :loading="loading4"
      @click.native="loader = 'loading4'"
      :disabled="loading4"
    >
      แก้ไขข้อมูลนักศึกษา
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn></nuxt-link>
          <nuxt-link to="/linkdata"><v-btn
      color="info"
      :loading="loading4"
      @click.native="loader = 'loading4'"
      :disabled="loading4"
    >
      กลับหน้าหลัก
      <span slot="loader" class="custom-loader">
        <v-icon light>cached</v-icon>
      </span>
    </v-btn></nuxt-link>
  <!-- <nuxt></nuxt>  -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      fname:'กรุณาใส่ชื่อ',
      lname:'กรุณาใส่นามสกุล',
      dname:'กรุณาใส่แผนกวิชา',
          }
    },
    layout: 'stvie',

        
}
</script>

<style scoped>
.header{
  font-size: 28px;color: blue;
}
.text1{
  font-size: 18px;color: blueviolet;
}

</style>
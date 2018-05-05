<template>
    <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/linkstu1">Home </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/isteacher">เพิ่มครู</nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <nuxt-link to="/isstu">เพิ่มนักศึกษา </nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>เว็บไซต์ประวัตินักศึกษา</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
        
        >
        <nuxt></nuxt>
          <!-- <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn icon large :href="source" target="_blank" slot="activator">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank" slot="activator">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex> -->
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">Disign By นายวรเวก เชื้อทอง วก.วังน้ำเย็น //
        นายศุภเจริญ นิลพันธุ์ วท.ปทุมธานี  //  นางวิลาวัลย์ วัชโรทัย วท.ปทุมธานี  //  นางสายชล สุขนิ่ม วท.สัตหีบ</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    
  }
</script>
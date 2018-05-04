<template>
<div>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field label="lname" v-model="lname" :rules="[rules.required]"></v-text-field>
            </v-flex>
    
        </v-layout>
    </v-container>
      </div>
</template>
<script>
  export default {
      layout:'stvie',
    data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: (value) => !!value || 'Required.',
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    }
  }
</script>
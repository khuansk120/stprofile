<template>
   <v-flex xs12>
                <v-text-field
                  label="lname"
                  v-model="lname"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
</template>

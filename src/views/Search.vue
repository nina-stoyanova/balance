<template>
  <v-form ref="form" lazy-validation class="mt-2">
    <v-text-field
      label="Search Food"
      required
      class="d-flex justify-center"
      v-model="food"
    ></v-text-field>

    <v-btn color="success" class="mt-2" @click="onSearchFood"> Search </v-btn>

    <v-list two-line class="mt-16">
      <v-list-item-group multiple>
        <template>
          <v-list-item>
            <template>
              <v-list-item-content>
                <v-list-item-title>Apples</v-list-item-title>
                <v-list-item-subtitle>Apple 100gr</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>Click me</v-list-item-action-text>
                <v-icon color="grey lighten-1"> mdi-star-outline </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template>
              <v-list-item-content>
                <v-list-item-title>Apples</v-list-item-title>
                <v-list-item-subtitle>Apple 100gr</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>Click me</v-list-item-action-text>
                <v-icon color="grey lighten-1"> mdi-star-outline </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template>
              <v-list-item-content>
                <v-list-item-title>Apples</v-list-item-title>
                <v-list-item-subtitle>Apple 100gr</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>Click me</v-list-item-action-text>
                <v-icon color="grey lighten-1"> mdi-star-outline </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-form>
</template>
<style>
.v-text-field fieldset,
.v-text-field .v-input__control {
  max-width: 450px;
}
</style>
<script>
import { searchFood } from "../services/api";

export default {
  data: () => ({
    food: null,
  }),
  methods: {
    onSearchFood() {
      searchFood(this.food).then(function () {
        //how to display items from array, list of objects
        //save foods in data property
      });
    },
  },
};
</script>




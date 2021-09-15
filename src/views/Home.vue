<template>
  <div class="orange lighten-5">
    <v-card shaped class="main-card"></v-card>
    <v-card-title class="title justify-center">Welcome to BALANCE</v-card-title>
    <v-card-subtitle class="subtitle">Calories counter</v-card-subtitle>
    <v-img height="250" src="../assets/FOOD.jpg"></v-img>
    <v-card-subtitle class="subtitle"
      >The easyest way to reach your healthy weight goal!</v-card-subtitle
    >
    <v-btn class="mb-2" color="primary" elevation="2" rounded large
      >START YOUR JOURNEY</v-btn
    >

    <v-card class="mt-5 mb-8 orange lighten-5">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-icon large color="#89043d" class="pt-4">mdi-school</v-icon>
              <v-card class="pa-2 card" outlined tile> Learn </v-card>
              <v-card-text
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</v-card-text
              >
            </v-col>
            <v-col cols="4">
              <v-icon large color="#89043d" class="pt-4"
                >mdi-eight-track</v-icon
              >
              <v-card class="pa-2 card" outlined tile> Track </v-card>
              <v-card-text
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</v-card-text
              >
            </v-col>
            <v-col cols="4">
              <v-icon large color="#89043d" class="pt-4">mdi-shoe-print</v-icon>
              <v-card class="pa-2 card" outlined tile> Improve </v-card>
              <v-card-text
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.</v-card-text
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template> 


<style>
.main-card {
  color: #0d1562;
}
.title {
  color: #0d1562;
}
.subtitle {
  text-align: center;
  color: #0d1562;
}
.primary-btn {
  color: #0d1562;
}
.link-btn {
  color: #0d1562;
  text-decoration: none;
}
</style>


<script>
export default {
  name: "Home",
  components: {},
};
</script>

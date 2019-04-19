<template>
  <div class="home">
    <h1>Buttons</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn color="red" dark>Click Me</v-btn>
    <v-btn color="pink" dark depressed>Click Me</v-btn>
    <v-btn color="indigo" flat>Click Me</v-btn>
    <v-btn color="pink" class="white--text">Click Me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depreesed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

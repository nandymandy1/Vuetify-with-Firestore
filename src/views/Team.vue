<template>
  <div>
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Narendra Maurya",
          role: "Full Stack Developer",
          avatar: "/avatar-1.png"
        },
        {
          name: "Brad Traversy",
          role: "React Developer",
          avatar: "/avatar-2.png"
        },
        { name: "Alex Garret", role: "PHP Developer", avatar: "/avatar-3.png" },
        {
          name: "Maxmillian",
          role: "Flutter Developer",
          avatar: "/avatar-4.png"
        },
        {
          name: "Garry Simonns",
          role: "Graphic Designer",
          avatar: "/avatar-5.png"
        }
      ]
    };
  }
};
</script>
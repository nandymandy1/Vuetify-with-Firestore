<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">Add New Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu>
            <v-text-field
              :value="formattedDate"
              slot="activator"
              label="Due Date"
              prepend-icon="date_range"
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn flat class="success mx-0 mt-3" @click="addProject" :loading="btnLoader">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      btnLoader: false,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      dialog: false
    };
  },
  methods: {
    addProject() {
      if (this.$refs.form.validate()) {
        this.btnLoader = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, "Do MMM YYYY"),
          channel: "Codebook Inc.",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("added to db");
            this.btnLoader = false;
            this.dialog = false;
            this.title = "";
            this.content = "";
            this.due = null;
            this.$emit("project-added");
          });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
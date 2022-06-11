<template>
  <label for="todo-input"></label>
  <input type="text" name="" id="todo-input" placeholder="add note" @keydown.enter="addNewNote(inputText, (inputText = null))" v-model="inputText" />
</template>

<script>
export default {
  inject: ["addNewNote"],
  data() {
    return {
      inputText: null,
    };
  },
  // methods: {
  //   addNewNote() {
  //     this.$emit("add-todo", this.inputText);
  //     this.inputText = null;
  //   },
  // },
};
</script>

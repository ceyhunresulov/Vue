<template>
  <div class="todo-box">
    <h3>to do app</h3>
    <hr />
    <addSection />
    <todoList :dataList="todoList" @delete-note="deleteNote" />
    <resultBar :itemCount="todoList.length" />
  </div>
</template>

<script>
import addSection from "./components/addSection";
import todoList from "./components/todoList";
import resultBar from "./components/resultBar";
export default {
  components: {
    addSection,
    todoList,
    resultBar,
  },
  data() {
    return {
      todoList: [
        { id: 1, note: "note#1" },
        { id: 2, note: "note#2" },
        { id: 3, note: "note#3" },
        { id: 4, note: "note#4" },
        { id: 5, note: "note#5" },
      ],
    };
  },
  provide() {
    return {
      todoList: this.todoList,
      addNewNote: this.addNewNote,
      deleteNote: this.deleteNote,
    };
  },
  methods: {
    deleteNote(noteItem) {
      console.log(noteItem);
      this.todoList = this.todoList.filter((item) => item.id != noteItem);
    },
    addNewNote(event) {
      console.log(event);
      this.todoList.push({
        id: new Date().getTime(),
        note: event,
      });
    },
  },
};
</script>

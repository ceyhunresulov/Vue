<template>
  <ul>
    <!-- <li v-for="note in todoList" :key="note.id">
      <span>{{ note.note }}</span>
      <button @click="deleteNote(note.id)">sil</button>
    </li>
    <span class="count-todo">{{ todoList.length }} todo</span> -->
    <todoListItem v-for="item in dataList" :key="item.id" :note="item" @delete-item="deleteItem" />
  </ul>
</template>

<script>
import todoListItem from "@/components/todoListItem";
export default {
  components: {
    todoListItem,
  },
  props: ["dataList"],
  methods: {
    deleteItem(id) {
      this.$emit("delete-note", id);
    },
  },
};
</script>

<template>
  <li>
    <span>{{ note.note }}</span>
    <button @click="deleteNote(note.id)">sil</button>
  </li>
</template>

<script>
export default {
  props: ["note"],
  inject: ["deleteNote"],
  // methods: {
  //   deleteItem() {
  //     this.$emit("delete-item", this.note.id);
  //   },
  // },
};
</script>

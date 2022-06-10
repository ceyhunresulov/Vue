<template>
  <li>
    <span>{{ note.note }}</span>
    <button @click="deleteItem">sil</button>
  </li>
</template>

<script>
export default {
  props: ["note"],
  methods: {
    deleteItem() {
      this.$emit("delete-item", this.note.id);
    },
  },
};
</script>

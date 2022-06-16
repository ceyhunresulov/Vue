<template>
  <p>salam {{ $store.getters.userList }}</p>
  <!-- <button @click="updateName">change</button> -->
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.$store.state.person);
  },
  // computed: mapGetters(["userList"]),
};
</script>

<style>
button {
  background-color: aqua;
  padding: 5px 15px;
}
</style>

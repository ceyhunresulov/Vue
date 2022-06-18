<template>
  <p v-for="user in userList" :key="user">{{ user.name }}</p>
  <button @click="updateName">change</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  created() {
    console.log(this.userList);
  },
  computed: {
    ...mapGetters(["userList"]),
  },
  methods: {
    updateName() {
      let user = { name: new Date().getTime(), lname: "dddd", Age: 40 };
      this.$store.commit("newUser", user);
      // this.$store.state.userList.push({ name: new Date().getTime(), lname: "dddd", Age: 40 });
      // console.log({ name: new Date().getTime(), lname: "dddd", Age: 40 });
    },
  },
};
</script>

<style>
button {
  background-color: aqua;
  padding: 5px 15px;
}
</style>

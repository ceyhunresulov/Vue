<template>
  {{ userList }}
  <form action="">
    <label for="name">add Name</label><br />
    <input type="text" v-model="userData.name" id="name" placeholder="Name" /><br />
    <label for="lname">add LastName</label><br />
    <input type="text" v-model="userData.lname" id="lname" placeholder="Last Name" /><br />
    <label for="number">add Number</label><br />
    <input type="text" v-model="userData.number" id="number" placeholder="Number" /><br />
    <button @click="$router.push({ name: 'homePage' })">reset</button>
    <button @click="saveUser">save</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: null,
        lname: null,
        number: null,
      },
    };
  },
  methods: {
    saveUser() {
      this.$axios.post("/userData");
    },
  },
};
</script>

<style>
form {
  border: 1px solid gray;
  width: 40%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
input {
  padding: 5px 10px;
}
button {
  padding: 10px;
}
</style>

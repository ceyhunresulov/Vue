<template>
  <div class="container">
    <div class="button-box">
      <button class="new-user" @click="$router.push({ name: 'newUser' })">new user</button>
    </div>
    <table>
      <thead>
        <th>id</th>
        <th>ad</th>
        <th>soyad</th>
        <th>nomre</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>1</td>
          <td>ceyhun</td>
          <td>resulov</td>
          <td>051xxxxx</td>
          <td><button>sil</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.$appAxios.get("/userList").then((user_list_response) => {
      console.log(user_list_response);
    });
  },
};
</script>

<style>
.container {
  width: 40%;
  border: 1px solid gray;
  margin: 0 auto;
}
table {
  width: 100%;
}
td {
  text-align: center;
}
td button {
  background-color: red;
}
.button-box {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
}
.button-box button {
  background-color: aqua;
}
</style>

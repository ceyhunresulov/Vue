<template>
  <div class="login-box">
    <h3>Registr</h3>
    <form action="">
      <input type="text" placeholder="fullname" class="name" /><br />
      <input type="text" placeholder="user name" class="parol" /><br />
      <input type="text" placeholder="parol" class="parol" /><br />
      <button type="submit" class="sign">Registr</button>
    </form>
  </div>
</template>

<style>
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login-box {
  margin: 0 auto;
  width: 30%;
  background-color: lightgray;
}
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.sign {
  width: 100%;
  background-color: cadetblue;
  color: white;
  font-size: 20px;
}
h3 {
  text-align: center;
}
.name,
.parol {
  width: 70%;
  padding: 5px 10px;
}
</style>

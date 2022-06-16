import { createStore } from "vuex";

const store = createStore({
  state: {
    userList: [
      {
        name: "ceyhun",
        lname: "resulov",
        Age: 22,
      },
      {
        name: "ferhad",
        lname: "salmanov",
        Age: 23,
      },
      {
        name: "asif",
        lname: "qafarli",
        Age: 24,
      },
      {
        name: "hezret",
        lname: "gullu",
        Age: 25,
      },
    ],
  },
  getters: {
    userList: "salam",
  },
});

export default store;

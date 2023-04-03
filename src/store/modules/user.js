import axios from "axios";
import store from "..";

const user = {
  namespaced: true,
  state: {
    user: {
      namakantor: "",
      username: "",
      email: "",
      alamat: "",
      noTelepon: "",
      kodeInstansi: "",
      token: "",
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.user.token;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = {
        namakantor: data.police.namaKantor,
        username: data.police.username,
        email: data.police.email,
        alamat: data.police.alamat,
        noTelepon: data.police.noTelepon,
        kodeInstansi: data.police.kodeInstansi,
        token: data.token,
      };
    },
    deleteUser(state) {
      state.user = [];
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const res = await axios.post("/api/v1/police/login", {
          email: email,
          password: password,
        });
        context.commit("setUser", res.data.data);
      } catch (error) {
        context.commit("setUser", "unauthorized");
        throw error;
      }
    },
  },
};

export default user;

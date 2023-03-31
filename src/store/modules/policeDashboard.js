import router from "@/router";
import axios from "axios";

const policeDashboard = {
  namespaced: true,
  state: {
    polices: [],
    status: {
      icon: "",
      title: "",
    },
  },
  mutations: {
    setPolices(state, data) {
      state.polices = data;
    },
    setStatus(state, data) {
      state.status = data;
    },
    setLoginStatus(state, data) {
      state.loginStatus = data;
    },
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const res = await axios.post("/api/v1/police/login", {
          email: email,
          password: password,
        });
        context.commit("setStatus", {
          icon: "success",
          title: "Berhasil masuk",
        });
        localStorage.setItem("user", res.data.data);
        localStorage.setItem("token", res.data.data.token);
        router.push("/dashboard");
      } catch (error) {
        context.commit("setStatus", {
          icon: "error",
          title: "Email atau password salah",
        });
        throw error;
      }
    },
    async fetchAllPolices(context) {
      try {
        const res = await axios.get("/api/v1/police/profile", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvbHJlc2JrbEBnbWFpbC5jb20iLCJpc0V4cGlyZWQiOmZhbHNlfQ.RBprbCzjAla6Y8gohvBtDj1NJHiE9SmugrZw8qLTxsY",
          },
        });
        context.commit("setPolices", res.data.data);
      } catch (error) {
        throw error;
      }
    },
  },
};

export default policeDashboard;

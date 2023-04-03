import axios from "axios";

const policeDashboard = {
  namespaced: true,
  state: {
    polices: [],
  },
  mutations: {
    setPolices(state, data) {
      state.polices = data;
    },
  },
  actions: {
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

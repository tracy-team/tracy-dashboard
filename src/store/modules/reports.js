import axios from "axios";

const reports = {
  namespaced: true,
  state: {
    reports: [],
    detailReport: [],
  },
  mutations: {
    setReports(state, data) {
      state.reports = data;
    },
    setDetailReport(state, data) {
      state.detailReport = data;
    },
  },
  actions: {
    async fetchAllReports(context) {
      try {
        const res = await axios.get("/api/v1/report/all", {
          headers: {
            Authorization: process.env.VUE_APP_API_TOKEN,
          },
        });
        context.commit("setReports", res.data.data);
      } catch (error) {
        throw error;
      }
    },
    async fetchDetailReport(context, id) {
      try {
        const res = await axios.get(`/api/v1/report/detail/${id}`, {
          headers: {
            Authorization: process.env.VUE_APP_API_TOKEN,
          },
        });
        context.commit("setDetailReport", res.data.data);
      } catch (error) {
        throw error;
      }
    },
  },
};

export default reports;

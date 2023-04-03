import axios from "axios";

function arrKotlinToArr(strArr) {
  let strSplit1 = strArr.split("0:");

  let strSplit2 = strSplit1[1].split("[,");

  strSplit2 = strSplit1[1].split("[,");

  strSplit2 = strSplit1[1].split("]");

  return strSplit2[0];
}

const reports = {
  namespaced: true,
  state: {
    reports: [],
    detailReport: [],
  },
  getters: {
    getReport(state) {
      return state.reports;
    },
    getDetailReport(state) {
      return state.detailReport;
    },
  },
  mutations: {
    setReports(state, data) {
      data.reverse();
      data.forEach((element) => {
        if (element[3].detailLokasi.length > 100) {
          let lokasi = element[3].detailLokasi;
          lokasi = arrKotlinToArr(lokasi);
          element[3].detailLokasi = lokasi;
        }
      });
      state.reports = data;
    },
    setDetailReport(state, data) {
      let lokasi = data.lokasi.detailLokasi;
      if (lokasi.length > 100) {
        lokasi = arrKotlinToArr(lokasi);
        data.lokasi.detailLokasi = lokasi;
      }
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

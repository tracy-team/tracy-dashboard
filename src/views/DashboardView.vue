<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-lg-7">
        <GoogleMaps></GoogleMaps>
      </div>
      <div class="col-lg-5">
        <Laporan></Laporan>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from "@/components/partials/GoogleMaps.vue";
import Laporan from "@/components/dashboard/Laporan.vue";

import { mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    GoogleMaps,
    Laporan,
  },
  methods: {
    ...mapActions("reports", ["fetchAllReports"]),
  },
  mounted() {
    this.fetchAllReports();
  },
};
</script>

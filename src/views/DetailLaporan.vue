<template>
  <div class="detail-laporan">
    <div class="row">
      <div class="col-lg-7">
        <GoogleMaps></GoogleMaps>
      </div>
      <div class="col-lg-5"><Rincianlaporan></Rincianlaporan></div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from "@/components/partials/GoogleMaps.vue";
import Rincianlaporan from "@/components/detail_laporan/RincianLaporan.vue";

export default {
  name: "DetailLaporan",
  components: {
    GoogleMaps,
    Rincianlaporan,
  },
};
</script>

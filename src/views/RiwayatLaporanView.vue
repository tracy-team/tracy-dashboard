<template>
  <div class="riwayat-laporan">
    <div class="row">
      <div class="col-lg-6"><riwayat></riwayat></div>
      <div class="col-lg-6"><rincian-laporan></rincian-laporan></div>
    </div>
  </div>
</template>

<script>
import Riwayat from "../components/riwayat/riwayat.vue";
import RincianLaporan from "../components/riwayat/riwayat_laporan/Rincian.vue";

export default {
  name: "RiwayatLaporan",
  components: {
    Riwayat,
    RincianLaporan,
  },
};
</script>

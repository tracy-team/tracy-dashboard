<template>
  <div class="riwayat-pesan">
    <div class="row">
      <div class="col-lg-6"><riwayat></riwayat></div>
      <div class="col-lg-6"><Pesan></Pesan></div>
    </div>
  </div>
</template>

<script>
import Riwayat from "../components/riwayat/riwayat.vue";
import Pesan from "../components/riwayat/riwayat_pesan/Pesan.vue";

export default {
  name: "RiwayatLaporan",
  components: {
    Riwayat,
    Pesan,
  },
};
</script>

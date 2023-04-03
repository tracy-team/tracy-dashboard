<template>
  <div class="google-maps">
    <GMapMap
      :center="location.center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 95vh"
    >
      <GMapMarker
        v-if="(location.marker.lat !== null, location.marker.lng !== null)"
        :position="location.marker"
      />
    </GMapMap>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "GoogleMaps",
  data() {
    return {
      location: {
        center: { lat: -7.12763730754952, lng: 112.72320982717805 },
        marker: { lat: null, lng: null },
      },
    };
  },
  computed: {
    ...mapState("reports", ["detailReport"]),
  },
  watch: {
    detailReport() {
      this.location = {
        center: {
          lat: parseFloat(this.detailReport.lokasi.latitude),
          lng: parseFloat(this.detailReport.lokasi.longitude),
        },
        marker: {
          lat: parseFloat(this.detailReport.lokasi.latitude),
          lng: parseFloat(this.detailReport.lokasi.longitude),
        },
      };
    },
  },
};
</script>

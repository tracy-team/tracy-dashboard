<template>
  <div class="laporan">
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="date">
          <div class="date-square">
            <span>{{ date.tanggal }} {{ arrMonth[date.bulan] }}</span>
            {{ date.jam }}:{{ date.menit }}
          </div>
          <div class="day ml-3">{{ arrDay[date.hari] }}</div>
        </div>
        <hr />
      </div>
      <div class="col-lg-12 mb-3">
        <div class="laporan-terbaru">
          <h3 class="mb-3">Laporan Terbaru</h3>
          <div class="row">
            <div class="col-lg-6">
              <div class="laporan-square">
                <h4>{{ reports.length }}</h4>
                <div class="laporan-title">Pengaduan Baru</div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="laporan-square">
                <h4>10</h4>
                <div class="laporan-title">Pengaduan On Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 overflow-auto">
        <button
          v-for="report in reports"
          class="contact-square mb-3 btn"
          :id="`reportInfo-${report[0].id}`"
          v-on:click="onClickReport(report[0].id)"
        >
          <div class="profile-image">
            <img
              v-if="report[1].picture !== ''"
              :src="report[1].picture"
              alt=""
            />
            <img v-else src="@/assets/profile-image.png" alt="" />
          </div>
          <div class="info ml-3">
            <div class="name">{{ report[1].username }}</div>
            <div v-if="report[3].detailLokasi" class="address">
              {{ report[3].detailLokasi }}
            </div>
            <div v-else class="address">Tidak ada detail lokasi</div>
          </div>
          <div class="additional"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Laporan",
  data() {
    return {
      date: {
        tanggal: "",
        hari: "",
        bulan: "",
        jam: "",
        menit: "",
      },
      arrMonth: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Sep",
        "Nov",
        "Dec",
      ],
      arrDay: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    };
  },
  computed: {
    ...mapState("reports", ["reports"]),
  },
  methods: {
    ...mapActions("reports", ["fetchDetailReport"]),

    onClickReport(id) {
      this.fetchDetailReport(id);
      this.$router.push("/dashboard/laporan/detail");
    },
    updateDate() {
      setInterval(() => {
        this.date.tanggal = new Date().getDate();
        this.date.hari = new Date().getDay();
        this.date.bulan = new Date().getMonth();
        this.date.jam = new Date().getHours();
        this.date.menit = new Date().getMinutes();
      }, 1000 * 60);
    },
  },
  mounted() {
    this.date.tanggal = new Date().getDate();
    this.date.hari = new Date().getDay();
    this.date.bulan = new Date().getMonth();
    this.date.jam = new Date().getHours();
    this.date.menit = new Date().getMinutes();
    this.updateDate();
  },
};
</script>

<style scoped lang="scss">
.date {
  display: flex;
  align-items: center;
  .date-square {
    display: grid;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    border-radius: 5px;
    background-color: #d9d9d9;
    text-align: center;
    padding: 8px;
    span {
      font-weight: 600;
    }
  }
  .day {
    font-weight: 700;
    font-size: 24px;
  }
}

.laporan-terbaru {
  h3 {
    font-weight: 800;
  }
  .laporan-square {
    color: #fff;
    background-color: #3c65c9;
    padding: 12px 15px;
    border-radius: 20px;
    .laporan-title {
      font-weight: 600;
      font-size: 12px;
    }
    h4 {
      font-weight: 800;
    }
  }
}

.overflow-auto {
  height: 55vh;
}

.contact-square {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  text-align: left;
  .profile-image {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 40px;
      display: inline;
      margin: 0 auto;
    }
    .info {
      font-size: 14px;
      .name {
        font-weight: 600;
      }
    }
  }
}

.address {
  width: 200px;
}

.contact-square:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.contact-square:focus {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>

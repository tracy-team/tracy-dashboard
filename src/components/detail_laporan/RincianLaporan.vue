<template>
  <div class="laporan">
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="date">
          <div class="date-square">
            <span>23 Jan</span>
            13:05
          </div>
          <div class="day ml-3">Senin</div>
        </div>
        <hr />
      </div>
      <div class="col-lg-12 mb-3">
        <div class="rincian-laporan">
          <h3 class="mb-3">Rincian Laporan</h3>
          <div class="detail shadow">
            <div class="row">
              <div class="col-lg-9">
                <div class="data-laporan">
                  <div class="name">
                    {{ detailReport.user.username }} -
                    {{ detailReport.user.noHp }}
                  </div>
                  <div class="case">
                    {{ detailReport.report.jenisKejahatan }}
                  </div>
                  <div class="address">
                    {{ detailReport.lokasi.detailLokasi }}
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="additional">
                  <!-- 19:00 <i class="uil uil-ellipsis-v"></i> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="select-office shadow">Pilih Kantor Polisi Terdekat...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Laporan",
  data() {
    return {
      date: null,
      days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    };
  },
  computed: {
    ...mapState("reports", ["detailReport"]),
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

.rincian-laporan {
  h3 {
    font-weight: 800;
  }

  .detail {
    border-radius: 10px;
    padding: 15px;
    align-items: center;

    .name {
      font-weight: 600;
    }

    .case {
      font-weight: 600;
    }
  }
}

.select-office {
  padding: 15px;
  background-color: #d9d9d9;
  border-radius: 20px;
}
</style>

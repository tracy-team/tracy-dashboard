<template>
  <div class="riwayat">
    <div class="row">
      <div class="col-lg-12">
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
        <div class="header">
          <h3 class="mb-3">Riwayat</h3>
          <div class="row">
            <div class="col-lg-6">
              <RouterLink
                to="/dashboard/riwayat/laporan"
                class="btn btn-primary"
                :class="{ active: $route.name === 'RiwayatLaporan' }"
              >
                Laporan
              </RouterLink>
            </div>
            <div class="col-lg-6">
              <RouterLink
                to="/dashboard/riwayat/pesan"
                class="btn btn-primary"
                :class="{ active: $route.name === 'RiwayatPesan' }"
              >
                Pesan
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="contact-wrapper">
          <div class="contact-square">
            <div class="profile-image">
              <img src="@/assets/profile-image.png" alt="" />
            </div>
            <div class="info ml-3">
              <div class="name">Aureliess</div>
              <div class="address">Jl. Telang Jaya</div>
            </div>
            <div class="additional">
              <div class="time">19.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Riwayat",
};
</script>

<style scoped lang="scss">
h3 {
  font-weight: 800;
}
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

.header {
  .col-lg-6 {
    display: flex;
    justify-content: center;
    .btn {
      width: 100%;
      height: 50px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 22px;
      background-color: #859edd;
      border: none;
    }
  }
}

.contact-square {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px;
  border-radius: 10px;

  .profile-image {
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 40px;
      display: inline;
      margin: 0 auto;
    }
  }
  .info {
    font-size: 14px;

    .name {
      font-weight: 600;
    }
  }
}

.additional {
  display: grid;
  margin-left: auto;
  justify-items: end;

  .time {
    font-size: 12px;
  }
}

.contact-square:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.active {
  background-color: #5377cf !important;
}
</style>

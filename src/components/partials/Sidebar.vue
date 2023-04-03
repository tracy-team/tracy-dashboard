<template>
  <div class="sidebar">
    <div class="row">
      <div class="col-lg-12 mb-5">
        <div class="sidebar-brand">
          <img src="@/assets/tracy_logo.png" alt="" />
        </div>
      </div>
      <div class="col-lg-12 mb-5">
        <div class="sidebar-brand">
          <img src="@/assets/polres_logo.png" alt="" />
          <!-- <h3>{{ user.namaKantor }}</h3> -->
        </div>
      </div>
      <div class="col-lg-12 mb-5">
        <div class="sidebar-nav">
          <ul>
            <li class="mb-2" :class="{ active: $route.name === 'Dashboard' }">
              <router-link to="/dashboard"
                ><i class="uil uil-shield"></i> Dashboard</router-link
              >
            </li>
            <li
              class="mb-2"
              :class="{
                active:
                  $route.name === 'Messages' || $route.name === 'VideoCall',
              }"
            >
              <router-link to="/dashboard/messages"
                ><i class="uil uil-envelope-alt"></i> Messages</router-link
              >
            </li>
            <li
              class="mb-2"
              :class="{
                active:
                  $route.name === 'RiwayatLaporan' ||
                  $route.name === 'RiwayatPesan',
              }"
            >
              <router-link to="/dashboard/riwayat/laporan"
                ><i class="uil uil-clock-three"></i> Riwayat</router-link
              >
            </li>
            <!-- <li class="mb-2" :class="{ active: $route.name === 'Setting' }">
              <a href=""><i class="uil uil-setting"></i> Settings</a>
            </li> -->
            <li class="btn">
              <a href=""
                ><i class="uil uil-setting" @click="logout()"></i> Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapActions("user", ["deleteUser"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("vuex");
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  padding: 10px 0px;
  .sidebar-brand {
    display: flex;
    justify-content: center;
    img {
      height: 6rem;
    }
  }
  .sidebar-nav {
    display: flex;
    justify-content: center;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        padding: 0.6rem 4rem;
        border-radius: 5px;
        a {
          i {
            font-size: 20px;
          }
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          color: rgb(0, 0, 0);
        }
      }
      .active {
        background-color: #3c65c9;
        a {
          color: #fff;
        }
      }
      .btn-logout {
        background-color: #c93c3c;
        margin: 0;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>

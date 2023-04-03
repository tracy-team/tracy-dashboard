import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/DashboardView.vue";
import DetailLaporan from "../views/DetailLaporan.vue";
import Messages from "../views/MessagesView.vue";
import VideoCall from "../views/VideoCallView.vue";
import RiwayatLaporan from "../views/RiwayatLaporanView.vue";
import RiwayatPesan from "../views/RiwayatPesanView.vue";
import Login from "../views/LoginView.vue";

import { isAuthenticated } from "./auth";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: HomeView,
  // },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard/laporan/detail",
    name: "DetailLaporan",
    component: DetailLaporan,
  },
  {
    path: "/dashboard/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/dashboard/video-call",
    name: "VideoCall",
    component: VideoCall,
  },
  {
    path: "/dashboard/riwayat/laporan",
    name: "RiwayatLaporan",
    component: RiwayatLaporan,
  },
  {
    path: "/dashboard/riwayat/pesan",
    name: "RiwayatPesan",
    component: RiwayatPesan,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundRoute",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated()) next({ name: "Login" });
  else next();
});

export default router;

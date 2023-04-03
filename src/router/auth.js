import store from "@/store";

function isAuthenticated() {
  let token = store.getters["user/getToken"];
  if (token) {
    return true;
  } else {
    return false;
  }
}

export { isAuthenticated };

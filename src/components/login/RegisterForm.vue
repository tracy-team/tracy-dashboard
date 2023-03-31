<template>
  <div class="login-form">
    <div class="row">
      <div class="col-lg-6 logo-container">
        <div class="logo-icon">
          <img src="@/assets/tracy_logo.png" alt="" srcset="" />
        </div>
      </div>
      <div class="col-lg-6 form-container">
        <div class="login-form">
          <h1 class="mb-3">Welcome to Tracy</h1>
          <div class="card shadow">
            <div class="card-body">
              <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Email"
                    id=""
                    aria-describedby="helpId"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Enter Agency Code"
                  />
                </div>
                <button type="submit" class="btn mt-3">Sign Up</button>
                <button type="submit" class="btn mt-3">
                  <img src="@/assets/google-circle.png" alt="" srcset="" />
                  Continue With Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LoginForm",
  computed: {
    ...mapState("policeDashboard", ["polices"]),
  },
  methods: {
    ...mapActions("policeDashboard", ["fetchAllPolices"]),
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;
}
.col-lg-6 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.logo-container {
  background-color: #042754;
  .logo-icon {
    img {
      width: 40vh;
    }
  }
}
.login-form {
  h1 {
    width: 300px;
    font-weight: 700;
  }
}
.card {
  width: 25vw;
  border-radius: 20px;
  border: none;
  .card-body {
    form {
      display: grid;
      justify-items: center;
    }
    input {
      border-radius: 20px;
      border: none;
      background-color: #f6f6f6;
    }
    .btn {
      font-weight: 700;
      color: #fff;
      width: 80%;
      background-color: #3c65c9;
      border-radius: 20px;
      img {
        margin-right: 2px;
        width: 20px;
        border-radius: 50%;
      }
    }
  }
}
</style>

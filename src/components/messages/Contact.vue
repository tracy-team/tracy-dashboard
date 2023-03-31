<template>
  <div class="contact">
    <div class="contact-header">
      <h3 class="mb-3">Messages</h3>
      <form action="" method="post" class="">
        <div class="form-group">
          <i class="uil uil-search"></i>
          <input
            class="ml-1"
            type="text"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Search messages..."
          />
        </div>
      </form>
    </div>
    <div class="contact-messages">
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
          <div class="notification"><div>3</div></div>
        </div>
      </div>
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
          <div class="notification"><div>3</div></div>
        </div>
      </div>
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
          <div class="notification"><div>3</div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped lang="scss">
.contact-header {
  h3 {
    font-weight: 800;
  }

  .form-group {
    padding: 5px 15px;
    border-radius: 10px;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;

    i {
      font-size: 24px;
      color: #6c6c6c;
    }

    input {
      width: 100%;
      border: none;
      outline: none !important;
      background: none;
    }

    input:focus {
      outline: none !important;
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
  .additional {
    display: grid;
    margin-left: auto;
    justify-items: end;

    .time {
      font-size: 12px;
    }

    .notification {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      width: 20px;
      aspect-ratio: 1 / 1;
      background-color: #5377cf;
      border-radius: 100%;
      div {
        font-size: 12px;
        text-align: center;
      }
    }
  }
}

.contact-square:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}
</style>

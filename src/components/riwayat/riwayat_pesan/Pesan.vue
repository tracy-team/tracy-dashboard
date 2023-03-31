<template>
  <div class="rincian">
    <div class="row">
      <div class="col-lg-12 header">
        <h3>Rincian Pesan</h3>
        <hr />
      </div>
      <div class="col-lg-12">
        <div class="chat">
          <div class="chat-header mb-3">
            <div class="profile-image">
              <img src="@/assets/profile-image.png" alt="" />
            </div>
            <div class="info ml-3">
              <div class="name">Aureliess</div>
              <div class="status">
                <div class="circle-active mr-2"></div>
                Aktif
              </div>
            </div>
            <div class="additional"></div>
          </div>
          <div class="chat-body overflow-auto">
            <div class="sender-contact">
              <div class="profile-image">
                <img src="@/assets/profile-image.png" alt="" />
              </div>
              <div class="info ml-3">
                <div class="name mb-2">Aureliess</div>
                <div class="messages">
                  <div class="messages-item mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    aliquid dolorum sint cum, molestiae, assumenda temporibus
                    saepe laboriosam earum architecto quidem voluptatum
                    accusamus consectetur animi nesciunt exercitationem nemo sit
                    atque.
                  </div>
                  <div class="messages-item mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10570.954367107941!2d112.74527455346505!3d-7.052235643625292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd805be888eab6b%3A0xd3d641ad912f7db2!2sBangkalan%20Plaza!5e0!3m2!1sid!2sid!4v1677167731563!5m2!1sid!2sid"
                      style="border: 0"
                      width="100%"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="user-contact">
              <div class="info mr-3">
                <div class="name mb-2">Pak Polisi</div>
                <div class="messages">
                  <div class="messages-item mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    aliquid dolorum sint cum, molestiae, assumenda temporibus
                    saepe laboriosam earum architecto quidem voluptatum
                    accusamus consectetur animi nesciunt exercitationem nemo sit
                    atque.
                  </div>
                  <div class="messages-item mb-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10570.954367107941!2d112.74527455346505!3d-7.052235643625292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd805be888eab6b%3A0xd3d641ad912f7db2!2sBangkalan%20Plaza!5e0!3m2!1sid!2sid!4v1677167731563!5m2!1sid!2sid"
                      style="border: 0"
                      width="100%"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div class="profile-image">
                <img src="@/assets/profile-image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pesan",
};
</script>

<style scoped lang="scss">
.header {
  height: 85px;
}
.header {
  display: flex;
  height: 52px;
  align-items: center;
  h3 {
    font-weight: 800;
  }
}
// .chat {
//   border-left: 2px #d9d9d9 solid;
// }
.chat-header {
  color: #fff;
  background-color: #3c65c9;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 10px 20px;
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
    .status {
      display: flex;
      align-items: center;
      .circle-active {
        width: 10px;
        height: 10px;
        background-color: #74fd5e;
        border-radius: 100%;
      }
    }
  }
}
.chat-body {
  height: 69vh;
  .sender-contact {
    display: flex;
    align-items: flex-start;
    padding: 10px 20px;
    border-radius: 10px;

    .profile-image {
      img {
        border-radius: 50%;
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
      .messages {
        .messages-item {
          max-width: 80%;
          background-color: #f5f6fa;
          padding: 10px;
          border-radius: 0px 10px 10px 10px;
        }
      }
    }
  }

  .user-contact {
    display: flex;
    align-items: flex-start;
    padding: 10px 20px;
    border-radius: 10px;

    .profile-image {
      img {
        border-radius: 50%;
        width: 40px;
        // display: inline;
        margin: 0 auto;
      }
    }
    .info {
      font-size: 14px;
      .name {
        text-align: end;
        font-weight: 600;
      }
      .messages {
        .messages-item {
          margin-left: auto;
          max-width: 80%;
          background-color: #f5f6fa;
          padding: 10px;
          border-radius: 10px 0px 10px 10px;
        }
      }
    }
  }
}
</style>

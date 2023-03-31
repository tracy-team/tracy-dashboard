<template>
  <div class="rincian">
    <div class="row">
      <div class="col-lg-12 header">
        <h3>Rincian Laporan</h3>
        <hr />
      </div>
      <div class="col-lg-12">
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
      <div class="col">
        <div class="rincian-wrapper">
          <div class="rincian-item">
            <div class="rincian-title">Aureliess - 081234567890</div>
            <div class="kasus">Penjambretan</div>
            <div class="address">Jl. Pd. Pesantren</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rincian",
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

.rincian-wrapper {
  .rincian-item {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    .rincian-title {
      font-weight: bold;
    }
    .kasus {
      font-weight: bold;
    }
  }

  .rincian-item:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>

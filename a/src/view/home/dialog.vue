<template>
  <div class="form">
    <div class="title">
      <div class="left-form"><a href="">邀请通知</a></div>
      <div class="right-form"><a href="">历史邀请记录</a></div>
    </div>
    <div class="info" v-for="item in username">
      <img src="../../assets/img/person.png" alt="">
      <span id="nameinfo">
          <span>{{ item }}</span>
        <!--            <br/>-->
            <span>想加您为好友</span>
          </span>
      <button>同意</button>
      <button>拒绝</button>
      <span><a href="">X</a></span>
    </div>
  </div>

</template>

<script>


export default {
  name: 'dialog',
  data() {
    return {
      username: ['xiaobai', 'dabai', 'xiaohong']
    }

  }
}
</script>

<style>

a {
  color: white;
  text-decoration: none
}

.form {
  position: absolute;
  width: 500px;
  height: 280px;
  background-color: #888585;
  text-align: center;
  border: 1px solid #bbb;
  margin-top: -4px;
  box-sizing: border-box;
  color: white;
}

.title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid #110000;
  box-sizing: border-box;

}

.left-form {
  padding-left: 80px;
  padding-right: 80px;
  border-right: 1px solid #110000;
}

.right-form {
  padding-left: 80px;
  padding-right: 80px;
}

.info {
  height: 45px;
  margin-top: 15px;
  border-bottom: 1px solid #110000;
}

.info img {
  width: 5%;
}

.info span {

  padding-left: 20px;
}

.info button {
  margin-left: 20px;
}
</style>

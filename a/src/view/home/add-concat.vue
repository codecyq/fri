<template>
  <div class="add-concat">
    <div class="add-title" >邀请好友</div>
    <i class="el-icon-s-custom person"></i>
    <div class="add-method">添加方式</div>
    <input type="text" placeholder="请输入名字">
    <input type="text" placeholder="请输入名字">
    <input type="text" placeholder="请输入名字">
    <div class="add-method add-input" @click="addUserNanme">+</div>
    <button @click="backToConcat()">返回</button>
    <button>邀请</button>
  </div>
</template>

<script>
export default {
name: "add-concat",
  methods:{
    addUserNanme(){
      console.log("111")
    },
    backToConcat(){
      this.$emit("buttonClick")
    }
  }
}
</script>

<style scoped>
.add-concat{

  height: 50rem;
  background-color: #202020;
  text-align: center;

  margin-top: 100px;
}
.add-title{
  font-size: 2em;
}
.person{
  font-size: 40px;
}
.add-concat input{
  display: block;
  margin-left: 750px;
  width: 400px;
  font-size: 20px;
  margin-top: 10px;
}
.add-method{
  text-align: left;
  margin-left: 750px;
  font-size: 20px;
}
.add-concat button{
  display: inline-block;
  width: 80px;
  height: 30px;
  background: #9cc;
  margin-left: 15px;
  color: #333;
  text-align: center;
  border-radius: 3px;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
}
.add-input{
  cursor: pointer;
}
</style>
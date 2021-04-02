<template>

  <el-container>
    <el-aside width="200px">

    </el-aside>
    <el-main>
      <el-container>
<!--          顶部功能栏-->
        <el-header class="el-header">
          <div class="top-bar">
          <div class="left-wrap">
            <span class="friend">好友列表</span>
          </div>
          <div class="right-wrap">
            <div>{{getNowFormatDate()}}</div>
            <a href=""><img src="./assets/img/person.png" alt=""></a>
            <div class="operate-menu-container">
              <i class="iconfont &#xe7bb; " ></i>
            </div>

<!--            //下拉框-->

            <button class="sign-out" @click="logOut">退出</button>
          </div>
        </div>
        </el-header>
        <el-main class="el-main">
          <div class="top-area">
<!--            <div class="concat dialog">-->
<!--              <el-popover-->
<!--                  placement="right"-->
<!--                  width="400"-->
<!--                  trigger="click">-->
<!--                <el-table :data="gridData">-->
<!--                  <el-table-column width="150" property="date" label="日期"></el-table-column>-->
<!--                  <el-table-column width="100" property="name" label="姓名"></el-table-column>-->
<!--                  <el-table-column width="300" property="address" label="地址"></el-table-column>-->
<!--                </el-table>-->
<!--                <i class="el-icon-chat-dot-square concat-dialog "slot="reference" ></i>-->
<!--              </el-popover>-->
<!--            </div>-->
            <a href=""><i class="el-icon-chat-dot-square concat-dialog " @click="topDialogClick" ></i></a>
            <!--                点击对话框-->
              <div class="meetingDialog">
               <div>
                 <span>邀请通知</span>
                 <span>历史邀请记录</span>
                 <div v-for="item in inviteNotice">
                   <img src="./assets/img/person.png" alt="">
                   <div>
                     <span>{{userName[item]}}</span>
                     <br/>
                     <span>想添加您为好友</span>

                   </div>
                   <button>已同意</button>
                   <span>X</span>
                 </div>
               </div>
                <div></div>
                </div>
            <el-button size="mini" >
              <div class="block"><el-avatar shape="square" :size="17" :src="squareUrl"></el-avatar>添加好友</div>
            </el-button>
            <el-button size="mini" >
              <div class="block"><el-avatar shape="square" :size="17" :src="squareUrl"></el-avatar>删除好友</div>
            </el-button>
              </div>


          <div class="centeral-area">
            <div class="title">
              <span>排序方式</span>
              <div class="addtime"><span>添加时间</span>
              <i class="el-icon-caret-bottom"></i></div>
              <span class="searchinfo">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="请输入备注名用户名或手机号码" style="width: 300px">
              </span>
            </div>
            <div class="concatform">
              <img src="./assets/icon/uncheck.svg" alt="">
              <span>备注名</span>
              <span>用户名</span>
              <span>手机号码</span>
            </div>

          </div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>


</template>

<script>

export default {
  name: 'HelloWorld',
  props: {

  },
  data(){
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      // 设置里面的数据
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      isShowDialog:false,
      inviteNotice:[],
      userName:['xiaoli','xiaohong','dabai']
    }
  },
  methods: {
    //获取当天日期
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    //点击dialog图标出对话框
    topDialogClick(){


    },
    //点击设置

    //点击退出
    logOut(){
       this.$router.replace('/index')
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.el-header, .el-footer {
  text-align: center;
  /*line-height: 60px;*/

}


.el-main {
  color: #333;
  text-align: center;
display: flex;

}

body > .el-container {
  margin-bottom: 40px;
}


.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

body,html{
  height: 100%;
  background-color: #666;

}

.top-bar{
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 0px 0px white;

}
.left-wrap{
  flex: 3;

}
.left-wrap span{
  bottom: 0;
  width: 5%;
  padding-bottom: 3px;
  border-bottom:2px solid white;

}
.right-wrap{
  flex: 1;
  display: flex;
  text-align: justify;
  justify-content: center;
}
.right-wrap img{
  margin:10px ;
  width: 40px;
}
.shezhi{
  background-color: white;
}
.shezhi :hover{
  color: blue;
}
.right-wrap button{
  height: 80%;
  margin-left: 10px;
}

.top-area{
  text-align: right;
  width: 95%;
  background-color: #535353;
  margin-top: 50px;
  /*position: relative;*/
  bottom: 0;
}

.concat-dialog{
  margin-right: 10px;
  font-size: 30px;
}
.centeral-area{
  width: 95%;
  height: 500px;
  background-color: #535353;
  margin-top: 20px;

}
.title{
  display: flex;
  border: 1px solid grey;
}
.title span{
  margin-left: 20px;
}
.addtime{
  padding-left: 100px;
  padding-right: 300px;
  border-right: 1px solid white;
}
.concatform{
  margin-top: 10px;
}
.concatform img{
  float: left;
  margin-left: 2%;
}
.concatform span{
  float: left;
  padding-left: 14%;
  padding-right: 9%;
}
.meetingDialog{

  z-index: 1;
  position: absolute;
  width: 500px;
  height: 400px;
}
.meetingDialog div {
  display: flex;
}
</style>
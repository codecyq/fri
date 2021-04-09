<template>
  <div class="concat-page-wrapper">
    <el-main>
      <el-container>
        <!--顶部功能栏-->
        <el-header class="header-container">
          <div class="left-title">
            <span>好友列表</span>
          </div>
          <div class="user-operation">
            <div class="local-data ">{{ getNowFormatDate() }}</div>
            <img src="./assets/img/person.png" alt=""/>
            <div class="operation-tools"><i class="el-icon-s-tools  handle"></i></div>
            <button class="sign-out handle" @click="logOut">退出</button>
          </div>
        </el-header>
        <div class="main-container " v-if="isAddShow">
          <div class="top-area">
            <!--点击对话框-->
            <div class="top-show-dialog" v-if="isShowOperateMenu">
              <div class="triangle"></div>
              <div class="dialog-form">
                <div class="form-invitation">
                  <div class="invitation-notice"><a href="">邀请通知</a></div>
                  <div class="invitation-history"><a href="">历史邀请记录</a></div>
                </div>
                <div class="form-info-item" v-for="item in username" :key="item.id">
                  <img src="./assets/img/person.png" alt="">
                  <span id="nameinfo">
                      <span>{{ item.name }}</span>
                      <span>想加您为好友</span>
                      </span>
                  <button>同意</button>
                  <button>拒绝</button>
                  <span><a href="">X</a></span>
                </div>
              </div>
            </div>

            <i class="el-icon-chat-dot-square concat-dialog handle" @click="closeOperateMenu"></i>
            <!-- 添加按钮 -->
            <el-button size="mini">
              <div class="block" @click="isShowAddConcatPage()">
                <el-avatar shape="square" :size="17" :src="squareUrl"></el-avatar>
                添加好友
              </div>
            </el-button>
            <!-- 删除按钮 -->
            <el-button size="mini">
              <div class="block">
                <el-avatar shape="square" :size="17" :src="squareUrl"></el-avatar>
                删除好友
              </div>
            </el-button>
          </div>
          <div class="central-area">
            <div class="top-sort">
              <span>排序方式:</span>
              <div class="title-sort-way">
                <!--                <el-dropdown @command="handleCommand">-->
                <el-row>
                  <el-col :span="24">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        添加时间<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <span>排列顺序</span>
                        <el-dropdown-item>最早<i class="check-to-right el-icon-check" v-if="!isCheck"></i>
                        </el-dropdown-item>
                        <el-dropdown-item>最新<i class="check-to-right el-icon-check" v-if="isCheck"></i>
                        </el-dropdown-item>
                        <span>排列方式</span>
                        <el-dropdown-item>添加方式<i class="check-to-right el-icon-check" v-if="!isCheck"></i>
                        </el-dropdown-item>
                        <el-dropdown-item>用户名<i class="check-to-right el-icon-check" v-if="isCheck"></i>
                        </el-dropdown-item>
                        <el-dropdown-item>备注名<i class="check-to-right el-icon-check" v-if="isCheck"></i>
                        </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </div>
              <span class="search-info">
                  <i class="el-icon-search"></i>
                  <input type="text" placeholder="请输入备注名用户名或手机号码" style="width: 300px"></input>
                </span>
            </div>
            <div class="concatform" showConcatList>
              <img src="./assets/icon/uncheck.svg" alt=""/>
              <span class="note-name">备注名</span>
              <span>用户名</span>
              <span>手机号码</span>
            </div>
          </div>
        </div>
        <add-concat v-else="!isAddShow" @buttonClick="isShowAddConcatPage()"></add-concat>
      </el-container>
    </el-main>
  </div>
</template>

<script>
import AddConcat from './view/home/add-concat'

export default {
  name: "HelloWorld",
  components: {
    AddConcat
  },
  props: {},
  data() {
    return {
      circleUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",//用户头像
      squareUrl:
          "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",//
      sizeList: ["large", "medium", "small"],
      // 设置里面的数据
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],//dialog里好友邀请记录

      isShowDialog: false,//是否显示对话框
      inviteNotice: [],//收到邀请的记录
      userName: ["xiaoli", "xiaohong", "dabai"],//用户数据函数
      isShowOperateMenu: false, //是否显示齿轮的下拉操作菜单列表
      isAddShow: true,
      isCheck: false,
      username: [
        {name: 'xiaobai', id: "1"}, {name: 'dabai', id: "2"}, {name: 'xiaohong', id: "3"}]
    };
  },
  methods: {
    //获取当天日期
    getNowFormatDate() {
      let date = new Date();
      let seperator1 = "-";
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    //点击dialog图标出对话框
    closeOperateMenu() {
      this.isShowOperateMenu = !this.isShowOperateMenu
    },

    // operateMenuItemClick(item) {
    //   this.closeOperateMenu();
    //   if (!item.click) {
    //     return message.error("功能暂未开放,敬请期待");
    //   }
    //   item.click();
    // },
    //点击设置

    //点击退出
    logOut() {
      this.$router.replace("/index");
    },
    //点击添加按钮显示邀请好友界面
    isShowAddConcatPage() {
      this.isAddShow = !this.isAddShow
    },
    isTrue() {
      this.isCheck = !this.isCheck
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a {
  color: white;
  text-decoration: none
}

.concat-page-wrapper {
  color: white;
}

.header-container {
  color: #333;
  text-align: center;
  display: flex;
}

body,
html {
  height: 100%;
  background-color: #666;
}


.left-title {
  flex: 3;
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 0px 0px white;
  color: #fff;
}

.left-title span {
  bottom: 0;
  width: 7%;
  padding-bottom: 3px;
  border-bottom: 2px solid white;
}

.user-operation {
  flex: 1;
  display: flex;
  text-align: justify;
  justify-content: center;
  box-shadow: 0px 1px 0px 0px white;

}

.right-title img {
  margin: 10px;
  width: 40px;
}


.shezhi :hover {
  color: blue;
}

.operation-tools {
  /*width: 40px;*/
  font-size: 30px;
  line-height: 60px;
}

.right-wrap button {
  height: 80%;
  margin-left: 10px;

}

.top-area {
  text-align: right;
  width: 95%;
  background-color: #535353;
  margin-top: 50px;
  bottom: 0;
}

.concat-dialog {
  margin-right: 50px;
  font-size: 30px;
}

.central-area {
  width: 95%;
  height: 500px;
  background-color: #535353;
  margin-top: 20px;
}

.top-sort {
  display: flex;
  border: 1px solid grey;
}

.central-title span {
  margin-left: 20px;
}

.form-invitation {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid #110000;
  /*-webkit-box-sizing: border-box;*/
  box-sizing: border-box;

}

.title-sort-way {
  padding-left: 11%;
  padding-right: 300px;
  border-right: 1px solid white;
}

.concatform {
  margin-top: 10px;
  height: 30px;
  border-bottom: 1px solid black;
}

.concatform img {
  float: left;
  margin-left: 2%;
}

.concatform span {
  float: left;
  padding-left: 14%;
  padding-right: 9%;
  /*border-right: 1px;*/
}

.meetingDialog div {
  display: flex;
}


.top-show-dialog {
  position: relative;
  top: 55px;
  z-index: 2;
}

.dialog-form {
  margin-left: 60%;
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

.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 30px solid #888585;
  z-index: 2;
  margin-left: 83%;
  margin-top: -1%;
  position: absolute;

}


.invitation-notice {
  padding-left: 80px;
  padding-right: 80px;
  border-right: 1px solid #110000;
}

.invitation-history {
  padding-left: 80px;
  padding-right: 80px;
}

.form-info-item {
  height: 45px;
  margin-top: 15px;
  border-bottom: 1px solid #110000;
}

.form-info-item img {
  width: 5%;
}

.form-info-item span {

  padding-left: 20px;
}

.form-info-item button {
  margin-left: 20px;

}

.handle {
  cursor: pointer;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

</style>
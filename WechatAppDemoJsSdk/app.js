//app.js
var Bmob = require("/dist/Bmob-1.4.2.min.js");

//初始化 Bmob.initialize("你的Application ID", "你的REST API Key");
Bmob.initialize("bb20359e8e7eb634fff2c76089ce0d80","0dcb80eb0cf198b9facccbf3f0b29b89");

App({
  onLaunch: function () {
    //一键登录
    Bmob.User.auth().then(res=>{
      console.log(res);
      console.log("一键登录成功");
    }).catch(err=>{
      console.log(err);
    })
  },
  globalData: {
    userInfo: null
  }
})
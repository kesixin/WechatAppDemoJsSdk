// pages/login/index.js
var Bmob = require("../../dist/Bmob-1.4.2.min.js");
var common = require("../../utils/common.js")
Page({
  formsubmit:function(event){
    Bmob.User.login(event.detail.value.username,event.detail.value.password).then(res=>{
      common.showTip("登录成功");
      setTimeout(function () {
        wx.switchTab({
          url: '/pages/user/index',
        })
      }, 2000);
    }).catch(err=>{
      console.log(err);
      common.showTip("登录失败", "loading");
    })
  }
})
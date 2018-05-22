// pages/register/index.js
var Bmob = require("../../dist/Bmob-1.4.2.min.js");
var common = require("../../utils/common.js");
var that;
Page({

  onLoad: function () {
    that = this;
  },

  formSubmit: function (event) {
    var username = event.detail.value.username;
    var password = event.detail.value.password;
    var password1 = event.detail.value.password1;

    if(username !=""&&password!=""&&password1!=""){

    }else{
      common.showTip("请填写完整","fail",1500);
    }
  }

})
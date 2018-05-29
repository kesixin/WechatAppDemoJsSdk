// pages/interface/index.js
var common = require("../../utils/common.js");
var grids = [
  { "name": "登录", "ico": "login.png", "url": "../user/login/index" },
  { "name": "注册", "ico": "reg.png", "url": "../user/register/index" },
  { "name": "验证码登录", "ico": "sms.png", "url": "../user/smsLogin/index" },
  { "name": "一键登录", "ico": "autologin.png", "click": "autoLogin" },
  { "name": "获取用户登录信息", "ico": "getInfo.png", "url": "../user/userInfo/index" },
  { "name": "验证Email", "ico": "checkEmail.png", "url": "../user/checkEmail/index" },
  { "name": "密码重置", "ico": "pswdreset.png", "url": "../user/resetPswd/index" },
  { "name": "上传图片", "ico": "pic.png", "url": "../user/upload/index" },
  { "name": "更新用户信息", "ico": "updateInfo.png", "url": "../user/updateInfo/index" },
  { "name": "生成二维码", "ico": "code.png", "url": "../user/code/index" }

];

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

})
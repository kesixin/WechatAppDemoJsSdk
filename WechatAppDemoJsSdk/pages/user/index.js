var grids = [
  {"name":"登录","ico":"login.png","url":"../user/login/index"},
  {"name":"注册","ico":"reg.png","url":"../user/register/index"},
  {"name": "验证码登录", "ico":"sms.png","url":"../user/smsLogin/index"},
  {"name":"获取用户登录信息","ico":"reg.png","url":"../user/userInfo/index"},
  {"name": "验证Email", "ico": "sms.png", "url": "../user/checkEmail/index" },
  {"name": "密码重置", "ico": "pswdreset.jpg", "url": "../user/checkEmail/index" }
];

Page({
  data:{
    grids:grids,
  }
})
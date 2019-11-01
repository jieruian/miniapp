import {
  getOpenidAndSessionData
} from './service/login.js'
import common from './utils/js/common.js'
App({
  onLaunch: function() {
    //判断是否有session_key
    var sessionKey = wx.getStorageSync('session_key') || ""
    if (common.isStringEmpty(sessionKey)) {
      console.log('没有key啊啊啊啊啊')
      this._loginAction()
    } else {
      console.log('有key啊啊啊啊啊')
      let _this = this
      wx.checkSession({
        fail() {
          // session_key 已经失效，需要重新执行登录流程
          console.log("ssession_key 已经失效，需要重新执行登录流程")
          _this._loginAction()
        }
      })

    }
    // this._loginAction()

  },

  onShow() {

  },

  // 登录
  _loginAction() {
    wx.login({
      success: res => {
        console.log(res)
        getOpenidAndSessionData(res.code).then(res => {
          console.log(res)
          if (res.data.code == 200) {
            const response = res.data;
            wx.setStorage({
              key: "session_key",
              data: response.data.session_key
            })
            wx.setStorage({
              key: "openid",
              data: response.data.openid
            })
            if (common.isStringEmpty(response.tokenInfo)){
                       console.log("token没有膀固定啊")
            }else{
              wx.setStorageSync('access_token', response.tokenInfo.access_token)
              wx.setStorageSync('userId', response.tokenInfo.loginUser.id)
            }
            
          } else {
            wx.showToast({
              title: res.message,
              icon: "none"
            })
          }
        }).catch(err => {
          console.log(err);
          console.log("看看" + err.errMsg)
          wx.showToast({
            title: err.errMsg,
            icon: "none"
          })
        })
      }
    })
  }





})
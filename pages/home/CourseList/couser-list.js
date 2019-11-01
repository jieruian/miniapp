import {
  getCourseListData
} from '../../../service/home.js'
import common from '../../../utils/js/common.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipNums: ["/assets/home/playtopsamll1.png", "/assets/home/playtopsamll2.png", "/assets/home/playtopsamll3.png"],
    dataArray:[],
    isShowBindingPhone:false, //是否显示绑定手机弹窗
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getCourseListData().then(res => {
      console.log(res)

      if (res.data.code == 200) {
        const response = res.data;
        this.setData({
          dataArray: response.data,
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: "none"
        })
      }

    }).catch(err => {
      console.log(err);
      console.log("看看" + err.errMsg)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //刷新
  onPullDownRefresh() {

    getCourseListData().then(res => {
      console.log(res)

      if (res.data.code == 200) {
        const response = res.data;
        this.setData({
          dataArray: response.data,
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: "none"
        })
      }
      wx.stopPullDownRefresh()
    }).catch(err => {
      console.log(err);
      wx.stopPullDownRefresh()
      console.log("看看" + err.errMsg)
    })
  },

  //课程点击 
  itemClick(el) {
    console.log("点击课程" + el.detail)
    if (!this.data.dataArray.length) return
    if (this._checkTokenAction && el.detail>2){
     console.log('显示去App收听')
     return
    }
    var courseId = this.data.dataArray[el.detail].id
    wx.navigateTo({
      url: '../CouserPlayDetail/course-play-detail?id=' + courseId,
    })
  },
  //判断是否有token
  _checkTokenAction(){
    var access_token = wx.getStorageSync('access_token') || ""
    if (common.isStringEmpty(access_token)){
      //没有token
      this.setData({
        isShowBindingPhone: true
      })
      return false
    }else{
      //有token
      return true
    }
  }
})
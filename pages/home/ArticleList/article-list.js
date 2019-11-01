
import {
  getArticleListData
} from '../../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
    getArticleListData().then(res => {
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  
  //文章点击 
  articleClickAction(el) {
    console.log("点击文章" + el.detail)
    var obj = this.data.dataArray[el.detail]
    var pushStrig = obj.linkUrl + "##" + obj.title
    var urlString = '../../../components/normalwebview/normalwebview?id=' + pushStrig
    wx.navigateTo({
      url: urlString,
    })
  },
  //刷新
  onPullDownRefresh(){
    getArticleListData().then(res => {
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
      wx.stopPullDownRefresh()
      console.log(err);
      console.log("看看" + err.errMsg)
      
    })
  }


})
// pages/home/home.js

import {
  getHomeData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTitles: ["课程试听", "创业干货"],
    categoryMiniTitles: ["花间一壶酒，独酌无相亲", "举杯邀明月，对影成三人"],
    banners: [],
    bannerImgList: [],
    microAppCourseVoList:[],
    microappGanhuoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //请求数据
    getHomeData().then(res => {
      console.log(res)

      if (res.data.code == 200) {
        const response = res.data;
        this.setData({
          banners: response.bannerList,
          bannerImgList: this.haveBannerImgListAction(response.bannerList),
          microAppCourseVoList: response.microAppCourseVoList,
          microappGanhuoList: response.microappGanhuoList
        })
        // this.selectComponent("#swpierId").initData();
      } else {
        wx.showToast({
          title: res.data.message,
          icon: "none"
        })
      }

      // console.log(this.data.bannerImgList)
    }).catch(err => {
      console.log(err);
      console.log("看看" + err.errMsg)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    //请求数据
    getHomeData().then(res => {
      if (res.data.code == 200) {
        const response = res.data;
        this.setData({
          banners: response.bannerList,
          bannerImgList: this.haveBannerImgListAction(response.bannerList),
          microAppCourseVoList: response.microAppCourseVoList,
          microappGanhuoList: response.microappGanhuoList
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
      console.log("看看" + err.errMsg)
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  swiperClick(el) {
    var bannerModel = this.data.banners[el.detail]
    if (bannerModel.tartget == 0) {
      wx.navigateTo({
        url: '../../components/normalwebview/normalwebview?id=' + bannerModel.targeturl,
      })
    }
  },

  haveBannerImgListAction(list) {
    var arrBox = [];
    list.forEach((item, index, array) => {
      //  console.log("图片"+item.image); 
      arrBox.push(item.picurl)
    })
    return arrBox
  },

  // 课程点击更多事件
  courseMoreClick() {
    console.log("课程点击更多")
    wx.navigateTo({
      url: './CourseList/couser-list',
    })
  },
  //课程点击
  courseClickAction(el) {
    console.log("点击课程" + el.detail)
    if(!this.data.microAppCourseVoList.length) return
    var courseId = this.data.microAppCourseVoList[el.detail].id
 wx.navigateTo({
   url: './CouserPlayDetail/course-play-detail?id='+courseId,
 })
  },
  // 文章点击更多事件
  articleMoreClick() {
    console.log("文章点击更多")
    wx.navigateTo({
      url: './ArticleList/article-list',
    })
  },
   //文章点击 
  articleClickAction(el){
    console.log("点击文章" + el.detail)
    var obj = this.data.microappGanhuoList[el.detail]
    var pushStrig = obj.linkUrl+ "##" + obj.title
    var urlString = '../../components/normalwebview/normalwebview?id=' + pushStrig
    wx.navigateTo({
      url: urlString,
    })
  },
  
 


})
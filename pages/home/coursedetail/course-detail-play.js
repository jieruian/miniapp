// pages/home/coursedetail/course-detail-play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playType:0,
    isAlready:false,
    isAudioPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
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
  //音频的暂停或者播放
  audioPlayAction(){
    this.setData({
      isAudioPlay: !this.data.isAudioPlay
    })
  },

  switchClick(){
  if(this.data.playType == 0){
    //切换成视频
    this.setData({
      playType: 1
    })
    if (this.data.isAlready) this.videoContext.play()
  }else{
    //切换成音频
    this.videoContext.pause()
    this.setData({
      playType: 0
    })
  }  
  },
  //关闭手动侧滑
  stopTouchMove() {
    return false;
  },
  //当开始/继续播放时触发play事件
  startPlay(el){
    console.log("开始播放啦")
    this.data.isAlready = true;
    // console.log(el);
  }
})
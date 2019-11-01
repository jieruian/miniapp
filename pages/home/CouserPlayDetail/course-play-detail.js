import {
  getCourseDetailData
} from '../../../service/home.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArray:[],
    currentIndex:0,
    courseId: "",
    courseName: "",
    courseMiniName: "",
    courseListIntroduction: "",
    videoUrl: "",
    isCover: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.videoContext = wx.createVideoContext('VideoPlayer')
    this.data.courseId = options.id
    //请求数据
    getCourseDetailData(options.id).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        const response = res.data; 
        // console.log(response.currentCourse.courseName)
        var courseArray = response.currentCourse.courseName.split("#")
        this.setData({
          dataArray: response.subCourseList,
          courseName: courseArray[0],
          courseMiniName: courseArray[1],
          courseListIntroduction: response.subCourseList[0].introduction,
          videoUrl: response.subCourseList[0].videoUrl
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
  courseItemClick(el){
    if(el.detail == this.data.currentIndex) return
    var isTemporarilyShow = true
    if (el.detail<3) {
      this.videoContext.play()
      isTemporarilyShow = true
    }else{
      isTemporarilyShow = false
    }
    this.setData({
      // dataArray: arrayBox,
      dataArray: this._exchangeCouserList(el.detail),
      currentIndex: el.detail,
      courseListIntroduction: this.data.dataArray[el.detail].introduction,
      videoUrl: this.data.dataArray[el.detail].videoUrl,
      isCover: isTemporarilyShow
    })
    
  },

  _exchangeCouserList(index){
    var changeItem = this.data.dataArray[index]
    changeItem.isselected = true
    var restoreItem = this.data.dataArray[this.data.currentIndex]
    restoreItem.isselected = false
    var arrayBox = this.data.dataArray
    arrayBox.splice(index, 1, changeItem)
    arrayBox.splice(this.data.currentIndex, 1, restoreItem)
    return arrayBox
  }
})
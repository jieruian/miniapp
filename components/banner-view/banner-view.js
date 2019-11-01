// components/banner-view/banner-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lists:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperCurrent: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperchange: function (e) {
      this.setData({
        swiperCurrent: e.detail.current
      })
    },
    //轮播图点击事件
    swipClick: function (e) {
      this.triggerEvent('swiperAction', this.data.swiperCurrent)
    },
  }
})

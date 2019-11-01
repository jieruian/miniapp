// pages/home/chlid/article-collect-view/article-collect-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    microappGanhuoList:{
      type: Array,
      value: {}
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(el) {
      // console.log("点击课程" + el.detail)
      this.triggerEvent('itemClick', el.detail)
    }
  }
})

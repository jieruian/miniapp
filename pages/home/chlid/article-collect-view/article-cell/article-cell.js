// pages/home/chlid/article-collect-view/article-cell/article-cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectindex: {
      type: Number,
      value: 0
    },
    itemObj: {
      type: Object,
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
    btnClick() {
      this.triggerEvent('articleClickAction', this.data.selectindex)
    }
  }
})

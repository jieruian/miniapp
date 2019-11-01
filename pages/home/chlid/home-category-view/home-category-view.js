// pages/home/chlid/home-category-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   titleString:{
     type: String,
     value: "标题"
   },
    miniTitleString: {
      type: String,
      value: "副标题"
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
    btnClick(){
      this.triggerEvent('btnclick')
    }

  }
})

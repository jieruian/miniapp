// pages/home/chlid/course-collect-view/course-collect-view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courseArray: {
      type: Array,
      value: ["1","2","3"],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tipNums:["/assets/home/playtop1.png", "/assets/home/playtop2.png", "/assets/home/playtop3.png"]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(el){
      // console.log("点击课程" + el.detail)
      this.triggerEvent('itemClick', el.detail)
    }
  }
})

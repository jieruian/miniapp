
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectindex: {
      type: Number,
      value: 0
    },
    tipPath: {
      type:String,
      value: ""
    },
    itemObj:{
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   courseTitle: "",
   courseMiniTitle: ""
  },



  /**
   * 组件的方法列表
   */
  methods: {
    btnClick() {
      this.triggerEvent('courseClickAction', this.data.selectindex)
    }

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      var arrayBox= this.data.itemObj.courseName.split("#")
      this.setData({
        courseTitle: arrayBox[0],
        courseMiniTitle:arrayBox[1]
      })
    },
    moved: function () { },
    detached: function () { },
  },
  
})

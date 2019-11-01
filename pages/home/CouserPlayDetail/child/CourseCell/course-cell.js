Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myIndex: {
      type: Number,
      value: 0
    },
    itemData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isSelected: false,
    lastIndex: -1,
    timeLength: "",
    courseTitle: ""

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(el) {
      this.triggerEvent('itemClick', this.data.myIndex)
    },

    _getAudioTime(num = 0) {
      let minute = Math.floor(num / 60).toString();
      let second = Math.floor(num % 60).toString();
      return `${minute.padStart(2, '0')} : ${second.padStart(2, '0')}`
    },

  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
      // console.log(this.data.itemData)
      var arrayBox = this.data.itemData.courseName.split("#")
      this.setData({
        courseTitle: arrayBox[0],
        timeLength: this._getAudioTime(this.data.itemData.length)
      })
      // console.log(this.data.courseTitle + this.data.timeLength)
    },
    moved: function () { },
    detached: function () { },
  },
})
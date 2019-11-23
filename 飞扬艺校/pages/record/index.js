// pages/record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:[],
    keyss:'',
    two:true
  },
onLoad(){
  var that=this
  wx.getStorage({
    key: 'key',
    success (res) {
      // console.log(res.data)
      that.setData({
        key:res.data
      })
      for(var i=0;i<that.data.key.length;i++){
        console.log(that.data.key[i])
        that.setData({
          keyss:that.data.key[i]
        })
      }
    }
  });
},
align(){
  wx.showModal({
    title: '重新打卡',
    content: '新打卡提交后会覆盖之前的打开内容，确定要重新打卡吗？',
    confirmText:"重新打卡",
    confirmColor:"#576B95",
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.navigateTo({
          url:"/pages/alignT/index"
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
},
  share() {
    console.log(2222)
    this.setData({
      two: !this.data.two
    })

  },
  cunchu() {
    this.setData({
      two: !this.data.two
    })
  }
})
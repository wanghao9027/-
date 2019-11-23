// pages/align/index.js
Page({
  data: {
    img:'',
    name:"",
    key:[],
    keyss:"",
    showVal:true
  },
  chooseWxImage: function(type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function(res) {
        console.log(res);
        that.setData({
     // tempFilePath可以作为img标签的src属性显示图片
          img: res.tempFilePaths[0],
        })
      }
    })
  },
 
  chooseimage: function() {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#a3a2a2",
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  formSubmit: function (e) {
  
    this.setData({
      showVal:!this.data.showVal
    })
    var that = this
    var val=e.detail.value.input
    this.setData({
      name:val
    })
    console.log( e.detail.value.input)
    wx.setStorage({
      key:"key",
      data:[this.data.img,this.data.name]
    });
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
   console.log(this.data.keyss)
   wx.showModal({
    content: '打卡成功',
    confirmText:"确定",
    confirmColor:"#576B95",
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.switchTab({
          url:"/pages/clock/index"
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })

  }

 
})
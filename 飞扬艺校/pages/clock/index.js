//index.js
//获取应用实例
const app = getApp()
const RM = wx.getRecorderManager()
Page({
  data: {
   showVal:true,
   img:'',
   name:"",
   key:[],
   keyss:"",
   two:true
  },
  onShow(){
    var that=this
    wx.getStorage({
      key: 'key',
      success (res) {
        if(res){
          that.setData({
            showVal:false
          })
        }
        console.log(res)
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
  ranking(){
    wx.navigateTo({
      url:"/pages/ranking/index"
    })
  },
  clock(){
    wx.navigateTo({
      url:"/pages/record/index"
    })
  },
  shell(){
    wx.navigateTo({
      url:"/pages/shell/index"
    })
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
            url:"/pages/align/index"
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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
        that.setData({
          key:res.data
        })
        for(var i=0;i<that.data.key.length;i++){
          that.setData({
            keyss:that.data.key[i]
          })
        }
      }
    });
  },
  //录音
	voice() {
		console.log("==开始==");

		let option = {
			format: 'mp3', //录音的格式，有aac和mp3两种   
		}
		RM.start(option);
		RM.onStart(() => {
			console.log('录音开始事件')
		});
	},
	//结束播放
	onEnd(){
		console.log("==结束==")
		RM.stop();
		RM.onStop((res) => {
		 // console.log(res)
		  // res.tempFilePath;//是临时的文件地址
		  // res.duration;//录音的时长
		  // res.fileSize;//文件的大小
		  this.data.url = res.tempFilePath;
		})

	},
  share(){
    console.log(2222)
    this.setData({
      two:!this.data.two
    })
    
  },
  cunchu(){
    this.setData({
      two: !this.data.two
    })
  }
})

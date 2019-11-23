// pages/common/buy/buy.js
Page({
	data: {
      userInfo:''
	},
	onLoad: function(options) {
		var hn = wx.getStorageSync("key");
		console.log(hn);
		this.setData({
			title: hn.title,
			img: hn.img,
			numm: hn.numm,
			price: hn.price,
			selected: hn.selected,
			allP: hn.allP
		})
	},
  choAdd(){
    var that =this
    wx.chooseAddress({
      success(res) {
        that.setData({
          userInfo:{
            name: res.userName,
            provinceName: res.provinceName,
            cityName: res.cityName,
            countyName: res.countyName,
            detailInfo:res.detailInfo,
            telNumber: res.telNumber
          }
        })
        // console.log(that.data.userInfo)
      }
    })
  }
})

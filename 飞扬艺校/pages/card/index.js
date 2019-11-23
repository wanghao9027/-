//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		state: false, //收起没名片
		red: true, //收藏
		phoneNum:'12345678901'
	},
	onLoad: function() {

	},
	hide() {
		console.log(this.data.state)
		this.setData({
			state: !this.data.state
		})
	},
	goHemo() {
		wx.redirectTo({
			url: "/pages/hemo/index"
		})
	},
	dial() {
		wx.makePhoneCall({
			phoneNumber: '13315790259' //仅为示例，并非真实的电话号码
		})
	},
	switcher() {
		this.setData({
			red: !this.data.red
		})
	},
	//交换电话号码
	phoneNumTap() {
		var that = this;
		// 提示呼叫号码还是将号码添加到手机通讯录
		wx.showActionSheet({
			itemList: ['呼叫', '添加联系人'],
			success: function(res) {
				if (res.tapIndex === 0) {
					// 呼叫号码
					wx.makePhoneCall({
						phoneNumber: that.data.phoneNum,
					})
				} else if (res.tapIndex == 1) {
					// 添加到手机通讯录
					wx.addPhoneContact({
						firstName: '飞扬', //联系人姓名
						mobilePhoneNumber: that.data.phoneNum, //联系人手机号
					})
				}
			}
		})
	}
})

// pages/creade/index.js
const RM = wx.getRecorderManager()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		num: 0,
		pic: [
			"http://m.qpic.cn/psb?/V11CTl4R3lqst3/YZ1aGxqdG.7LK9Sbv7Tea2OJ8f70dpIbjCPhxiKiejE!/b/dL8AAAAAAAAA&bo=NgBTAAAAAAABF1U!&rf=viewer_4",
			"http://m.qpic.cn/psb?/V11CTl4R3lqst3/JnX9EvOWcs1ianVgU8pvsG7JwujYw6joZN7zeIr0dL0!/b/dLYAAAAAAAAA&bo=NgBPAAAAAAABF0k!&rf=viewer_4",
			"http://m.qpic.cn/psb?/V11CTl4R3lqst3/*2tad9e*a*Z2AVZdvR*E5njIHTSd9W4vUcfdaeFgz2E!/b/dL8AAAAAAAAA&bo=egBPAAAAAAABFwU!&rf=viewer_4"
		],
		name: "",
		phone: "",
		WX: "",
		company: "",
		studio: "",
		mail: "",
		nuseName:""
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		
	},
	optio(e) {

		this.setData({
			num: e.currentTarget.dataset.index
		})
	},
	getUser() {
    console.log(2)
		wx.getUserInfo({
			success:(res)=>{
        console.log(res)
				this.setData({
					nuseName:res.userInfo.avatarUrl
				})
			}
		})
	},

	// 事件
	goBack() {
		let obj = {}
		obj.name = this.data.name,
		obj.phone = this.data.phone,
		obj.WX = this.data.WX,
		obj.company = this.data.company,
		obj.studio = this.data.studio,
		obj.mail = this.data.mail,
		obj.nuseName = this.data.nuseName
		console.log(obj)
		wx.setStorageSync('obj', obj)
		wx.redirectTo({
			url: "/pages/hemo/index"
		})
	},
	//名片的信息
	nameBlur(e) {
		let name = e.detail.value
		let text = /[\u4e00-\u9fa5]/
		if (text.test(name)) {
			this.setData({
				name
			})
		} else {
			wx.showToast({
				title: '请输入汉子',
				icon: 'none',
				duration: 500
			})
		}
	},
	phoneBlur(e) {
		let phone = e.detail.value
		let studio = e.detail.value
		let text = /^1[3,4,5,7,8]\d{9}$/
		if (text.test(phone)) {
			this.setData({
				phone
			})
		} else if (text.test(studio)) {
			this.setData({
				studio
			})
		} else {
			wx.showToast({
				title: '请输入正确号码',
				icon: 'none',
				duration: 500
			})
		}
	},
	WXBlur(e) {
		let WX = e.detail.value
		let company = e.detail.value
		let text = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/

		if (text.test(WX)) {
			this.setData({
				WX
			})
		} else if (text.test(company)) {
			this.setData({
				company
			})
		} else {
			wx.showToast({
				title: '格式不正确',
				icon: 'none',
				duration: 500
			})
		}
	},
	mailBlur(e) {
		let mail = e.detail.value
		let text = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
		if (text.test(mail)) {
			this.setData({
				mail
			})
		} else {
			wx.showToast({
				title: '邮箱不正确',
				icon: 'none',
				duration: 500
			})
		}
	},
	//录音
	onStart() {
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

	}
})

// pages/common/details/details.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showModal: false,
		numm: "1"
	},
	onLoad: function(options) {
		var id =JSON.parse(decodeURIComponent(options.id));
		// console.log(id);
		let that = this;
		that.setData({
			title: id.title,
			img: id.image,
			num: id.num,
			price: id.price,
			selected: id.selected
		})
		// console.log(that.data);

	},
	buy(e) {

		this.setData({
			showModal: true
		})

	},
	qued(e) {
		// this.setData({
		// 	showModal: false
		// })
		// var id = e.currentTarget.dataset.id;
		// ?id=" + JSON.stringify(id)
		var obj = {
			title: this.data.title,
			img: this.data.img,
			numm: this.data.numm,
			price: this.data.price,
			selected: this.data.selected,
			allP: this.data.allP
		}
		wx.setStorageSync("key", obj);
		console.log(obj);
		wx.navigateTo({
			url: "/pages/common/buy/buy"
		})
	},
	// 禁止屏幕滚动
	preventTouchMove() {},

	// 弹出层里面的弹窗
	ok() {
		this.setData({
			showModal: false
		})
	},
	asd(e) {
		var numm = this.data.numm;
		numm++;
		this.setData({
			numm
		})
		this.hna();
	},
	jian(e) {
		var numm = this.data.numm;
		numm--;
		if (numm <= 1) {
			numm = 1
		}
		this.setData({
			numm
		})
		this.hna();
	},
	onShow(e) {

		this.hna();

	},
	hna() {
		var numm = this.data.numm;
		var pric = this.data.price;
		// console.log(numm);
		var allP = numm * pric
		this.setData({
			allP
		})
	},
  goShop(){
    console.log(1)
    wx.reLaunch({
      url: "/pages/merchant/index"
    })
  }

})

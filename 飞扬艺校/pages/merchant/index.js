//index.js
//获取应用实例
const app = getApp()
import url from '../../config/url'
Page({
	data: {
		currentIndex: 0,
		msn: [],
		arr: []
	},
	onLoad: function () {
		// this.setData({
		// 	arr: this.data.list
		// })
		wx.request({
			url: url.shop,
			data: {},
			success: (res)=>{
				console.log(res.data.msg)
				this.setData({
					list:res.data.msg
				})
			}
		})
	},
	details(e) {
		// console.log(e.currentTarget.dataset.id)
		var id = this.data.list[e.currentTarget.dataset.id];
		// console.log(id)
		wx.navigateTo({
			url: "/pages/common/details/details?id=" + encodeURIComponent(JSON.stringify(id))
		})
	},
	meda() {
		wx.navigateTo({
			url: "/pages/common/meda/meda"
		})
	},
	onmouTap(e) {
		// console.log(e.currentTarget.dataset.index)
		wx.request({
			url: url.shop,
			data: {id:e.currentTarget.dataset.index},
			method: 'POST',
			success: (res)=>{
				this.setData({
					list:res.data.msg
				})
			}
		})
		// if (e.currentTarget.dataset.index == 0) {
		// 	this.setData({
		// 		arr: this.data.list
		// 	})
		// } else {
		// 	let newArr = [];
		// 	this.data.list.filter((item) => {
		// 		if (item.type == e.currentTarget.dataset.index) {
		// 			newArr.push(item)
		// 			this.setData({
		// 				arr: newArr
		// 			})
		// 		}
		// 	})
		// }

	}
})

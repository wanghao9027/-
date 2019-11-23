Page({
	data: {

	},
	onLoad: function(options) {

	},
	goto(){
		console.log(1)
		
	}
	
})
var temp = {
	onclick: function (event) {
		wx.navigateTo({
			url: '/pages/common/car/car'
		})
	}
}
export default temp

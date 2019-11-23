// pages/common/car/car.js
Page({
	data: {
		select_all: false,
		carts: [{
				id: 1,
				title: '一对一套餐',
      image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/rOu7oCbJD*P5z2IpFyHSKZ296aNEILk7HqjI6udfsvs!/b/dMMAAAAAAAAA&bo=PgEmAQAAAAADFyo!&rf=viewer_4',
				num: 4,
				price: 6666,
				selected: false
			},
			{
				id: 2,
				title: '一对二套餐',
        image: 'http://m.qpic.cn/psb?/V11CTl4R3lqst3/zQyO8bMQPjv2nW*TcSRjqL9DKRacIGzAGyjbG9WN4zw!/b/dLgAAAAAAAAA&bo=PgEmAQAAAAADJxo!&rf=viewer_4',
				num: 1,
				price: 9599,
				selected: false
			}
		],
		totalPrice: 0

	},
	onLoad: function(options) {

	},
	all(e) {
		var arr=this.data.carts
		var price=0
		this.setData({
			select_all:!this.data.select_all
		})
		if(this.data.select_all){
			for (let i = 0; i < arr.length; i++) {
				price += arr[i].num*arr[i].price
			}
		}
		for (let i = 0; i < arr.length; i++) {
			arr[i].selected = this.data.select_all
		}
		this.setData({
			carts:arr,
			totalPrice:price
		})
	},
	check(e){
		var price=0
		var len=0
		var arr=this.data.carts
		var allLen=arr.length
		var index=e.currentTarget.dataset.id
		arr[index].selected=!arr[index].selected
		for(var i=0;i<arr.length;i++){
			if(arr[i].selected==true){
				len++
				price+=arr[i].num*arr[i].price
			}
		}
		// console.log(len,allLen)
		if(len==allLen){
			this.setData({
				select_all:true,
				totalPrice:price
			})
		}else{
			this.setData({
				select_all:false,
				totalPrice:price
			})
		}
	}
})

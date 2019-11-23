//index.js
//获取应用实例
const app = getApp()
import url from "../../config/url.js"
Page({
  data: {
      
  },
  onLoad: function () {
    wx.request({
        url:url.website,
        data: {},
        method: 'GET',
        success: (res)=>{
            // console.log(res.data.msg)
            this.setData({
                phone:res.data.msg.phone,
                swipeImg:res.data.msg.swipeImg,
                brief:res.data.msg.brief,
                environment:res.data.msg.environment,
                information:res.data.msg.information,
                marvellous:res.data.msg.marvellous
            })
        }
    })
    wx.setNavigationBarTitle({
      title: '官网'
    })
  },
  goBrief(){
    wx.navigateTo({
      url: '/pages/brief/brief?con='+encodeURIComponent(JSON.stringify(this.data.brief))
    })
  },
  goNews(){
    wx.navigateTo({
      url: '/pages/news/news?con='+encodeURIComponent(JSON.stringify(this.data.information))
    })
  },
  goMoment(){
    wx.navigateTo({
      url: '/pages/moment/moment?con='+encodeURIComponent(JSON.stringify(this.data.marvellous))
    })
  },
  goEnvironment(){
    wx.navigateTo({
      url: '/pages/environment/environment?con='+encodeURIComponent(JSON.stringify(this.data.environment))
    })  
  },
  goSubNews(e){
    wx.navigateTo({
      url: '/pages/subNews/subNews?con='+encodeURIComponent(JSON.stringify(this.data.information.all[e.currentTarget.dataset.id]))
    })
  },
  call(){
    wx.makePhoneCall({
      phoneNumber: '15020653211' // 仅为示例，并非真实的电话号码
    })
  },
  map(){
    wx.navigateTo({
      url: '/pages/map/map'
    })
  }
})

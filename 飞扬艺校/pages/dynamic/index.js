//index.js
//获取应用实例
const app = getApp()
import url from "../../config/url.js"
Page({
  data: {
      
  },
  goDetail(e){
    //   console.log(e.currentTarget.dataset.id)
      if(e.currentTarget.dataset.id!==0){
        wx.navigateTo({
            url: '/pages/detail/detail?con='+encodeURIComponent(JSON.stringify(this.data.list[e.currentTarget.dataset.id]))
        })
      }
    
  },
  onLoad(){
      wx.request({
          url: url.list,
          data: {},
          method: 'GET',
          success: (res)=>{
              console.log(res.data.msg)
              this.setData({
                  video:res.data.msg[0].img,
                  list:res.data.msg
              })
          }
      })
    wx.setNavigationBarTitle({
        title: '动态'
    })
  }
})

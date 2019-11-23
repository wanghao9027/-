// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      con:JSON.parse(decodeURIComponent(options.con))
    })
    wx.setNavigationBarTitle({
      title: '飞扬资讯'
    })
  },
  goSubNews(e){
    wx.navigateTo({
      url: '/pages/subNews/subNews?con='+encodeURIComponent(JSON.stringify(this.data.con.all[e.currentTarget.dataset.id]))
    })
  }
})
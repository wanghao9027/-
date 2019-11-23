// pages/environment/environment.js
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
      title: '培训环境'
    })
  }
})
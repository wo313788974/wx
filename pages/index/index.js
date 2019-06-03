import { api, requestMethods } from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    swiperList: [],
    videosList: [],
    currentIndex: 0
  },

  // 自定义方法
  activeItem(e) {
    this.setData({
      // e.target.dataset.index 为在标签上绑定了 data-index = "{{index}}"
      currentIndex: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    requestMethods.get(api.navList).then(res => {
      if (res.data.code === 0) {
        this.setData({
          navList: res.data.data.navList
        }) 
      }  
    });
    requestMethods.get(api.swiperList).then(res => {
      if (res.data.code === 0) {
        this.setData({
          swiperList: res.data.data.swiperList
        }) 
      }  
    });
    requestMethods.get(api.videosList).then(res => {
      if (res.data.code === 0) {
        this.setData({
          videosList: res.data.data.videosList
        }) 
      }  
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
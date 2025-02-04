// pages/moni/moni.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['tom', 'jack'],
    num: 29,
    num1:40,
    arr1: ['a', 'b', 'c', 'd', 'e', 'f'],
    list :[
      {idq:1,names:'流浪地球'},
      {idq:2,names:'八佰'},
      {idq:3,names:'集结号'},
      {idq:4,names:'姜子牙'},
      {idq:5,names:'速度与激情'},
    ],

  },
  //自定义事件
  change: function () {
    this.setData({
      list :[
        {idq:1,names:'流浪地球'},
        {idq:3,names:'集结号'},
        {idq:4,names:'姜子牙'},
        {idq:5,names:'速度与激情'},
        {idq:2,names:'八佰'},
      ]
    })
  },
  aaa:function(e){
    //e.currentTarget 事件对象
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.i)
    //this.setData 除了能修改还能创建
    this.setData({
      msg:e.currentTarget.dataset.i
    })
  },
  getInfo:function(e){
    console.log(e.detail)
    this.setData({
      names:e.detail.userInfo.nickName,
      userurl:e.detail.userInfo.avatarUrl
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
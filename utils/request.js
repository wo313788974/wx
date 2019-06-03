const baseUrl = 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/'
const api = {
  navList: `${baseUrl}navList`,
  swiperList: `${baseUrl}swiperList`,
  videosList: `${baseUrl}videosList`,
  videoUrl: `${baseUrl}videoDetail?id=`,
  recommendVideo: `${baseUrl}othersList?id=`,
  commentList: `${baseUrl}commentsList?id=`
}

const requestMethods = {
  get(url) {
    return new Promise((resolve,reject) => {
      wx.request({
        url,
        success: function(res) {
          resolve(res);
        },
        fail: function(error) {
          reject(error);
        }
      });
    })
  }
}

module.exports = {
  api,
  requestMethods
}
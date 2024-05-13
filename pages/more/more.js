// pages/mypage/mypage.js
var media = require('../../utils/media');
var utils = require('../../utils/utils');
Page({
    data: {
        miniprogram_name: utils.miniprogram_name,

        avatarUrl: media.avatarUrl,

        green_arrow: media.green_arrow,

        statement: media.statement,
        note: media.note,

        users: media.users,
        contact: media.contact,

        support: media.support,

        chat: media.chat,
        feedback: media.feedback,
        miniprogramming_ma:media.miniprogramming_ma,

        share: media.share,

        admin: media.admin,

        //是否多次点击进入管理页面
        toadminchecked:true,
        getIdchecked:true
    },

    onLoad: function () {},

    // 用户点击右上角分享
    onShareAppMessage() {},

    // 用户点击右上角分享到朋友圈
    onShareTimeline: function (res) {},

    // 软件声明
    tostatement() {
        wx.navigateTo({
            url: '../../pages/more/statement/statement',
        })
    },
    // 页面测试
    test() {
    //   wx.navigateTo({
    //     url: '../../pages/more/test/test',
    // })
    },
    // 联系作者
    contact() {
        wx.showModal({
            title: '联系作者',
            content: '如果遇到问题\n请点击确认添加微信与我联系',
            success: (res => {
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.contact, // 当前显示图片的http链接
                        urls: [this.data.contact] // 需要预览的图片http链接列表
                    })
                }
            }),
            fail(res) {
                //console.log('fail')
            }
        })
    },

    // 分享
    share() {
        wx.showModal({
            title: '推荐给好友',
            content: '点击确认即可查看小程序码\n长按小程序码即可转发给好友',
            success: (res => {
              
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.miniprogramming_ma, // 当前显示图片的http链接
                        urls: [this.data.miniprogramming_ma] // 需要预览的图片http链接列表
                    })
                }
            }),
            fail(res) {
                console.log('fail')
            }
        })
    },

    // 管理界面
    toadmin() {
      //第一次点击
      if(this.data.toadminchecked){
        wx.showLoading({
          title: '加载中',
        })
        //对云函数操作加锁
        this.setData({
          toadminchecked:false
        })
        wx.cloud.callFunction({
            name: 'login',
            complete: res => {
                wx.hideLoading()
                if (res.result.data.length != 0) {
                  var adminName = res.result.data[0].name
                    wx.showToast({
                        title: '欢迎回来\n管理员：' + adminName,
                        icon: 'none',
                        duration: 1500
                    })
                    setTimeout(() => {
                        wx.navigateTo({
                            url: '../../pages/admin/admin',
                        })
                    }, 1500)
                    setTimeout(() => {
                      //对云函数操作解锁
                      this.setData({
                        toadminchecked:true
                      })
                    }, 2000)
                } else {
                    wx.showToast({
                        title: '抱歉，同志\n您还不是管理员哦',
                        icon: 'none',
                        duration: 1500
                    })
                    this.setData({
                      toadminchecked:true
                    })
                }
               
            }
        })
      }
      else{
        console.log("重复点击！")
      }
    },

    // 获取openid
    getopenid() {
      if(this.data.getIdchecked){
        wx.showLoading({
          title: '加载中',
        })
        //对云函数操作加锁
        this.setData({
          getIdchecked:false
        })

        wx.cloud.callFunction({
            name: 'get_openid',
            complete: res => {
                //console.log("微信用户openid", res.result.openid)
                wx.hideLoading()
                let openid = res.result.openid
                wx.showModal({
                    title: '您的openid',
                    content: openid,
                    confirmText: '点击复制',
                    complete: (res) => {
                      this.setData({
                        getIdchecked:true
                      })
                        if (res.confirm) {
                            wx.setClipboardData({
                                data: openid,
                                success(res) {
                                    wx.getClipboardData({
                                        success(res) {
                                            //console.log(res.data) // data
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        })
      }
      else{
        console.log("重复点击！")
      }
    }
})
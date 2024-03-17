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
        sponsor: media.sponsor,

        chat: media.chat,
        feedback: media.feedback,

        share: media.share,
        miniprogramming_ma: media.miniprogramming_ma,

        admin: media.admin,

        //是否多次点击进入管理页面
        toadminchecked:true
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
    // 特别说明
    aboutus() {
        wx.showModal({
            title: '特别说明',
            content: '本项目应用于2024届计算机学院毕业毕业，未经允许，不得随意用于各类比赛项目',
        })
    },
    // 联系作者
    contact() {
        wx.showModal({
            title: '联系作者',
            content: '如果遇到什么问题\n请点击确认与我联系',
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
    // 给点赞助
    sponsor() {
        wx.showModal({
            title: '给点赞助',
            content: '如果你觉得小程序不错\n可以支持一下开发者',
            success: (res => {
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.sponsor,
                        urls: [this.data.sponsor]
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
        //对云函数操作加锁
        this.setData({
          toadminchecked:false
        })
        wx.cloud.callFunction({
            name: 'login',
            complete: res => {
                // //console.log(res.result.data[0].name)
                // //console.log(res.result.data.length)
                var name = res.result.data[0].name
                if (res.result.data.length != 0) {
                    wx.showToast({
                        title: '欢迎回来\n管理员：' + name,
                        icon: 'none',
                        duration: 1500
                    })
                    setTimeout(() => {
                      //对云函数操作解锁
                      this.setData({
                        toadminchecked:true
                      })
                        wx.navigateTo({
                            url: '../../pages/admin/admin',
                        })
                    }, 1500)
                } else {
                  this.setData({
                    toadminchecked:true
                  })
                    wx.showToast({
                        title: '抱歉，同志\n您还不是管理员哦',
                        icon: 'none',
                        duration: 1500
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
        wx.cloud.callFunction({
            name: 'get_openid',
            complete: res => {
                //console.log("微信用户openid", res.result.openid)
                let openid = res.result.openid
                wx.showModal({
                    title: '您的openid',
                    content: openid,
                    confirmText: '点击复制',
                    complete: (res) => {
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
})
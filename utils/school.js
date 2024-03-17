/* utils/school.js */
// 学校相关
module.exports = {
  // 学校官方小程序AppID
  AppID: "wxbc88787ccbada756",

  // 学校信息
  school_information: {
    // 学校全称
    school_name_full: "电子科技大学",
    // 学校英文名
    school_name_English_full: "University of Electronic Science and Technology of China",
    // 校规校训
    motto: "求实求真，大气大为",
    // 学校荣誉
    honor: "双一流建设高校",
    // 建校时间
    build_time: "1956",
    // 办校类型
    school_type: "教育部直属",
    // 院校类型
    institution_type: "理工类",
    // 学校所在地
    location: "成都・高新西区",
    // 学校简介
    text: "电子科技大学（University of Electronic Science and Technology of China），简称“电子科大”，坐落于四川省成都市，是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；位列国家“双一流”、“985工程”、“211工程”，入选“2011计划”、“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校，为“两电一邮”成员；是一所完整覆盖整个电子类学科，以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文、医协调发展的多科性研究型全国重点大学。"
    
  },

  // 校园指南
  shool_guide: [{
      title: '云游成电校园导航',
      content: '因沙河校区地图仍在开发中，现有导航系统暂无该地区地图。因现有资料较少等原因，本小程序可能会存在许多问题，请以实际情况为准。\n\n 清水河校区与沙河校区的全景图如下：',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/1overview_q1.jpg','https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/1overview_s.jpg'],
      keywords: ['介绍','全景图'],
    }, {
      title: '校历',
      content: '仅供参考，以教务处发布最新文件为准',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/2calendar.png'],
      keywords: ['校历'],
    }, {
      title: '图书馆',
      content: '图书馆采用刷卡或扫码过闸 \n常规开馆时间如下图，节假日开馆时间另行通知 \n\n 更多信息请关注“电子科技大学图书馆”微信公众号 ',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/3libary.png'],
      keywords: ['图书馆','开馆时间'],
    },
    {
      title: '食堂',
      content: '学校一共有14个食堂餐厅，其中清水河校区设10个餐厅、1个西点屋，沙河校区设4个餐厅 \n\n 各餐厅的常规供餐时间可见下图，节假日供餐时间另行通知 \n 更多信息请关注“成电后勤”微信公众号',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/4cafe_q.png','https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/4cafe_s.png'],
      keywords: ['食堂','餐厅'],
    },
    {
      title: '电能热水供应',
      content: '学生宿舍用水用电实行以寝室为单位的定额指标管理，超额部分按照学校相关规定缴纳水电费。\n\n 用电定额：本科生5度/人/月，研究生6度/人/月。\n 用水定额：本科生2.5吨/人/月，研究生2.5吨/人/月。 ',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/5supply.png'],
      keywords: ['热水','电'],
    },
    {
      title: '组团门禁',
      content: '23:00-6:30 \n\n 23:00以后进入楼栋视为晚归，晚归同学需扫描晚归二维码，通过晚归通道进入宿舍。',
      imageList: [],
      keywords: ['门禁'],
    },
    {
      title: '双校区通行',
      content: '①学校有“天府行”“校车预约”2类学生班车，为清水河校区、沙河校区往返线路，均实行微信预约乘车。（大约50分钟）\n\n②采用地铁6号线+公交接驳的方式（大约40分钟）\n\n③学校西门可乘坐有轨电车前往成都西站，乘坐公交116路前往地铁犀浦站，乘坐公交301,771,P18,205路前往地铁红高路站 \n\n④学校南门（南二门）可乘坐有轨电车前往成都西站，乘坐公交716路前往茶店子客运站，乘坐96路，736路前往金沙公交枢纽站',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/6transport.png'],
      keywords: ['校车','交通'],
    },
    {
      title: '自习指南',
      content: '①图书馆阅览位置/研修室（需预约）\n\n ②教学区（节假日开放时间为8:00-20:00）\n\n③宿舍区24小时自习室',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/7%20classroom.png','https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/7%20studyroom.png'],
      keywords: ['自习'],
    },
    {
      title: '校园一卡通使用指南',
      content: '①校园一卡通主要用于食堂就餐、校园超市消费、沐浴、宿舍电费充值、图书借阅、门禁等，有实体卡、电子卡2种形式。\n\n②校园一卡通的初始密码是身份证号后七位除去最后一位。密码可在“校园卡多媒体查询机”上修改。\n\n③若校园一卡通遗失或者损坏，请及时挂失，挂失后可立即补办。|\n\n 一卡通可在支付宝上自助充值，然后线下圈存机进行圈存，也可通过人工柜台进行充值',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/8%20card.png'],
      keywords: ['一卡通','充值'],
    },
    {
      title: '报修',
      content: '通过小程序进行报修，也可通过电话报修（更快）',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/9fix_q.png','https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/9fix_spng.png'],
      keywords: ['报修'],
    },
    {
      title: '校园购物&文印服务',
      content: '①校园超市提供食品、文体用品、日用品、校园文创用品，以及各类土特产销售服务。\n\n②文印中心提供打印、复印、扫描、排版、装订、资料印刷、写真、喷绘、横幅等服务。\n\n③校园水站提供桶装水的配送、饮水机清洗等服务。',
      imageList: ['https://636c-cloud1-2gezxl8218856e05-1323401285.tcb.qcloud.la/Campus/guidance/10market.png'],
      keywords: ['超市','打印'],
    }
  ]
}
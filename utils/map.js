/* utils/map.js */
// 地图相关
module.exports = {
  // 地图部分参数

  // 腾讯位置服务API
  mapKey: "R57BZ-MA6KZ-RGNXC-7NZPM-LHOQJ-27F3J",

  // 学校精确坐标（用于地图定位和获取天气数据）
  longitude: '103.93161',
  latitude: '30.74903',

  // 是否展示 POI 点
  enablepoi: false,
  // 是否显示带有方向的当前定位点
  showLocation: true,
  // 缩放级别
  scale:15,
  // 最小缩放级别
  minscale:14.5, 

  // 自定义图层
  groundoverlay: {
    // 图层透明度 0-1
    opacity: 0.8,
     // 西南角
     southwest_latitude: 30.747482,
     southwest_longitude: 103.919379,
     // 东北角
     northeast_latitude: 30.751338,
     northeast_longitude: 103.943508,
  },

  // 地图边界
  boundary: {
    // 西南角
    southwest_latitude: 30.746728,
    southwest_longitude: 103.915316,
    // 东北角
    northeast_latitude: 30.752365,
    northeast_longitude: 103.9478458,
  },

  // 学校边界
  school_boundary: {
    // 东（学校最东端的 经度）
    east: 103.947845,
    // 西（学校最西端的 经度）
    west:  103.915316,
    // 南（学校最南端的 纬度）
    south: 30.737711,
    // 北（学校最北端的 纬度）
    north: 30.767615,
  },

  // 默认地点
  default_point: {
    name: "南门",
    aliases: "学校正大门",
    img: "https://cdnjson.com/images/2023/02/26/schoolgate_dongmen.jpg",
    desc: "学校正大门\n可以通行行人和车辆",
    latitude: '30.747482',
    longitude: '103.919379',
  },

}
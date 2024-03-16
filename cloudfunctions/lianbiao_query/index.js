// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV
}) // 使用当前云环境

const db = cloud.database()
const _ = db.command
const $ = _.aggregate

// 云函数入口函数
//聚合联表查询
/*
lookup({
  from: <要连接的集合名>,
  localField: <输入记录的要进行相等匹配的字段>,
  foreignField: <被连接集合的要进行相等匹配的字段>,
  as: <输出的数组字段名 ，记录来自集合from>
})
*/ 
/*category集合中_id字段与site集合中的c_id字段进行相等匹配 */
exports.main = async (event, context) => {
    return await db.collection('category').aggregate()
        .lookup({
            from: 'site',
            localField: '_id',
            foreignField: 'c_id', 
            as: 'list',
        })
        .end()
}
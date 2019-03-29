import Mock from 'mockjs'
import IndexData from './indexdata'

Mock.setup({
  timeout: '500-1000' // 表示响应时间介于 500 和 1000 毫秒之间，默认值是'10-100'。
})

Mock.mock('/indexdata/getIndexList', 'get', IndexData.getIndexList)

export default Mock
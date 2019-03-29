import Mock from 'mockjs'
const list = []

for (let i = 0; i < 10; i++) {
  list.push(Mock.mock({
    'userName': '@cname',
    'img': 'https://image-static.segmentfault.com/196/845/1968451495-5c942d7638da6_articlex',
    'tags': ['喝酒', '划拳', '唱歌'],
    'age|18-40': 40,
    'weight|40-50': 50,
    'height|160-190': 180,
    'work|1-30': 1,
    'desc': '热情开朗，待人友好，善于与人沟通',
    'price|100-600': 100,
    'tlong|1-3': 1
  }))
}

export default {
  getIndexList() {
    return {
      code: 200,
      list
    }
  }
}
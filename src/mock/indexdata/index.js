import Mock from 'mockjs'
const list = []
const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554998900217&di=7dd1a898bad4ccd2cce5c7b55a66fdfe&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvzPwSKba%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000546194&di=d31b46a7f62225e754dba7dada1ac4ec&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fadaf2edda3cc7cd96107820d3301213fb80e9138.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000580696&di=3a8dab2cde437e540de730adfd5a8c11&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006hikKrzy7sly9Fzoeb2%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000634961&di=324c5e9f167c63e3b08db48fd78cd30c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F114%2F82%2F2182%2F141905574.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000654958&di=7eb320c5334d1eb393f88c94add51efb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvkud5g2a%26690'
]


for (let i = 0; i < 10; i++) {
  list.push(Mock.mock({
    'userName': '@cname',
    'img': imgs[Math.floor(Math.random() * imgs.length)],
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
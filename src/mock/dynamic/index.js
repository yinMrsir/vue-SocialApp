import Mock from 'mockjs'

const list = []
const imgs = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554998900217&di=7dd1a898bad4ccd2cce5c7b55a66fdfe&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvzPwSKba%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000546194&di=d31b46a7f62225e754dba7dada1ac4ec&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fadaf2edda3cc7cd96107820d3301213fb80e9138.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000580696&di=3a8dab2cde437e540de730adfd5a8c11&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006hikKrzy7sly9Fzoeb2%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000634961&di=324c5e9f167c63e3b08db48fd78cd30c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fnews%2Fpics%2Fhv1%2F114%2F82%2F2182%2F141905574.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555000654958&di=7eb320c5334d1eb393f88c94add51efb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F006hikKrzy7slvkud5g2a%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554998817917&di=38dc414c2cd8fcd66e03f19919e338ae&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130727%2F7447430_083053046000_2.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554998796006&di=742a97f66620080768857bb9b451a853&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130624%2F7447430_092006823000_2.jpg'
]

function createImgs() {
  let arr = []
  arr.push(imgs[Math.floor(Math.random() * imgs.length)], imgs[Math.floor(Math.random() * imgs.length)], imgs[Math.floor(Math.random() * imgs.length)])
  return Array.from(new Set(arr))
}

for (let i = 0; i < 10; i++) {
  list.push(Mock.mock({
    'userName': '@cname',
    'imgs': createImgs(),
    'type': Math.random() < 0.5 ? 1 : 2,
    'info': '今晚在魅力四射玩的很嗨。又认识了一群新的朋友，晚上的街舞表演很精彩，2个帅哥哥唱歌非常棒，很喜欢哦。',
    'age|18-40': 40,
  }))
}

export default {
  getList() {
    return {
      code: 200,
      list
    }
  }
}
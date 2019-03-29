# NavTab

## 引用组件
```
import {NavTab} from '@/components'

export default {
	components: {
	  NavTab
	}
}
```

## 使用组件
```
<NavTab
	:tablist="['关注', '广场', '附近']"
	:currIndex="currIndex"
	v-model="currIndex"
	cname="bg-white">
</NavTab>

# 父组件可通过监听currIndex执行对应操作
export default {
	watch: {
	  currIndex(value) {
		console.log(value)		// 打印的结果为点击的tablist索引
	  }
	}
}
```


## 参数
```
tablist: Array  	=> tab数据
currIndex: Number   => 当前触发的第几项 默认第一项
v-model: 			同currIndex
cname: String       => 自定义类名
```

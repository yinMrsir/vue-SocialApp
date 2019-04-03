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
	v-model="currIndex"
	cname="bg-white"
	:fixed="true">
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
v-model: Number   	=> 当前触发的第几项 默认第一项
cname: String       => 自定义类名
fixed: Boolean		=> 是否定位到顶部
```

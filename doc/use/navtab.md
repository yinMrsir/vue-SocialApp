# NavTab

Tab组件

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

```


## 参数
```
tablist: Array  	=> tab数据
v-model: Number   	=> tab索引(用于接收子组件传过来的索引)
index: Number		=> 默认激活第几项(可不传,默认第一项)
cname: String       => 自定义类名
fixed: Boolean		=> 是否定位到顶部

通常情况下v-model和index传的值相同
```

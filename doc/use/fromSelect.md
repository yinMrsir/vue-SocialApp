# FromSelect

## 引用组件
```
import {FromSelect} from '@/components'

export default {
	components: {
	  FromSelect
	}
}
```

## 使用组件
```
<FromSelect v-model="age" :slots="ageList" title="年龄"></FromSelect>

### data部分
ageList: [
  {
	flex: 1,
	defaultIndex: 3,
	values: ['18', '19', '20', '21', '22', '23'],
	textAlign: 'center'
  }
]
```

## 参数说明
```
title: String			=> 标题
slots: [
	divider				是否为分隔符
	content				分隔符的显示文本
	values				对应的备选值数组。若为对象数组，则需在标签上设置 value-key 属性来指定显示的字段名
	defaultIndex		对应初始选中值，需传入其在 values 数组中的序号，默认为 0
	textAlign			对应的对齐方式
	flex				对应CSS 的 flex 值
	className			对应的类名
]
```

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join
# FromInput

## 引用组件
```
import {FromInput} from '@/components'

export default {
	components: {
	  FromInput
	}
}
```

## 使用组件
```
<FromInput v-model="nickname" :options="{
      title: '昵称',
      placeholder: '请输入名字',
      textAlign: 'right'
    }"></FromInput>
```

## 参数说明
```
options = {
	title: String   				=> 标题
	placeholder: String 			=> 文本框默认文案
	textAlign: 'left' || 'right'  	=> 文本对齐方式
}
```

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join
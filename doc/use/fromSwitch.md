# FromSwitch

## 引用组件
```
import {FromSwitch} from '@/components'

export default {
	components: {
	  FromSwitch
	}
}
```

## 使用组件
```
<FromSwitch v-model="sex" :options="{
      title: '性别',
      defaultValue: sex,
      list: [
        {
        	name: '男',
        	value: 1,
        	icon: require('../../assets/images/icon_male_n@3x.png'),
        	activeIcon: require('../../assets/images/icon_male_h@3x.png')
        },
        {
        	name: '女',
        	value: 2,
        	icon: require('../../assets/images/icon_female_n@3x.png'),
        	activeIcon: require('../../assets/images/icon_female_h@3x.png')
        }
      ]
    }"></FromSwitch>
```

## 参数说明
```
options = {
	title: String   						=> 标题
	defaultValue: String || Number  		=> 默认选中的值
	list: [
		name: String						=> 某一项名称
		value: String || Number 			=> 某一项的值
		icon： String						=> 未激活图标地址
		activeIcon： String					=> 激活图标地址
	]
}
```

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join
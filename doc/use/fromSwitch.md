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
<table>
  <thead>
    <tr>
      <th>参数</th>
      <th align="left">类型</th>
      <th>示例</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td align="left">String</td>
      <td>'性别'</td>
      <td>名称</td>
    </tr>
    <tr>
      <td>defaultValue</td>
      <td>String || Number</td>
      <td>1</td>
      <td>默认选中的值</td>
    </tr>
    <tr>
	  <td>list</td>
	  <td align="left">Array</td>
	  <td>
	  	name: String						=> 名称 <br/>
		value: String || Number 			=> 值 <br/>
		icon： String						=> 未激活图标地址 <br/>
		activeIcon： String					=> 激活图标地址 <br/>
      </td>
	  <td>每一项的参数</td>
	</tr>
  </tbody>
</table>

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join
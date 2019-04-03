# FromTextArea

表单TextArea组件

## 引用组件
```
import {FromTextArea} from '@/components'

export default {
	components: {
	  FromTextArea
	}
}
```

## 使用组件
```
<FromTextArea v-model="say" :options="{
      title: '媒主说',
      disabled: false,
      placeholder: '介绍下自己，让金主更了解你~'
    }"></FromTextArea>
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
      <td>v-model</td>
      <td align="left">String</td>
      <td>'say'</td>
      <td>绑定值，用于接收组件返回数据</td>
    </tr>
    <tr>
	  <td>options</td>
	  <td align="left">Object</td>
	  <td>
	  	title: String   				=> 标题 <br/>
        placeholder: String 			=> 文本框默认文案  <br/>
        disabled: Boolean  				=> 是否禁用
      </td>
	  <td>-</td>
	</tr>
  </tbody>
</table>

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join


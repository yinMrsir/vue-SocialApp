# FromSelect

表单select组件

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
      <td>'年龄'</td>
      <td>名称</td>
    </tr>
    <tr>
	  <td>v-model</td>
	  <td align="left">String</td>
	  <td>'age'</td>
	  <td>绑定值，用于接收组件返回数据</td>
	</tr>
    <tr>
	  <td>slots</td>
	  <td align="left">Array</td>
	  <td>[...Object]</td>
	  <td>每一项为一个对象</td>
	</tr>
  </tbody>
</table>

### slots 参数
<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>divider</td>
			<td>是否为分隔符</td>
		</tr>
		<tr>
			<td>content</td>
			<td>分隔符的显示文本</td>
		</tr>
		<tr>
			<td>values</td>
			<td>对应的备选值数组。若为对象数组，则需在标签上设置 value-key 属性来指定显示的字段名</td>
		</tr>
		<tr>
			<td>defaultIndex</td>
			<td>对应初始选中值，需传入其在 values 数组中的序号，默认为 0</td>
		</tr>
		<tr>
			<td>textAlign</td>
			<td>对应的对齐方式</td>
		</tr>
		<tr>
			<td>flex</td>
			<td>对应CSS 的 flex 值</td>
		</tr>
		<tr>
			<td>className</td>
			<td>对应的类名</td>
		</tr>
	</tbody>
</table>

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join
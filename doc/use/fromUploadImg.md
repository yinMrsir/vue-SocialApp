# FromUploadImg

表单图片上传组件

## 引用组件
```
import {FromUploadImg} from '@/components'

export default {
	components: {
	  FromUploadImg
	}
}
```

## 使用组件
```
<FromUploadImg v-model="imgList" :multiple="true" :max="4"></FromUploadImg>
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
      <td align="left">Array</td>
      <td>[]</td>
      <td>绑定值，用于接收组件返回数据</td>
    </tr>
    <tr>
	  <td>multiple</td>
	  <td align="left">Boolean</td>
	  <td>false</td>
	  <td>是否可以多选</td>
	</tr>
	<tr>
	  <td>max</td>
	  <td align="left">Number</td>
	  <td>4</td>
	  <td>上传图片最大数量</td>
	</tr>
	<tr>
	  <td>url</td>
	  <td align="left">String</td>
	  <td>'http://www.yinchunyu.com'</td>
	  <td>如果配置了此参数会通过ajax上传 表单提交参数：file</td>
	</tr>
  </tbody>
</table>

### demo
https://yinmrsir.github.io/vue-SocialApp/#/join

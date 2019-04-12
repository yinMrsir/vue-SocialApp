# previewImagePlugins

图片全屏预览插件

## 引用组件
```
import {previewImagePlugins} from './plugins'
Vue.use(previewImagePlugins)
```

## 使用组件
```
this.$previewImage.show({
  index,
  urls
})
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
      <td>index</td>
      <td align="left">Number</td>
      <td>默认：0</td>
      <td>当前显示图片的索引</td>
    </tr>
    <tr>
	  <td>urls</td>
	  <td align="left">Array</td>
	  <td>[]</td>
	  <td>需要预览的图片http链接列表</td>
	</tr>
  </tbody>
</table>

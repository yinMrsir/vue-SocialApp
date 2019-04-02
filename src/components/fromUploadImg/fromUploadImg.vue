<template>
  <div :class="['cu-form-group', $style.topsolid]">
    <div class="cu-bar bg-white">
      <div class="action">
        图片上传
      </div>
      <div class="action">
        {{imgList.length}}/{{max}}
      </div>
    </div>
    <div class="cu-form-group padding-bottom">
      <div class="grid col-4 grid-square flex-sub">
        <div :class="['padding-xs bg-img', $style.upload]" :style="'background-image:url('+imgList[index]+')'"
             v-for="(item, index) in imgList" :key="item">
          <div :class="['cu-tag', $style.closebox]" @click="removeImg(index)">
            <span class="icon-close"></span>
          </div>
        </div>
        <div :class="['padding-xs solids', $style.upload]" v-if="imgList.length < max">
          <input type="file" :multiple="multiple" @change="uploadImg">
          <span class="icon-cameraadd"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      max: {
        type: Number,
        default: 3
      },
      uploadUrl: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        imgList: []
      }
    },
    methods: {
      removeImg(index) {
        this.imgList = this.imgList.filter((v, i) => {
          return index !== i
        })
        this.$emit('input', this.imgList)
      },
      async uploadImg(e) {
        if (e.target.files.length === 0) {
          return
        }
        if (e.target.files.length > this.max - this.imgList.length) {
          console.warn(`超过图片上传显示数量, 当前最大数量为${this.max}`)
          return
        }
        for (let i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i]
          this.imgList.push(await this.asUpload(file))
        }
        this.$emit('input', this.imgList)
      },
      asUpload(file) {
        return new Promise(async res => {
          if (this.uploadUrl) {
            let formData = new FormData()
            formData.append('file', file)
            let {code, result} = await this.formAjax(this.uploadUrl, formData)
            if (code === 200) {
              res(result)
            } else {
              console.warn(`code 不是返回的200`)
            }
          } else {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
              res(e.target.result)
            }
          }
        })
      },
      // 表单提交数据封装
      formAjax(url, formData) {
        return new Promise(resolve => {
          axios.post(url, formData).then(res => {
            resolve(res.data)
          })
        })
      }
    }
  }
</script>

<style lang="scss" module>
  .topsolid {
    display: block;
    padding: 0;
  }

  .upload {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    margin-right: 20px;
    position: relative;
    > div {
      width: 36px;
      height: 36px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 3px;
      background: rgba(0,0,0,0.5);
      span {
        font-size: 30px;
        color: #fff;
        display: block;
      }
    }
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
    span {
      font-size: 80px;
      color: #bfbfbf;
    }
  }

</style>
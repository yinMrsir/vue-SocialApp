<template>
  <div :class="['cu-form-group', $style.topsolid]">
    <div class="cu-bar bg-white">
      <div class="action">
        图片上传
      </div>
      <div class="action">
        {{imgList.length}}/4
      </div>
    </div>
    <div class="cu-form-group padding-bottom">
      <div class="grid col-4 grid-square flex-sub">
        <div :class="['padding-xs bg-img', $style.upload]" :style="'background-image:url('+imgList[index]+')'"
             v-for="(item, index) in imgList" :key="item">
          <div class="cu-tag bg-red">
            <span class="icon-close"></span>
          </div>
        </div>
        <div :class="['padding-xs solids', $style.upload]" v-if="imgList.length<4">
          <input type="file" @change="uploadImg">
          <span class="icon-cameraadd"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgList: []
      }
    },
    methods: {
      uploadImg(e) {
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          this.imgList.push(e.target.result)
        }
      }
    }
  }
</script>

<style lang="scss" module>
  .topsolid{
    display: block;
    padding: 0;
  }
  .upload {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    margin-right: 20px;
    position: relative;
    >div{
      width: 36px;
      height: 36px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-top: 3px;
      span{
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
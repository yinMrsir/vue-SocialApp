<template>
  <div>
    <div :class="$style.hx"></div>
    <div :class="$style.footer">
      <ul>
        <li v-for="item in $router.options.routes[0].children" :key="item.url" :hidden="!item.alwaysShow"
            :class="$route.name === item.name ? $style.active : ''">
          <router-link :to="{name: item.name}">
            <img :src="$route.name === item.name ? item.iconActive : item.icon">
            {{item.nameText}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" module>
  @import "../../assets/css/element.scss";
  .hx{
    height: 100px;
  }
  .footer {
    width: 750px;
    height: 100px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(229, 229, 229, 1);
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    ul {
      @include list(row);
      li {
        flex: 1;
        &.active {
          a {
            color: #FF4C62;
          }
        }
        a {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding-top: 20px;
          height: 100px;
          text-decoration: none;
          display: block;
          text-align: center;
          color: #999;
          img {
            width: 34px;
            height: 34px;
            display: block;
            margin: 0 auto 10px;
          }
        }
      }
    }
  }
</style>
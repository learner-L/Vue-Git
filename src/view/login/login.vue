<template>
  <div class="login-panel">
    <div class="banner-panel">
      <a href="http://new.weijuju.com/" class="href-img"></a>
    </div>
    <div class="tab-panel">
      <ul class="tab-item">
        <router-link tag="li" to="/login/enter" replace>登录</router-link>
        <router-link tag="li" to="/login/sign" replace>注册<img class="new-icon" src="http://res.xcx.weijuju.com//image/page/login/05.png" alt=""></router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        classTab: ''
      }
    },
    methods:{
      handleTab(type) {
        if (type=='sign') {
          this.$router.replace("/login/sign");
        }else {
          this.$router.replace("/login/enter");
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-panel {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;

    .banner-panel {
      flex: 2;
      position: relative;
      background: url("http://res.xcx.weijuju.com//image/page/login/leftBg.jpg?v=3") no-repeat center;
      -webkit-background-size: 100%;
      background-size: 100% 100%;

      .href-img {
        position: absolute;
        width: 259px;
        height: 62px;
        top: 5%;
        left: 3%;
        background: url("http://res.xcx.weijuju.com/image/page/login/logo.png") no-repeat center;
      }
    }

    .tab-panel {
      flex: 1;
      ul {
        width: 100%;
        height: 65px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      li {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 65px;
        background: #eaeaea;
        list-style: none;
        cursor: pointer;
        .new-icon{
          transform: scale(0.92) translate(0px,-6px);
        }
      }
      li.router-link-active{
        background: #fff;
      }
    }
  }
</style>

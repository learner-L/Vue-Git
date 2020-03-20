<template>
  <div class="enter-panel">
    我是登录块
    <el-button type="primary" @click="handleEnter">登录</el-button>
    <!--<div class="enter-header">-->
      <!--账号密码登录-->
    <!--</div>-->
    <!--<div class="enter-body">-->
      <!--<form name="enter-form">-->
        <!--<input type="text" placeholder="请输入登录账号">-->
        <!--<input type="password" placeholder="请输入登录密码">-->
      <!--</form>-->
      <!--<div>-->
        <!--<label for="remember"><input type="checkbox" id="remember">记住密码</label>-->
        <!--<a href="javascript:;">忘记密码>></a>-->
      <!--</div>-->
      <!--<button class="login-btn">登录</button>-->
    <!--</div>-->
    <!--<div class="enter-footer">-->
      <!--<ul>-->
        <!--<li>返回首页</li>-->
        <!--<li>咨询客服</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "enter",
    methods:{
      handleEnter() {
        this.$router.push('/board');
      }
    }
  }
</script>

<style scoped lang="scss">

</style>

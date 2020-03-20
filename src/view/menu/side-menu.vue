<template>
  <div class="menu-panel">
    <!-- 左边菜单栏 -->
    <el-tabs tab-position="left">
      <el-tab-pane v-if="item.meta.title" v-for="(item,index) in menuList" :label="item.meta.title" :key="index">
        <div class="menu-body">
          <ul class="sub-menu" v-if="item.children[0].meta.title">
            <li v-for="(subItem,idx) in item.children" :key="idx">{{subItem.meta.title}}</li>
          </ul>
          <router-view class="router-panel"></router-view>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-footer></el-footer>
  </div>
</template>

<script>
  export default {
    name: "side-menu",
    data() {
      return {
        menuList: [],
      };
    },
    mounted() {
      this.menuList = this.$router.options.routes;
      console.log(this.menuList);
    }
  }
</script>

<style lang="scss">
  .menu-panel {
    height: 100%;
    .el-tabs.el-tabs--left {
      padding-top: 20px;
      height: 100%;
    }
    .el-tabs__item {
      font-size: 16px;
      text-align: center !important;
    }
    .menu-body {
      width: 100%;
      height: 100%;
      display: flex;
      ul.sub-menu {
        width: 120px;
        flex: none;
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        li{
          cursor: pointer;
          font-size: 14px;
          height: 50px;
        }
      }
      .router-panel {
        flex: 1;
        background: #f2f2f2;
      }
    }
  }
</style>

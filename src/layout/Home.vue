<template>
  <div>
    <!-- <van-nav-bar
      class="nav-bar"
      title="首页"
      right-text="登录"
      :fixed="true"
      :border="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    /> -->
    

    <van-tabbar class="tab-bar" v-model="active" active-color="#fff" inactive-color="#000">
      <van-tabbar-item icon="home-o">
        <router-link to="/index">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="apps-o">
        <router-link to="/categroy">分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o">
        <router-link to="/cart">购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="manager-o">
        <router-link to="/profile">个人中心</router-link>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
    }
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style lang="less">
.nav-bar {
  background-color: rgb(120, 209, 245);
}
.tab-bar{
  background-color: rgb(120, 209, 245);
}
.main {
  width: 100%;
  height: 900px;
  background-color: rgb(216, 216, 216);
}
</style>
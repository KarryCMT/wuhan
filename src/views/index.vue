<template>
  <div>
    <van-search
      class="search"
      v-model="value"
      shape="round"
      background="rgb(120, 209, 245)"
      placeholder="请输入搜索商品"
      input-align="center"
    />
    <van-swipe class="swiper" :autoplay="3000" :height="200" touchable>
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item.img" />
      </van-swipe-item>
    </van-swipe>
    <van-divider
      :style="{ color: 'rgb(120,209,245)', borderColor: '#1989fa', padding: '0 13px' }"
    >热门手机品牌</van-divider>
    <van-grid class="grid-item" :border="true" :column-num="5">
      <van-grid-item class="grid-item-item" v-for="(item,index) in imgItem" :key="index">
        <van-image :src="item.img" />
        <span>{{item.name}}</span>
      </van-grid-item>
    </van-grid>
    <van-divider
      :style="{ color: 'rgb(120,209,245)', borderColor: '#1989fa', padding: '0 13px' }"
    >热门商品</van-divider>


    <div style="height:900px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      value: "",
      images: [
        {
          img: "http://img63.ddimg.cn/2020/1/22/2020012216380173570.jpg"
        },
        {
          img: "http://img63.ddimg.cn/2020/1/22/2020012216380173570.jpg"
        },
        {
          img: "http://img63.ddimg.cn/2020/1/31/202001312045228275.jpg"
        },
        {
          img: "http://img63.ddimg.cn/2020/1/21/2020012116364072485.jpg"
        },
        {
          img: "http://img60.ddimg.cn/2020/1/31/2020013120375474377.jpg"
        },
        {
          img: "http://img62.ddimg.cn/2020/1/22/2020012216392490335.jpg"
        },
        {
          img: "http://img60.ddimg.cn/2020/1/31/202001312039395993.jpg"
        },
        {
          img: "http://img63.ddimg.cn/2020/1/22/2020012216380173570.jpg"
        },
        {
          img: "http://img60.ddimg.cn/2020/1/22/2020012216390676097.jpg"
        }
      ],
      imgItem: [
        {
          name: "华为",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1Z.mzyMmTBuNjy1XbXXaMrVXa"
        },
        {
          name: "OPPO",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1UWloLzTpK1RjSZKPXXa3UpXa"
        },
        {
          name: "荣耀",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1gR9vsyrpK1RjSZFhXXXSdXXa"
        },
        {
          name: "vivo",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1QkxTCXzqK1RjSZFCXXbbxVXa"
        },
        {
          name: "小米",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1wh2sj.z1gK0jSZLewu29kVXa.png"
        },
        {
          name: "三星",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg"
        },
        {
          name: "魅族",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1vBzdJFXXXXaPXpXXSutbFXXX.jpg"
        },
        {
          name: "诺基亚",
          img:
            "https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1sfXkSVXXXXaWapXXXXXXXXXX"
        },
        {
          name:"联想",
          img:"https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1QGlkSVXXXXcLXpXXXXXXXXXX"
        },
        {
          name:"微软",
          img:"https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1BMiBKXXXXXXXXFXXSutbFXXX.jpg"
        }
      ],
      advert: {
        foot: {},
        top: {}
      }
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    async list() {
      let res = await this.$api.index();
      if (res) {
        console.log(res);
        this.data = res.list;
        // console.log(this.list);

        this.advert = res.advert;
        // console.log(this.advert);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.search {
  position: relative;
}
.grid-item {
    background-color: #ccc;
  .grid-item-item{
    background-color: #ccc;
  }
  span {
    font-family: Microsoft Yahei, Helvetica, Arial;
    color: #323232;
    font-weight: bold;
    font-size: 0.2rem;
  }
}
.swiper {
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
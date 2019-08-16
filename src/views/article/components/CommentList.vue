<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell
      v-for="item in list"
      :key="item"
      :title="'作者的名字'"
    >
      <!-- 头像 -->
      <div slot="icon">
        <img class="avatar" src="http://toutiao.meiduo.site/FkDgf-9AIj_0xLKeuo2HjmbcoGaH" alt="">
      </div>
      <!-- 右边的按钮 -->
      <div slot="default">
        <van-button type="default" icon="star-o" size="mini">赞</van-button>
      </div>
      <!-- 评论内容 -->
      <div slot="label">
        <p>评论内容</p>
        <span>时间</span> &nbsp; <span>回复 0</span>
      </div>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
}
</style>
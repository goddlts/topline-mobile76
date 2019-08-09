<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      fixed
      title="黑马头条"
    />
    <!-- 下拉加载最新数据 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 频道列表 -->
      <van-tabs>
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          <!-- 文章列表，不同的频道有不同的文章列表 -->
          <!-- 当list没有到达页面底部的时候，会触发load事件，并且把loading设置为true -->
          <!-- loading 为true 会显示正在加载... ，当数据加载完毕应该把loading设置为false -->
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="item in list"
              :key="item"
              :title="item"
            />
          </van-list>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // list，文章列表的数据
      list: [],
      loading: false,
      finished: false,
      // 下拉更新组件的
      isLoading: false
    };
  },

  methods: {
    // list组件
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
    },
    // 下拉加载更多组件
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabs {
  margin-bottom: 100px;
  margin-top: 92px;
}
// 在scoped 中设置的样式，如果元素是动态生成的，不起作用
// 子组件
// 深度作用选择器  /deep/
// .van-tabs /deep/ .van-tabs__content {
//   margin-top: 300px;
// }
</style>

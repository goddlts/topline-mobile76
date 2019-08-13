<template>
  <van-popup
    :value="value"
    @input="$emit('input', $event)"
    position="bottom"
    :style="{ height: '90%' }"
  >
    <!-- 我的频道 -->
    <div class="channel">
      <div class="channel-head">
        <div>
          <span class="title">我的频道</span>
          <span class="desc">点击进入频道</span>
        </div>
        <div>
          <van-button
            type="danger"
            plain
            size="mini"
            v-show="!showClose"
            @click="showClose = true"
          >编辑</van-button>

          <van-button
            type="danger"
            plain
            size="mini"
            v-show="showClose"
            @click="showClose = false"
          >完成</van-button>
        </div>
      </div>
      <!-- 我的频道列表 -->
      <van-grid class="channel-content" :gutter="10" clickable>
        <van-grid-item
          @click="handleMy(index)"
          v-for="(item, index) in channels"
          :key="item.id">
          <span class="text" :class="{ active: index === activeIndex && !showClose }">{{ item.name }}</span>
          <van-icon class="close-icon" name="close" v-show="showClose && index !== 0" />
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 频道推荐 -->
    <div class="channel">
      <div class="channel-head">
        <div>
          <span class="title">频道推荐</span>
          <span class="desc">点击添加频道</span>
        </div>
      </div>
      <!-- 推荐频道列表 -->
      <van-grid class="channel-content" :gutter="10" clickable>
        <van-grid-item
          v-for="item in recommendChannels"
          :key="item.id">
          <div class="info">
            <span class="text">{{ item.name }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </van-popup>
</template>

<script>
import { getAllChannels } from '@/api/channel'
export default {
  name: 'HomeChannel',
  props: ['value', 'channels', 'activeIndex'],
  computed: {
    recommendChannels () {
      // 我的频道的所有id
      const ids = this.channels.map((item) => {
        return item.id
      })

      return this.allChannels.filter((item) => {
        return !ids.includes(item.id)
      })
    }
  },
  data () {
    return {
      showClose: false,
      // 存储所有的频道列表
      allChannels: []
    }
  },
  created () {
    // 加载所有的频道列表
    this.loadAllChannels()
  },
  methods: {
    // 加载所有频道
    async loadAllChannels () {
      try {
        const data = await getAllChannels()
        this.allChannels = data.channels
      } catch (err) {
        console.log(err)
      }
    },
    // 点击我的频道中的item
    handleMy (index) {
      // 非编辑模式，隐藏对话框，并且在home中激活点击的频道
      if (!this.showClose) {
        // 通知home组件，隐藏对话框，激活对应索引的频道
        this.$emit('handleMy', index)
        return
      } 

      // 编辑模式
      this.channels.splice(index, 1)
      // 判断是否登录
      if (this.$store.state.user) {
        // 发送请求
        return
      }
      // 没有登录，存到本地存储
      window.localStorage.setItem('channels', JSON.stringify(this.channels))
    }
  }
}
</script>

<style lang="less" scoped>
.channel {
  .channel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .title {
      font-size: 30px;
      margin-right: 5px;
    }
    .desc {
      font-size: 12px;
    }
  }
  .channel-content {
    .text {
      font-size: 16px;
    }
    .active {
      color: red;
    }
    .close-icon {
      font-size: 20px;
      position: absolute;
      top: -5px;
      right: -5px;
      z-index: 999;
      background-color: #fff;
    }
    .info {
      display: flex;
      align-items: center;
    }
  }
}
</style>

<template>
  <div class="add-comment">
    <div class="input-wrap">
      <input v-model="content" type="text" placeholder="请输入评论内容">
    </div>
    <div class="more-wrap">
      <van-icon
        v-if="artId"
        name="star-o"></van-icon>
      <van-button
        @click="handleSend"
        :disabled="content.length === 0"
        size="small">发布</van-button>
    </div>
  </div>
</template>

<script>
import { sendComment } from '@/api/comment'
export default {
  name: 'SendComment',
  // id 文章的id 或者 评论的id
  // artId，如果id是文章的id，artId可以为空
  // 如果id是评论的id，此时必须设置artId为文章的id
  props: ['id', 'artId'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    // 点击按钮发布评论
    async handleSend () {
      try {
        const data = await sendComment({
          target: this.id,
          content: this.content,
          artId: this.artId
        })
        // 如果想把最新的评论显示到评论列表中
        // 需要使用兄弟组件传值 SendComment中的评论对象传递给 CommentList中的comments数组
        // console.log(data)
        // 新发布的评论对象
        // data.new_obj
        this.$toast.success('发布成功')
      } catch (err) {
        this.$toast.fail('发表评论失败' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.add-comment {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-top: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .input-wrap {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    width: 50%;
    input {
      border: none;
      color: #999;
      font-size: 30px;
    }
  }
  .more-wrap {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>

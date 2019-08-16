<template>
  <div class="add-comment">
    <div class="input-wrap">
      <input v-model="content" type="text" placeholder="请输入评论内容">
    </div>
    <div class="more-wrap">
      <van-icon
        name="star-o"></van-icon>
      <van-button
        :disabled="content.length === 0"
        size="small">发布</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendComment',
  data () {
    return {
      content: ''
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

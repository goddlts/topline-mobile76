import request from '@/utils/request'

// 获取评论数据（文章、评论）
export const getComments = ({
  isArticle,
  // 源id，文章id或评论id
  source,
  // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
  offset,
  // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
  limit = 10
}) => {
  return request.get('/app/v1_0/comments', {
    params: {
      // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
      type: isArticle ? 'a' : 'c',
      source,
      offset,
      limit
    }
  })
}

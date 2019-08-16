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

// 发布评论（文章，评论）
export const sendComment = ({
  // 评论的目标，文章的id，评论的id
  target,
  content,
  // 如果给文章评论，不需要设置
  // 如果给评论回复，必须设置成文章的id
  artId
}) => {
  return request.post('/app/v1_0/comments', {
    target,
    content,
    art_id: artId
  })
}

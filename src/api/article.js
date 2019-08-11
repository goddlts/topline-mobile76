import request from '@/utils/request'

/**
 * 获取文章数据
 */
export const getArticles = ({
  channelId,
  timestamp,
  withTop = 1
}) => {
  return request.get('/app/v1_1/articles', {
    params: {
      channel_id: channelId,
      timestamp: timestamp,
      with_top: withTop
    }
  })

  
}

/**
 * 不喜欢文章
 * @param {*} 文章的id 
 */
export const dislikeArticle = (id) => {
  return request.post('/app/v1_0/article/dislikes', {
    target: id
  })
}

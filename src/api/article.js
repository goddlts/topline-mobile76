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

/**
 * 举报文章
 * @param {} param0 
 */
export const reportArticle = ({
  // 举报文章的id
  id,
  // 举报类型： 0-其他问题，1-标题夸张，2-低俗色情，3-错别字多，4-旧闻重复，5-广告软文，6-内容不实，7-涉嫌违法犯罪，8-侵权'	
  type
}) => {
  return request.post('/app/v1_0/article/reports', {
    target: id,
    type: type
  })
}

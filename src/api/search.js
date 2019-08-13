import request from '@/utils/request'

/**
 * 获取搜索建议的内容
 * @param {*} q 文本框输入的前缀
 */
export const getSuggestion = (q) => {
  return request.get('/app/v1_0/suggestion', {
    params: {
      q
    }
  })
}

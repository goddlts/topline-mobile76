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

/**
 * 获取搜索结果
 * @param {*} param0 
 */
export const getSearchResults = ({
  page,
  perPage,
  q
}) => {
  return request.get('/app/v1_0/search', {
    params: {
      page: page,
      per_page: perPage,
      q: q
    }
  })
}

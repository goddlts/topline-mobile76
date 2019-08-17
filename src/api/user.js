import request from '@/utils/request'

// login(user)
// var { mobile, code } = user

export const login = ({
  mobile,
  code
}) => {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}

/**
 * 拉黑用户
 * @param {*} 作者的id
 */
export const blackUserList = (id) => {
  return request.post('/app/v1_0/user/blacklists', {
    target: id
  })
}

/**
 * 取消关注用户
 * @param {*} 用户的id
 */
export const unFollowUser = (id) => {
  return request.delete(`/app/v1_0/user/followings/${id}`)
}

/**
 * 关注用户
 * @param {*} 用户的id
 */
export const followUser = (id) => {
  return request.post('/app/v1_0/user/followings', {
    target: id
  })
}

// 获取登录用户的信息
export const getUserInfo = () => {
  return request.get('/app/v1_0/user')
}

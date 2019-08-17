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

// 获取登录用户的资料
export const getUserProfile = ()=> {
  return request.get('/app/v1_0/user/profile')
}

// 上传用户头像(身份证)
export const uploadPhoto = (name, file) => {
  // xhr.send(formData)
  // Content-Type	:multipart/form-data
  // 当上传文件的时候需要使用formdata，并且请求头中的Content-Type要设置为multipart/form-data
  // 不需要手工来做，因为当xhr.send(formData)的时候，会自动把Content-Type设置为multipart/form-data
  const formData = new FormData()
  formData.append(name, file)
  return request.patch('/app/v1_0/user/photo', formData)
}

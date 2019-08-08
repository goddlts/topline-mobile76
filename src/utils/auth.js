// 把登录信息存储到本地存储（读和删除）

export const setUser = (data) => {
  window.localStorage.setItem('user', JSON.stringify(data))
}

export const getUser = () => {
  return  JSON.parse(window.localStorage.getItem('user'))
}

export const removeUser = () => {
  window.localStorage.removeItem('user')
}

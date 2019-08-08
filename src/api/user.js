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

// 云函数入口文件
const { login } = require('./fn/login')
const { getHistory } = require('./fn/getHistory')
const { renew } = require('./fn/renew')
const { mobileLogin } = require('./fn/mobile-login')

const url = 'http://opac.hynu.cn:443/opac'

// 云函数入口函数
exports.main = async (e, context) => {
  const { func, data } = e
  let res
  console.log(data)
  switch (func) {
    case 'login':
      res = await login(data, url)
      break
    // 查询历史借阅
    case 'getHistory':
      res = await getHistory(data, url)
      break
    // 先获取移动端图书馆的sessionid
    case 'mobilelogin':
      const resMobile = await mobileLogin(data, url)
    // 续借图书
    case 'renew':
      data.Cookie = resMobile.mobileLibSid
      res = await renew(data, url)
      // 将获取的移动端sid返回，以便多次续借
      res.mobileLibSid = resMobile.mobileLibSid
      break

    default:
      break
  }
  return {
    data: res
  }
}

import Taro from '@tarojs/taro'
import { navigate, noicon } from './taroutils'
import { get as getGlobalData } from '@utils/global_data.js'

const username = Taro.getStorageSync('username')
const txt = username ? '登录状态已过期' : '请先绑定教务处'

// @name：云函数名称
// @data：云函数接收的数据
// @notoast：保持静默，不弹出提示信息
// 返回结果状态码：
// 200：成功
// 201：充值成功
// 202：已登录教务处；选课或退选操作成功
// 203：图书馆续借成功
// 204：获取单科成绩详情
// 400：校园卡错误/图书馆信息错误
// 401：登录状态已过期
// 404：操作异常（未找到响应功能或页面），显示返回的 msg
// 600：云函数查询到的数据为空
// 601：图书馆学号或密码错误/出现异常
// 602：图书馆登录状态过期，正在重新登录
const ajax = (name, data = {}, notoast) =>
  new Promise((resolve, reject) => {
    if (!notoast) {
      Taro.showLoading({
        title: '稍等一下~',
        mask: true
      })
    }
    const sendData = data
    if (name == 'base' && data.func != 'login' && data.func != 'reset') {
      sendData.data.username =
        getGlobalData('username') || Taro.getStorageSync('username')
    }
    // console.log(sendData)
    Taro.cloud
      .callFunction({
        name,
        data: sendData
      })
      .then(res => {
        Taro.hideLoading()
        const { data } = res.result
        let { code, msg } = data
        switch (code) {
          case 200:
            msg
              ? noicon(msg)
              : !notoast &&
                Taro.showToast({
                  title: '获取成功'
                })
          case 201:
          case 202:
          case 203:
          case 204:
            resolve(data)
            break
          // 登录状态已过期，跳转至登录页
          case 401:
            navigate(txt, '/pages/login/login')
            reject(data)
            break
          case 400:
          case 404:
            // if (msg == '签名验证失败') {
            //   msg = '请输入查询密码，而非交易密码'
            // }
            noicon(msg)
          case 600:
          case 601:
          case 602:
            reject(data)
            break

          default:
            msg ? noicon(msg) : noicon('获取成功')
            resolve(data)
            break
        }
      })
      .catch(err => {
        Taro.hideLoading()
        noicon('请求超时！')
        console.error(err)
        reject(err)
      })
  })

export default ajax

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import ajax from '@utils/ajax'
import { set as setGlobalData } from '@utils/global_data.js'
import Logo from '@components/logo'
import './electives.scss'

export default class Electives extends Component {
  config = {
    navigationBarBackgroundColor: '#f2a379',
    navigationBarTitleText: '选修课',
    navigationBarTextStyle: 'white'
  }

  state = {
    stageObj: {}
  }
  // 进入选课
  enter = () => {
    setGlobalData('query', this.state.stageObj.queryDetail)
    Taro.navigateTo({
      url: `./select`
    })
  }
  // 获取选修课阶段入口及信息
  getElectives = () => {
    const sessionid = Taro.getStorageSync('sid')
    const username = Taro.getStorageSync('username')
    const data = {
      func: 'onlySid',
      data: {
        sessionid,
        spider: 'getElective',
        username
      }
    }
    ajax('base', data).then(res =>
      this.setState({ stageObj: res.enter_info[0] })
    )
  }

  componentWillMount() {
    this.getElectives()
  }
  onShareAppMessage() {
    return {
      title: SLOGAN,
      path: PATH
    }
  }

  render() {
    const { term, stage, start, end } = this.state.stageObj

    return (
      <View className='electives'>
        <AtCard title={'学年学期：' + term}>
          <View>选课阶段：{stage}</View>
          <View>开始时间：{start}</View>
          <View>结束时间：{end}</View>
          {end && <AtButton onClick={this.enter}>进入选课</AtButton>}
        </AtCard>
      </View>
    )
  }
}

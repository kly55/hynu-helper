import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import Col from '@components/taro-comp/col'
import Row from '@components/taro-comp/row'
import ajax from '@utils/ajax'
import { get as getGlobalData } from '@utils/global_data.js'
import './design.scss'

export default class Design extends Component {
  config = {
    navigationBarBackgroundColor: '#a5e9db',
    navigationBarTitleText: '毕业设计',
    navigationBarTextStyle: 'white'
  }

  state = {
    designRes: []
  }
  pageNum = 1

  onReachBottom() {
    this.getDesign()
  }
  // 获取毕设课题列表
  getDesign = () => {
    const sessionid = getGlobalData('sid')
    const data = {
      func: 'getDesign',
      data: {
        sessionid,
        pageNum: this.pageNum
      }
    }
    ajax('base', data).then(res => {
      this.setState({
        designRes: this.state.designRes.concat(res.design)
      })
      this.pageNum++
    })
  }

  componentWillMount() {
    this.getDesign()
  }

  onShareAppMessage() {
    return {
      title: SLOGAN,
      path: PATH
    }
  }

  render() {
    return (
      <View>
        {this.state.designRes.length &&
          this.state.designRes.map(item => (
            <AtCard title={item.name} className='mt' key={item.name}>
              <View>指导教师：{item.teacher}</View>
              <Row>
                <Col>限选人数：{item.limit}</Col>
                <Col>已选人数：{item.selected}</Col>
              </Row>
            </AtCard>
          ))}
      </View>
    )
  }
}

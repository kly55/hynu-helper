import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ajax from '@utils/ajax'
import Item from '@components/treasure/electives'
import { get as getGlobalData } from '@utils/global_data.js'
import './select.scss'

export default class Select extends Component {
  config = {
    navigationBarBackgroundColor: '#f2a379',
    navigationBarTitleText: '选修课程列表',
    navigationBarTextStyle: 'white'
  }

  state = {
    xxk_arr: [],
    selectedArr: []
  }
  // 可选选修课和已选选修课列表
  selectList = notoast => {
    console.log(Taro.getCurrentPages())
    const preData = Taro.getCurrentPages()[1].$component.getData()
    let queryDetail
    if (getGlobalData('query')) {
      queryDetail = getGlobalData('query')
        .replace('toXk', 'toFindxskxkclb')
        .replace('xnxq', 'xnxq01id')
    }

    const data = {
      func: 'easyQuery',
      data: {
        sessionid: getGlobalData('sid'),
        queryDetail,
        spider: 'selectElective'
      }
    }
    ajax('base', data, notoast).then(({ xxk_arr }) => {
      ajax('base', preData).then(res_selected => {
        const { selected: selectedArr } = res_selected
        this.setState({ xxk_arr, selectedArr })
      })
    })
  }
  // 显示选修课详情
  showBottom = (item, i) => {
    const { xxk_arr } = this.state
    xxk_arr[i].bottomShow = !item.bottomShow
    this.setState({ xxk_arr })
  }
  /** 设置已选中选修课为空 */
  setSelectedEmpty = () => {
    this.setState({ selectedArr: [] })
  }

  componentWillMount() {
    this.selectList()
  }

  onShareAppMessage() {
    return {
      title: SLOGAN,
      path: PATH
    }
  }

  render() {
    const { xxk_arr, selectedArr } = this.state

    return (
      <View>
        <View className='list'>已选中的选修课</View>
        {selectedArr.length ? (
          <Item
            list={selectedArr}
            selectList={this.selectList}
            setSelectedEmpty={this.setSelectedEmpty}
          />
        ) : (
          <View style={{ marginLeft: '15px' }}>暂无</View>
        )}

        <View className='list'>
          选修课列表
          <View className='tip fz28 c6'>
            注意：已选中的选修课不会出现在下方
          </View>
          <View className='tip fz28 c6'>此列表按已选中人数从多到少排列</View>
        </View>
        <Item
          list={xxk_arr}
          selected={selectedArr.length ? true : false}
          showBottom={this.showBottom}
          selectList={this.selectList}
        />
      </View>
    )
  }
}

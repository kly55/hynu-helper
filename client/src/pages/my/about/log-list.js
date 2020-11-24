const logList = [
  // {
  //   date: '2020年11月11日',
  //   version: 'V2.0.0',
  //   content: `校园卡增加《易校园》账号绑定，增加电费/水费充值功能。`
  // },
  {
    date: '2020年11月25日',
    version: 'V1.9.1',
    content: `获取缓存崩溃的bug修复。`
  },
  {
    date: '2020年11月22日',
    version: 'V1.9.0',
    content: `考试安排功能完善；所有弹框增加关闭按钮。`
  },
  {
    date: '2020年11月12日',
    version: 'V1.8.15',
    content: `选修课功能优化；成绩数据没有缓存的bug修复。`
  },
  {
    date: '2020年11月11日',
    version: 'V1.8.14',
    content: `部分文案及细节优化；南岳学院教务处登录失败的问题修复。`
  },
  {
    date: '2020年11月2日',
    version: 'V1.8.13',
    content: `选修课增加刷新功能；教务处验证码改为 3 秒内只可获取一次。`
  },
  {
    date: '2020年10月31日',
    version: 'V1.8.12',
    content: `选修课功能细节优化。`
  },
  {
    date: '2020年10月30日',
    version: 'V1.8.11',
    content: `选修课功能优化。`
  },
  {
    date: '2020年10月19日',
    version: 'V1.8.10',
    content: `校园卡部分文案修改，获取虚拟卡二维码失败时也调整亮度的bug修复。`
  },
  {
    date: '2020年10月17日',
    version: 'V1.8.9',
    content: `部分细节及动画优化；校园卡部分bug修复，增加通过验证姓名绑定。`
  },
  {
    date: '2020年10月12日',
    version: 'V1.8.8',
    content: `图书馆UI优化；添加课程UI优化；所有登录页错误改为弹框提示。`
  },
  {
    date: '2020年10月9日',
    version: 'V1.8.7',
    content: `部分页面UI优化。`
  },
  {
    date: '2020年9月28日',
    version: 'V1.8.6',
    content: `修复没有期末成绩时不显示学分的bug；部分请求的loading效果隐藏；图书馆出现异常的提示更友好。`
  },
  {
    date: '2020年9月25日',
    version: 'V1.8.5',
    content: `细节及UI优化；禁止多次发起相同的请求。`
  },
  {
    date: '2020年9月23日',
    version: 'V1.8.4',
    content: `校园卡账单优化，涵盖大部分账单图标：充值、电费、超市、医院、图书馆、水果店、面店、烘焙、汉堡、豆浆奶茶、包子等；增加部分动画特效。`
  },
  {
    date: '2020年9月22日',
    version: 'V1.8.3',
    content: `对接研究生校园卡功能及一堆bug修复。`
  },
  {
    date: '2020年9月18日',
    version: 'V1.8.2',
    content: `校园卡虚拟卡功能优化；课程表日历和设置中不一致的bug修复。`
  },
  {
    date: '2020年9月9日',
    version: 'V1.8.1',
    content: `校园卡自动充值bug修复，增加虚拟卡功能，若遗忘密码，建议找相关老师进行重置；部分页面没有数据的样式统一显示。`
  },
  {
    date: '2020年9月6日',
    version: 'V1.8.0',
    content: `学期算法bug修复，获取最新课程功能优化；校园卡增加自动充值功能，账单页增加没有数据的提示；修复部分已知bug。`
  },
  {
    date: '2020年8月14日',
    version: 'V1.7.6',
    content: `每学期总学分算法bug修复。`
  },
  {
    date: '2020年8月12日',
    version: 'V1.7.5',
    content: `成绩页单科成绩详情获取简化，增加查看每学期的总学分。`
  },
  {
    date: '2020年8月9日',
    version: 'V1.7.4',
    content: `图书馆增加续借功能，未到应还时间的显示bug修复；教务处登录页增加查看在线人数。`
  },
  {
    date: '2020年7月20日',
    version: 'V1.7.3',
    content: `下拉刷新账单优化；我的页顶部图片高度调整；部分文案修改。`
  },
  {
    date: '2020年7月18日',
    version: 'V1.7.2',
    content: `我的页顶部图片改为左右滑动；旧版选修课图片预览；宣传语修改；绑定校园卡后显示动画；部分细节优化。`
  },
  {
    date: '2020年7月15日',
    version: 'V1.7.1',
    content: `部分页面颜色（暗黑模式）优化；点击logo会跳转至关于页。`
  },
  {
    date: '2020年7月4日',
    version: 'V1.7.0',
    content: `暗黑模式适配；获取成绩后再进入成绩页的bug修复；找人页搜索框设为自动聚焦；毕设页将会保存数据和滚动位置；校园卡账单数据保存，可下拉刷新，提示更加友好；部分细节优化。`
  },
  {
    date: '2020年6月26日',
    version: 'V1.6.7',
    content: `保存考级成绩；查找页按学号查找时可任意输入；在假期时课表页的bug修复。`
  },
  {
    date: '2020年6月19日',
    version: 'V1.6.6',
    content: `所有密码输入框增加可见按钮（校园卡交易密码未增加），图书馆学号输入框可任意输入。`
  },
  {
    date: '2020年6月12日',
    version: 'V1.6.5',
    content: `课程表页开关设置将会弹出提示；成绩页行距调小，考级成绩排序改为按时间降序。`
  },
  {
    date: '2020年6月6日',
    version: 'V1.6.4',
    content: `百宝箱顺序调整；图书馆添加当前借阅信息，部分bug修复；我的顶部图片bug修复，部分细节优化；校园卡刷新余额功能优化。`
  },
  {
    date: '2020年5月31日',
    version: 'V1.6.3',
    content: `考级页添加没有考级记录的提示；部分文案修改；我的页顶部图片可以点击更换；修复课程表页修改学期第一天后不会滚动日期的bug。`
  },
  {
    date: '2020年5月24日',
    version: 'V1.6.2',
    content: `增加天气图标，图标不再缩放；增加校园卡相关提示；部分细节优化。`
  },
  {
    date: '2020年5月22日',
    version: 'V1.6.1',
    content: `更改天气接口，提示更加准确；校园卡充值前后的提示更加友好，余额变幻速度加快；成绩页添加提示，添加考级成绩查询页；增加图书馆历史借阅过滤功能。`
  },
  {
    date: '2020年5月19日',
    version: 'V1.6.0',
    content: `优化教务处的功能流程；选修课的退选提示优化为弹框提示；关于和更新日志合并为“关于我的衡师”；添加公告功能。`
  },
  {
    date: '2020年5月17日',
    version: 'V1.5.3',
    content: `优化部分读写内存的情况，减少用户的等待；找人页按姓名查找的bug修复。`
  },
  {
    date: '2020年5月15日',
    version: 'V1.5.2',
    content: `因校园卡APP限制，删除校园卡账单的收入显示，同时优化账单的上划加载；找人页bug修复。`
  },
  {
    date: '2020年5月12日',
    version: 'V1.5.1',
    content: `课程表页：设置文字提示更友好，“添加课程”功能的bug修复，“隐藏非本周”课程的bug修复；校园卡金额将动态变化，体验更友好。`
  },
  {
    date: '2020年5月8日',
    version: 'V1.5.0',
    content: `课程表顶部信息置顶，增加“添加课程”的功能；我的页图标优化；百宝箱页顶部将显示添加的考试安排；优化成绩的数据获取、添加选修课缺考的情况；选修课功能重新开放，入口关闭时可查询已选选修课；更新日志页优化。`
  },
  {
    date: '2020年5月2日',
    version: 'V1.4.7',
    content: `课程表/我的/找人页优化；教务处重置密码的提示改为弹框形式。`
  },
  {
    date: '2020年4月20日',
    version: 'V1.4.6',
    content: `校园卡账单优化；修改学期第一天的bug修复；找人页优化。`
  },
  {
    date: '2020年4月16日',
    version: 'V1.4.5',
    content: `课表页获取课程的提示更友好；成绩页可以滑动切换学期；清除缓存后将直接重载小程序；校园卡账单页布局优化；所有表单/输入框可使用软键盘完成按钮。`
  },
  {
    date: '2020年4月11日',
    version: 'V1.4.4',
    content: `课程表页添加颜色；百宝箱页未开放的功能提示更友好；意见反馈改为联系客服形式。`
  },
  {
    date: '2020年4月8日',
    version: 'V1.4.3',
    content: `图书馆页bug修复；校园卡账单页改版；寻课功能改为宿舍报修功能，但尚未开放。`
  },
  {
    date: '2020年4月6日',
    version: 'V1.4.2',
    content: `课程表页可查看其它星期课程，课表滑动时，周指示联动；毕业设计页开放；部分细节优化。`
  },
  {
    date: '2020年4月4日',
    version: 'V1.4.1',
    content: `查成绩页改版，增加查看已修学分；找人页搜索条优化调整；部分bug修复。`
  },
  {
    date: '2020年4月1日',
    version: 'V1.4.0',
    content: `全面对接南岳学院教务处；因微信限制，关闭CET查询功能；修复已登录状态下获取课程失败的bug；修复图书馆登录错误时的bug；部分细节优化。`
  },
  {
    date: '2020年3月30日',
    version: 'V1.3.2',
    content: `课程表页溢出文字隐藏；百宝箱页减少预请求次数。`
  },
  {
    date: '2020年3月30日',
    version: 'V1.3.1',
    content: `修复部分同学获取课程失败的bug；修复课表页设置没有保存的bug/切换学期的bug/课程颜色增加/溢出文字隐藏；切换tab页或隐藏小程序时所有弹框均会关闭；选修课页按钮优化。`
  },
  {
    date: '2020年3月29日',
    version: 'V1.3.0',
    content: `百宝箱页改版；云函数超时时间改为20秒（20秒已为上限，请尽量在网络流畅时使用）；教务处登录页验证码不再自动清空；成绩查询页优化，bug修复。`
  },
  {
    date: '2020年3月28日',
    version: 'V1.2.0',
    content: `部分页面优化；云函数超时时间改为10秒；选修课列表百分比保留整数；分享bug修复，非隐私页面均可转发；百宝箱页功能顺序调整；选修课页选课成功后改为弹窗提示；校园卡登录提示更加友好。`
  },
  {
    date: '2020年3月27日',
    version: 'V1.1.2',
    content: `教务处的报错提示更加友好；我的页细节优化。`
  },
  {
    date: '2020年3月27日',
    version: 'V1.1.0',
    content:
      '修复查看课程详情时图标没显示的bug；调整百宝箱页功能顺序；选修课排序改为已选人数从多到少。'
  }
]

export default logList

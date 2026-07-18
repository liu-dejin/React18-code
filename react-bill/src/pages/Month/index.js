import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useEffect, useMemo, useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DailyBill from './components/DailyBill'

const Month = () => {
  // 按月做数据分组
  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    // return 出去计算后的值
    return _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM'))
  }, [billList])

  // 控制弹窗打开或关闭
  const [dataVisible, setDataVisible] = useState(false)

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(() =>
    dayjs(new Date()).format('YYYY-MM')
  )
  const [currentMonthData, setCurrentMonthData] = useState([])
  const monthRes = useMemo(() => {
    // 支出 收入 结余
    const pay = currentMonthData.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = currentMonthData.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay,
      income,
      total: income + pay
    }
  }, [currentMonthData])

  // 初始化显示当前月统计数据
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    // 边界值控制
    if (monthGroup[nowDate]) setCurrentMonthData(monthGroup[nowDate])
  }, [monthGroup])

  // 确认回调
  const onConfirm = (data) => {
    setDataVisible(false)
    // 其他逻辑
    const formatDate = dayjs(data).format('YYYY-MM')
    setCurrentDate(formatDate)
    setCurrentMonthData(monthGroup[formatDate])
  }
  // 当前月按日分组
  const dayGroup = useMemo(() => {
    // return 出去计算后的值
    const groupData = _.groupBy(currentMonthData, item => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData).sort()
    return {
      keys,
      groupData
    }
  }, [currentMonthData])
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDataVisible(true)}>
            <span className="text">
              {currentDate + ''}月账单
            </span>
            <span className={classNames('arrow', dataVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthRes.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthRes.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthRes.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dataVisible}
            max={new Date()}
            onCancel={() => setDataVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDataVisible(false)}
          />
          {/* 单日列表统计 */}
          {
            dayGroup.keys.map(key => {
              return <DailyBill date={key} billList={dayGroup.groupData[key]} />
            })
          }

        </div>
      </div>
    </div >
  )
}

export default Month
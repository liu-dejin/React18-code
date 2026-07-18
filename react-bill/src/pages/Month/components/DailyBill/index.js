import classNames from 'classnames'
import './index.scss'
import { useMemo, useState } from 'react'
import { billTypeToName } from '@/contants'
import Icon from '@/components/icon'

const DailyBill = ({
  date, billList
}) => {
  const dayRes = useMemo(() => {
    // 支出 收入 结余
    const pay = billList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = billList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay,
      income,
      total: income + pay
    }
  }, [billList])

  // 控制展开收起
  const [visible, setVisible] = useState(true)

  return (
    <div className={classNames('dailyBill', { expand: visible })}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
          <span className={classNames('arrow', { expand: visible })} onClick={() => setVisible(!visible)}></span>
        </div>
        <div className="oneLineOverview">
          <div className="pay">
            <span className="type">支出</span>
            <span className="money">{dayRes.pay.toFixed(2)}</span>
          </div>
          <div className="income">
            <span className="type">收入</span>
            <span className="money">{dayRes.income.toFixed(2)}</span>
          </div>
          <div className="balance">
            <span className="money">{100}</span>
            <span className="type">{dayRes.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {/* 单日列表 */}
      <div className="billList">
        {billList.map(item => {
          return (
            <div className="bill" key={item.id}>
              {/* 图标 */}
              <Icon type={item.useFor} />
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default DailyBill
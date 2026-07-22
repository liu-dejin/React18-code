import { Button, DatePicker, Input, NavBar, Toast } from 'antd-mobile'
import './index.scss'
import classNames from 'classnames'
import { billListData } from '@/contants'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/icon'
import { useState } from 'react'
import { addBillList } from '@/store/modules/billStore'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'

const New = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // 控制收入支出的状态
  const [billType, setBillType] = useState('pay')

  // 控制金额
  const [money, setMoney] = useState(0)
  const moneyChange = (value) => {
    setMoney(value)
  }
  // 账单类型
  const [billUseFor, setBillUseFor] = useState('food')
  // 记账日期
  const [billDate, setBillDate] = useState(new Date())
  // 保存账单
  const saveBill = () => {
    const data = {
      type: billType,
      money: billType === 'pay' ? -money : +money,
      date: billDate,
      useFor: billUseFor
    }
    if (money === 0) {
      Toast.show({
        content: '请输入金额',
        duration: 2000,
      })
      return
    }
    dispatch(addBillList(data))
  }
  const [dateVisible, setDateVisible] = useState(false)
  const onConfirm = (data) => {
    setDateVisible(false)
    setBillDate(data)
  }
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === 'pay' ? 'selected' : '')}
            onClick={() => { setBillType('pay') }}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === 'income' ? 'selected' : '')}
            shape="rounded"
            onClick={() => { setBillType('income') }}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon" />
              <span className="text" onClick={() => setDateVisible(true)}>{dayjs(billDate).format('YYYY-MM-DD')}</span>
              {/* 时间选择器 */}
              <DatePicker
                className="kaDate"
                title="记账日期"
                max={new Date()}
                visible={dateVisible}
                onClose={() => setDateVisible(false)}
                onConfirm={onConfirm}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map(item => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map(item => {
                  return (
                    <div
                      className={classNames(
                        'item',
                        billUseFor === item.type ? 'selected' : ''
                      )}
                      key={item.type}
                      onClick={() => { setBillUseFor(item.type) }}
                    >
                      <div className="icon">
                        <Icon type={item.type} />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={saveBill}>
          保 存
        </Button>
      </div>
    </div >
  )
}

export default New
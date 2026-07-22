// 柱状图组件
// 功能代码都放在这个组件内
// 可变抽成props
import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const BarChart = ({ title, xData }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [100, 200, 300],
          type: 'bar'
        }
      ]
    }

    option && myChart.setOption(option)
  }, [title, xData])
  return <div ref={chartRef} style={{ width: 500, height: 400 }}></div>
};
export default BarChart
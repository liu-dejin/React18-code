import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd'
// 汉化 时间选择器
import locale from 'antd/es/date-picker/locale/zh_CN'
// 导入资源
import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import { useChannel } from '@/hooks/useChannel'
import { useEffect, useState } from 'react'
import { delArticleApi, getArticleListApi } from '@/apis/article'
const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
  const nagvigate = useNavigate()
  const { channelList } = useChannel()
  // 待审核/审核通过
  const status = {
    1: <Tag color="warning">待审核</Tag>,
    2: <Tag color="green">审核通过</Tag>
  }
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 120,
      render: cover => {
        return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 220
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: data => status[data]
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate'
    },
    {
      title: '阅读数',
      dataIndex: 'read_count'
    },
    {
      title: '评论数',
      dataIndex: 'comment_count'
    },
    {
      title: '点赞数',
      dataIndex: 'like_count'
    },
    {
      title: '操作',
      render: data => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => nagvigate(`/publish?id=${data.id}`)} />
            <Popconfirm
              title="确认删除该条文章吗?"
              onConfirm={() => delArticle(data)}
              okText="确认"
              cancelText="取消"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        )
      }
    }
  ]
  // 筛选功能
  // 1.准备参数
  const [reqData, setReqData] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 10
  })

  // 获取文章列表
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    const getArticleList = async () => {
      const res = await getArticleListApi(reqData)
      setArticleList(res.data.results)
      setCount(res.data.total_count)
    }
    getArticleList()
  }, [reqData])
  const [count, setCount] = useState(0)


  // 2.获取当前帅选数据
  const onFinish = (formValue) => {
    console.log(formValue)
    // 表单数据封装到请求参数(不可变方式)
    setReqData({
      ...reqData,
      channel_id: formValue?.channel_id,
      begin_pubdate: formValue.date?.[0]?.format('YYYY-MM-DD') || '',
      end_pubdate: formValue.date?.[1]?.format('YYYY-MM-DD') || '',
      status: formValue?.status,
    })
    // reqData依赖项变化自动重复 执行副作用函数
  }

  const onPageChange = (page) => {
    setReqData({
      ...reqData,
      page
    })
  }
  const delArticle = async (data) => {
    await delArticleApi(data.id)
    // 当前页只剩最后一条且不是第一页 → 回退到上一页
    const newPage = articleList.length === 1 && reqData.page > 1
      ? reqData.page - 1
      : reqData.page
    setReqData({
      ...reqData,
      page: newPage
    })
  }
  return (
    <div>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '文章列表' },
          ]} />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: '' }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={''}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              style={{ width: 120 }}
            >
              {
                channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
              }
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title={`根据筛选条件共查询到 count 条结果：${count}`}>
        <Table rowKey="id" columns={columns} dataSource={articleList} pagination={{
          total: count,
          pageSize: reqData.per_page,
          onChange: onPageChange
        }} />
      </Card>
    </div>
  )
}

export default Article
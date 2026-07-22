import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { createArticleApi, getArticleDetailApi, updateArticleApi, uploadImageApi } from '@/apis/article';
import { useChannel } from '@/hooks/useChannel';

const { Option } = Select

const Publish = () => {
  const [fileList, setFileList] = useState([])
  const { channelList } = useChannel()
  const onFinish = (formValue) => {
    const { title, content, channel_id } = formValue
    // 无图
    if (picType === 0) {
      const reqData = {
        title, content, channel_id,
        cover: { type: 0, images: [] }
      }
      createArticleApi(reqData)
      return
    }
    // 有图 — 校验图片数量
    if (fileList.length !== picType) return message.error('图片数量和类型不匹配')
    const reqData = {
      title,
      content,
      cover: {
        type: picType,
        // 新增/编辑状态的适配
        images: fileList.map(item => {
          if (item.response) {
            return item.response.data.url
          } else {
            return item.url
          }
        })
      },
      channel_id,
    }
    // 新增/编辑
    articleId ? updateArticleApi({ ...reqData, id: articleId }) : createArticleApi(reqData)
  };
  const onUploadChange = (info) => {
    setFileList(info.fileList)
  }
  const customUploadRequest = async (options) => {
    const { file, onSuccess, onError } = options
    try {
      const res = await uploadImageApi(file)
      onSuccess(res, file)
    } catch (err) {
      onError(err)
    }
  }
  const [picType, setPicType] = useState(0)
  const onTypeChange = (e) => {
    setPicType(e.target.value)
  }
  // 回填数据
  const [searchParams] = useSearchParams()
  const articleId = searchParams.get('id')
  // 获取form实例
  const [form] = Form.useForm()
  console.log(articleId)
  useEffect(() => {
    // articleId 变化时（新建/编辑切换）先重置表单和状态
    form.resetFields()
    setFileList([])
    setPicType(0)

    if (!articleId) return
    const getArticleDetail = async () => {
      const res = await getArticleDetailApi(articleId)
      const data = res.data
      const { cover } = data
      form.setFieldsValue({
        ...data,
        type: cover.type,

      })
      setPicType(cover.type)

      // 显示图片
      setFileList(cover.images.map(url => ({
        url,
      })))
    }
    getArticleDetail()
  }, [articleId, form])
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            {
              title: `${articleId ? '编辑' : '发布'}文章`
            },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: picType }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item =>
                // id 用户选择后收集起来提交
                <Option key={item.id} value={item.id}>{item.name}</Option>
              )
              }
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* listType 选择样式  showUploadList 显示上传列表 */}
            {picType > 0 && <Upload
              name='image'
              listType="picture-card"
              showUploadList
              fileList={fileList}
              customRequest={customUploadRequest}
              onChange={onUploadChange}
              maxCount={picType}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <ReactQuill
              theme="snow"
              className='publish-quill'
              placeholder='请输入文章内容'
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
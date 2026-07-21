// 文章页面
import { request } from "@/utils"
// 获取频道列表
export const getChannelsApi = () => {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

// 提交文章表单
export const createArticleApi = (formData) => {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data: formData
  })
}

// 上传封面
export const uploadImageApi = (file) => {
  const formData = new FormData()
  formData.append('image', file)
  return request({
    url: '/upload',
    method: 'POST',
    data: formData
  })
}

// 获取文章列表
export const getArticleListApi = (params) => {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}

// 删除文章
export const delArticleApi = (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE'
  })
}

// 获取文章详情
export const getArticleDetailApi = (id) => {
  return request({
    url: `mp/articles/${id}`,
    method: 'GET'
  })
}

// 更新文章
export const updateArticleApi = (formData) => {
  return request({
    url: `/mp/articles/${formData.id}?draft=false`,
    method: 'PUT',
    data: formData
  })
}
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
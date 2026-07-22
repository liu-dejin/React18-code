import { request } from '@/utils'

/**
 * 登录接口
 * @param {*} formData 
 * @returns 
 */
export const loginApi = (formData) =>
  request(
    {
      url: '/authorizations',
      method: 'POST',
      data: formData
    }
  )
/**
 * 获取个人用户信息
 * @returns 
 */
export const getProfileApi = () =>
  request(
    {
      url: '/user/profile',
      method: 'GET',
    }
  )

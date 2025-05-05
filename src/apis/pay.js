import httpInstance from '@/utils/http'

// 获取支付信息

export const getOrderAPI = async (id) => {
  return httpInstance({
    url: `/member/order/${id}`
  })
}

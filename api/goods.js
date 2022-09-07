import fly from '@/utils/request.js'
export const getSearchGoods = data => fly.get('/goods/search', data)

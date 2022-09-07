import fly from '@/utils/request.js'

export const getBanners = () => fly.get('/home/swiperdata')

export const getNavList = () => {
  return fly.get('/home/catitems')
}

export const getFloordata = () => fly.get('/home/floordata')

import requestNet from './network.js'

export function getMultiData(){
  return requestNet({
    url: 'api-c/banner-anon/findBannerPageV2?tartget=0&page=1&length=10'
  })
}

export function getGoodsData(type,page){
  return requestNet({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}

//请求首页数据
export function getHomeData(){
  return requestNet({
    url: 'api-w/microapp-anon/findHomeData'
  })
}

//请求课程列表（课程试看）
export function getCourseListData(){
  return requestNet({
    url: 'api-w/microapp-anon/findData?page=1&length=9999'
  })
}

//创业干货list
export function getArticleListData() {
  return requestNet({
    url: 'api-w/microapp-anon/findGanhuoData?page=1&length=999'
  })
}

//课程详情界面（获取课程详情）
export function getCourseDetailData(couserId) {
  return requestNet({
    url: 'api-w/microapp-anon/findDataById?courseId='+couserId
  })
}
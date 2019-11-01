import requestNet from './network.js'

//获取openid和session_key
export function getOpenidAndSessionData(code) {
  return requestNet({
    url: 'api-w/microapp-anon/findOpenId?jsCode='+code
  })
}
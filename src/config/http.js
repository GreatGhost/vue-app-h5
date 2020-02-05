const axios =require('axios');
import {Toast,Indicator} from 'mint-ui';
const baseUrl='http://localhost:3000' 
axios.default.timeout=10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 配置全局
// 可以采用 axios.default.timeout=10000;
//自定义实例 const instance =axios.create({ baseURL: 'https://api.example.com'})  // 在实例已创建后修改默认值 instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// 响应拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export function get(url,params){
    return new Promise((resolve,reject)=>{
        url=baseUrl+url
        axios.get(url,{
            params:params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}
export function post(url,params){
    return new Promise((resolve,reject)=>{
        url=baseUrl+url;
        Indicator.open('加载中')
        axios.post(url,params).then(res=>{
            Indicator.close()
            if(res.data.code===200){
                resolve(res)
            }else{
                Toast({
                    message: res.data.msg,
                    position: 'middle',
                    duration: 5000
                  });
            }
        }).catch(err=>{
            reject(err)
        })
    })
}

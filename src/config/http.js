const axios =require('axios');
import { Toast } from 'mint-ui';
axios.default.timeout=10000;
axios.default.baseURL='http://localhost:3000/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 响应拦截器

function get(params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })

}
function post (params={}){
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

module.exports={
    get,
    post
}
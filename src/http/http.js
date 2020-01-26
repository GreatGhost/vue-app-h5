import axios from 'axios'
import {env} from '../config/env'

// axios.defaults.withCredentials=false;
axios.defaults.baseURL=env.debug?'http://192.168.1.110:3000':'https://newapi.xcbwl.cn:4433';
const instance=axios.create({
    timeout: 10000,
    headers: {
     'Content-Type': "application/json;charset=UTF-8"
    } 
})
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        instance.get(url,{
            params:params,          
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>reject(err))
    })
 }


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * 
 * `这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的。
 */

export function post(url,params={}){
    return new Promise((resolve,reject)=>{
        instance.post(url,{
            params:params,
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>reject(err))
    })
 }
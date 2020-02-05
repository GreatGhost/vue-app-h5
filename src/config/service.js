import { get, post } from './http'
export const test=()=>post('/user/test')
export const login=(param)=>post('/user/login',param)
export const sendLoginCode=(param)=>post('/user/sendCode',param)
export const loginByCode=(param)=>post('/user/loginByCode',param)
export const register=(param)=>post('/user/register',param)
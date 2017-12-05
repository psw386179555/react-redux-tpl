/*
* @Author: Administrator
* @Date:   2017-12-05 16:54:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-05 17:41:16
*/
// import { get } from '../get.js'
import { post } from '../post.js'

export function login(data) {
    const result = post('/api/user/login',data)   
    return result;
}

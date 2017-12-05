/*
* @Author: Administrator
* @Date:   2017-12-05 17:07:18
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-05 17:13:24
*/


export function setLocalStorage(key,val){
	let exp = new Date().getTime()+2*24*60*60*1000
	let obj = {
		val:val
		,exp:exp
	}
	localStorage.setItem(key,JSON.stringify(obj))
}

export function getLocalStorage(key){
	let info= localStorage.getItem(key);
    if(info) {
        info = JSON.parse(info);
        if (info.exp > new Date().getTime()) {
            return info.val;
        }
        else{
            this.deleteLocalStorage('token');
        }
    }
    return '';
}

export function deleteLocalStorage(key){
        return localStorage.removeItem(key);
}
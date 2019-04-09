import service from '../util/http'
import qs from 'qs'

export function userRegister(action,form) {
    return service({
        url: '/api',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
            action,
            username:form.name,
            password:form.pass,
            r_userName:form.userName,
            r_password:form.passWord,
            r_confirmPassword:form.confirmPassWord
        }
    })
    // let url= 'http://newsapi.gugujiankong.com/Handler.ashx?action=register'
    // let data ={
    //     userName:'ssss'
    // }
    // let params = qs.stringify(data)
    // return service.post(url,params)
}
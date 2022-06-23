import {create} from "apisauce";

const apiClientNoAuth = (cancelToken) => create({
    baseURL: window.location.hostname === '127.0.0.1'|| window.location.hostname ==='localhost' ? "http://127.0.0.1:5000/api":'', //is this correct?
    cancelToken
})

export default apiClientNoAuth
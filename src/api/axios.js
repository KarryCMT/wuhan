import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = "http://www.api.com/home/"
axios.defaults.timeout = 5000
axios.defaults.headers["Content-Type"] = "application/x-www-from-urlencoded;charset=UTF-8"
axios.interceptors.request.use(config => {
    if (config.method == 'post') {
        if (!config.data) {
            config.data = {};
        }
        config.data = qs.stringify(config.data);
    } else if (config.method == 'get') {
    
    }
        return config;
     }, error => {
            return Promise.reject(error);
});
axios.interceptors.response.use(res => { 
    if (typeof res.data == 'string') {
        alert(res.data);
        return false;
    }

    switch (res.data.ret) {
        case 200:
            return res.data.data;
        case 300:
            break;
        default:
            iview.Message.error(res.data.msg);
            return false;
        }
}, error => { 
    return Promise.reject(error);
});

export default axios;
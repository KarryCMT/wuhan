import axios from './axios'

let api = {
    index: () => { 
            return axios.post('index/index');
    },
    category: {
            treeList: () => { 
                return axios.post('category/treeList');
            },
            parentList: id => { 
                return axios.post('category/parentList',id);
            }
    },
    goods: {
            list: param => { 
                return axios.post('goods/list', param);
            },
            info: id => { 
                return axios.post('goods/info', id);
            }
    },
    common: {
        login: param => {
            return axios.post('common/login', param);
        },
        register: param => {
            return axios.post('common/register', param);
        },
        changePass: param => {
            return axios.post('common/changePass', param);
        },
        changeHeadUrl: url => { 
            return axios.post('common/changeHeadUrl', url);
        },
        loginInfo: () => {
            return axios.post('common/loginInfo');
        },
        out: () => {
            return axios.post('common/out');
        },
        getHeader: () => {
            return axios.post('common/getHeader');
        },
    },
    cart: {
            list: () => { 
                return axios.post('cart/list');
            },
            insert: param => { 
                return axios.post('cart/insert', param);
            },
            changeNum: param => {
                return axios.post('cart/changeNum', param);
            },
            delete: id => {
                return axios.post('cart/insert', id);
            },
            clear: () => {
                return axios.post('cart/insert');
            },
            confirmInfo: param => {
                return axios.post('cart/confirmInfo', param);
            }
    },
	person: {
	        orderList: () => {
	            return axios.post('person/orderList');
	        },
	        goodsList: () => {
	            return axios.post('person/goodsList');
	        },
	    },
    order: {
            list: param => { 
                return axios.post('order/list', param);
            },
            insert: param => { 
                return axios.post('order/insert', param);
            },
            info: id => {
                return axios.post('order/info', id);
            },
            cancel: id => { 
                return axios.post('order/cancel', id);
            },
            delete: id => {
                return axios.post('order/delete', id);
            },
            receipt: id => { 
                return axios.post('order/receipt', id);
            }, 
            pay: id => { 
                return axios.post('order/pay', id);
            },
            comment: param => { 
                return axios.post('order/comment', param);
            },
        },
    contact: {
            list: () => { 
                return axios.post('contact/list');
            },
            insert: param => {
                return axios.post('contact/insert', param);
            },
            info: id => {
                return axios.post('contact/info', id);
            },
            update: param => {
                return axios.post('contact/update', param);
            },
            delete: id => {
                return axios.post('contact/delete', id);
            },
            changeStatus: id => { 
                return axios.post('contact/changeStatus', id);
            },
        }
};

export default {
    install: Vue => { 
        Vue.api = api,
        Vue.prototype.$api = api
    }
}
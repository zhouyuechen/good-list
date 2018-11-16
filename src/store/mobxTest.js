import {
    observable,
    action,
    computed,
    autorun,
    extendObservable,
    decorate
} from 'mobx';

import axios from 'axios';
import * as HR from '@yt/hop-request'



class Store {
    @observable data = {}
    @observable list = []
    @computed get total() {
        return this.list.length;
    }
    @action change() {
        this.list.push(this.list.length);
    }
    @action
    async getData(url,method,data) {
        const result = await HR.request({
            url: url, // hop版本号+api,必须以斜杠结尾
            method: method, // post(默认) 可选get
            data:data       // 请求内容
        })
        
        console.log(result.data);
        return result.data;
    }
    @action
    async getUser() {
        const result = await HR.request({
            url: '1.0.0/ustone.sso.mallbuyInfo/', // hop版本号+api,必须以斜杠结尾
            method: 'get', // post(默认) 可选get
            data: {"source":"pc"}       // 请求内容
        })
        this.data = result;
        console.log(this.data);

    }
    @action 
    getData2(){
        axios({
            method: "get",
            url: '1.0.2/mall.item.searchItemListWithFlashBuyAct.pc/',
            domainType: 'hop',
            data: {"pageNo":1,"pageSize":20,"searchkey":"贝亲","sortType":"3","itemTypes":"","searchSource":"key"}
       });
        
}
}
const mstore = new Store();

export default mstore
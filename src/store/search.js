import { observable, action, toJS,computed,runInAction} from 'mobx';

import * as HR from '@yt/hop-request'
class SearchRes {
    @observable itemData = {}
    @observable list = []
	  @observable pcKeyWord={}
    @computed get total() {
        return this.list.length;
    }
    @action change() {
        this.list.push(this.list.length);
    }
    @action
    async getData(url,method,data,which) {
        const result = await HR.request({
            url: url, // hop版本号+api,必须以斜杠结尾
            method: method, // post(默认) 可选get
            data:data       // 请求内容
        })
				   runInAction(() => {
					this.pcKeyWord=result.data;
					console.log(toJS(this.pcKeyWord));
					});

    }
		  @action
		    async getItems(url,method,data) {
		        const result = await HR.request({
		            url: url, // hop版本号+api,必须以斜杠结尾
		            method: method, // post(默认) 可选get
		            data:data       // 请求内容
		        })
						   runInAction(() => {
							this.itemData=result.data;
							console.log(toJS(this.itemData));
							});
		
		    }
 
        
}
export default new SearchRes()
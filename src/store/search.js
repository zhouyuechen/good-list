import { observable, action, toJS,computed,runInAction,extendObservable ,autorun} from 'mobx';

import * as HR from '@yt/hop-request'
class SearchRes {
    // @observable itemData = {}
    @observable list = []
	  @observable pcKeyWord={}
		@observable keyWord=""
		@observable isSearched=false
    @computed get total() {
        return this.list.length;
    }
    @action changeKeyWord(word) {
        this.pcKeyWord.defaultSearchKey=word
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
		    async getItems(url,method,data,key) {
		        const result = await HR.request({
		            url: url, // hop版本号+api,必须以斜杠结尾
		            method: method, // post(默认) 可选get
		            data:data       // 请求内容
		        })
						   runInAction(() => {
							this.itemData=result.data;
							this.isSearched=true;
							this.keyWord=key;
							});
		
		    }
 
        
}

const bb = new SearchRes();

extendObservable(bb, {
  itemData: {
    brandList: [],
		itemList:[],
		pageNo:0,
		pageSize:0,
		totalCount:0,
		totalPage:0
  }
});
autorun(() => {
  console.log(bb.isSearched);
});
export default bb
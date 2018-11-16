import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { useStrict } from 'mobx';
// import { Provider } from 'mobx-react';
import {toJS} from 'mobx';
import './App.css';
import store from './store/index';
import * as HR from '@yt/hop-request';
import "./style/common";
import "./style/font/icon.less";
import  SearchC from './container/Search/SearchC';
import  SearchCon from './container/SearchCon/SearchCon';
import { observer } from 'mobx-react';
HR.set({
  env: 'pre', // hop环境
  route: (api) => {
      // 举例：hipac.ope.pagemodule.layout.detail
      if (/^hipac\.ope/.test(api)) { // 针对api做环境切换
          return 'yt_ope_test'
      }
  },
  // secretKey: '569cba1ffb1d6e78ddd0205b754417d7',
  appKey: '1300',
  // 失败的回调
 
  onReject: (error) => {
      alert('请求失败');
  },
  // 成功的回调
  onSuccess: (data) => {
      return data;
  }
})
@observer
class App extends Component {
	
  componentDidMount(){
  	console.log(store.SearchRes.isSearched);
		
  };
  render() {
		
    return (
      <div className="App">
        
        <SearchC   />
				<div className="context">
				{ store.SearchRes.isSearched?<SearchCon/>:"搜索点东西吧"}
      </div>
			</div>
    );
  }
}

export default App;

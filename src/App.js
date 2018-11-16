import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { useStrict } from 'mobx';
// import { Provider } from 'mobx-react';
import './App.css';

import * as HR from '@yt/hop-request';
import "./style/common";
import "./style/font/icon.less";
import  SearchC from './container/Search/SearchC'
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
class App extends Component {

	
  render() {
		
    return (
      <div className="App">
        
        <SearchC   />
      </div>
    );
  }
}

export default App;

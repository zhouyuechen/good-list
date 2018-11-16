// 这是容器组件，
import React, {
    Component
} from "react";
import api from '../../api/api';
import Input from "../../common/Input";
import A from "../../common/As";
import { observer } from 'mobx-react';
import '../../style/common/index.js';
import store from '../../store';
import {toJS} from 'mobx';
import Button from 'antd/lib/button';
@observer
class SearchC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:""

        };
        this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
      this.setState({
				keyword:event.target.value
			})
    }
		handleClick(){
			store.SearchRes.getItems(
					api.itemSearch,
					"post",
					{"pageNo":1,"pageSize":20,"searchkey":`${this.state.keyword }`,"sortType":"3","itemTypes":"","searchSource":"key"},
					"itemData"
			);
			
		}
    handleAClick(){}
    componentDidMount(){
			
					store.SearchRes.getData(
					api.pcKeyWord,
					"post",
					{"source":"pc"},
					"pcKeyWord"
					)
				
			
    }
    render() {
			
        return ( < div className="search-row" >
            <img src="//staticonline.hipac.cn/mallpc/login/shouyetoubu.png?v=" alt="adv"/>
            <div className="s-box flexra" >
                <Input 
								
								text = "姓名"
                label = "name"
                type = "text"
                id = "1"
                value = { (store.SearchRes.pcKeyWord.defaultSearchKey)||this.state.keyword}
                handleChange = {
                    this.handleChange
                }  />
                     <button  onClick={this.handleClick}  >搜索</button>

            </div >
							<div className="tip flexrb ">
							
							{ store.SearchRes.pcKeyWord.pcKeyWordList&&toJS(store.SearchRes.pcKeyWord.pcKeyWordList).map((item,i)=>( 
							 <A key={i} 
							 dc={item.isHot?"hot tips":"tips"}
							 href="javasrcipt:void()"
							 text={item.name}
							 onClick={this.handleAClick}
							 ></A>     ))} 

							</div>
							 <Button type="primary">Button</Button>
            </div>
        );
    }
}
export default SearchC;
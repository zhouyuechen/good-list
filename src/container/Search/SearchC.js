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

@observer
class SearchC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:""

        };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
			this.handleKeyUp = this.handleKeyUp.bind(this);
			
    }
    handleChange(event) {
      this.setState({
				keyword:event.target.value
			})
    }
		handleClick(){
			let word="";
			
			if(document.getElementById("input_key").value==""){
				word=store.SearchRes.pcKeyWord.defaultSearchKey.toString();
			}else{
				word=this.state.keyword ;
			}
			console.log(word);
			store.SearchRes.getItems(
					api.itemSearch,
					"post",
					{"pageNo":1,"pageSize":20,"searchkey":`${word}`,"sortType":"3","itemTypes":"","searchSource":"key"},
					word
			);
			
		}
    handleAClick(event){
			
			const word=event.target.innerText;
			store.SearchRes.getItems(
					api.itemSearch,
					"post",
					{"pageNo":1,"pageSize":20,"searchkey":`${word}`,"sortType":"3","itemTypes":"","searchSource":"key"},
					word
			);
			store.SearchRes.changeKeyWord(word)
		}
		handleKeyUp(event){
			if(event.keyCode==13){
				store.SearchRes.getItems(
						api.itemSearch,
						"post",
						{"pageNo":1,"pageSize":20,"searchkey":`${this.state.keyword }`,"sortType":"3","itemTypes":"","searchSource":"key"},
						this.state.keyword
				);
			}
		}
    componentDidMount(){			
			store.SearchRes.getData(
			api.pcKeyWord,
			"post",
			{"source":"pc"}
			);
			 document.getElementById("input_key").addEventListener('keyup', this.handleKeyUp)

    }
    render() {
			
        return ( < div className="search-row" >
            <img src="//staticonline.hipac.cn/mallpc/login/shouyetoubu.png?v=" alt="adv"/>
            <div className="s-box flexra" >
                <Input 
								
								text = "姓名"
                label = "name"
                type = "text"
                id="input_key"
                value = { (store.SearchRes.pcKeyWord.defaultSearchKey)||this.state.keyword}
                handleChange = {
                    this.handleChange
                } 
								 handleEnter={
									 this.handleEnter
								 }
								 />
                     <button  id="search_btn" onClick={this.handleClick}  >搜索</button>

            </div >
							<div className="tip flexrb ">
							
							{ store.SearchRes.pcKeyWord.pcKeyWordList&&toJS(store.SearchRes.pcKeyWord.pcKeyWordList).map((item,i)=>( 
							 <A key={i} 
							 dc={item.isHot?"hot tips":"tips"}
							 href="javasrcipt:void()"
							 text={item.name}
							 handleClick={this.handleAClick}
							 ></A>     ))} 

							</div>
							 
            </div>
        );
    }
}
export default SearchC;
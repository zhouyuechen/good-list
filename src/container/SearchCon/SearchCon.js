// 这是容器组件，
import React, {
    Component
} from "react";
import api from '../../api/api';
import { observer } from 'mobx-react';
import '../../style/common/index.js';
import store from '../../store';
import {toJS} from 'mobx';

@observer
class SearchCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:""

        };
 
    }
    
	
    
    componentDidMount(){
			
			console.log(store.SearchRes.keyWord)
    }
    render() {
			
        return ( < div className="searchCon flexca" >
		
		<div className="crumbs flexrb norF" >
		  <span>{store.SearchRes.keyWord?'"'+store.SearchRes.keyWord+'"':"没有"}  </span> <p className="icon" >></p>
		</div>
		
		<div className="brandList" >
		
		</div>
		
		<div className="sortWrap" >
		
		</div>
            
        </div>
        );
    }
}
export default SearchCon;
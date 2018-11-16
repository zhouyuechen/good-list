// 这是容器组件，
import React, {
    Component
} from "react";
import api from '../../../api/api'

import Input from "../Input";
import List from "../List";
//import Game from "../../Game/components/Game";
 import  mstore from '../../../store/mobxTest';
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "silly man",
            dName:"输入名字",
            dJob:"输入工作",
            data:[{
                name:"龟龟",
                job:"无",
                pid:0
            }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.add = this.add.bind(this)
    }
    handleChange(event) {
        if(event.target.previousElementSibling.getAttribute("for")==="name")
        {this.setState({
            dName: event.target.value
        });}else { this.setState({
            dJob: event.target.value
        });}
    }
    handleDel(i,event){
       console.log(i,event);

        this.state.data.splice(i,1);
        this.setState({
            data:this.state.data
        })
        
    }
    add(event){
        event.preventDefault();
        let obj={name:this.state.dName,
            job:this.state.dJob
        };
        let arr=this.state.data.concat(obj);
        this.setState({
            data:arr
        });
        mstore.getData(
            api.itemSearch,
            "post",
            {"pageNo":1,"pageSize":20,"searchkey":"贝亲","sortType":"3","itemTypes":"","searchSource":"key"}
        );
      
    }
    componentDidMount(){
        // setInterval(() => {
        //     mstore.change();
        //     console.log(mstore.total);
        //   }, 500);
       
    }
    render() {
        return ( < div >
            <List
            data={this.state.data}
            handleDel = {
                this.handleDel
            }
            
            />
            <form id = "article-form" >
            <Input text = "姓名"
            label = "name"
            type = "text"
            id = "1"
            value = { this.state.dName}
            handleChange = {
                this.handleChange
            }
            />
             <Input text = "工作"
            label = "job"
            type = "text"
            id = "2"
            value = { this.state.dJob}
            handleChange = {
                this.handleChange
            }
            />
            <button onClick={this.add}>提交</button>
            </form></div>
        );
    }
}

export default FormContainer;
//显示组件
import React from "react";
import PropTypes from "prop-types";
const List = ({   data, handleDel }) => (

<ul>
    {data.map((item,i)=> ((<li key={i}   >{item.name},{item.job}<button  onClick={()=>handleDel(i)}>删我</button></li> )) )} 
</ul>

);
List.propTypes = {

data: PropTypes.array.isRequired,
handleDel: PropTypes.func.isRequired
};
export default List;
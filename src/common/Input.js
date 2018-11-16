//显示组件
import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange }) => (
<div className="s-input" >
{/* <label htmlFor={label}>{text}</label> */}
<input
type={type}
className="form-control"
id={id}
placeholder={value}
onChange={handleChange}
required
/>
</div>
);
Input.propTypes = {
label: PropTypes.string.isRequired,
text: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
id: PropTypes.string.isRequired,

handleChange: PropTypes.func.isRequired
};
export default Input;
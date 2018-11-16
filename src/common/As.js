import React from "react";

const A = ({ dc,href, text, id,  handleClick }) => (
<div className={dc} >
<a
href={href}
className="a-component"
id={id}
onClick={handleClick}
required
>{text}</a>
</div>
);

export default A;
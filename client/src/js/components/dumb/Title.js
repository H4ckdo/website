import React from 'react';

function Title(props) {
  let { data, hover = false } = props;
  return (
    <h1 className="title">
      <span className={hover ? "unactive" : "active"}>
      {data}
      <div className={hover ? "bottom-mark " : "bottom-mark mark-active"}></div>
    </span>
    </h1>
  )
}
export default Title;

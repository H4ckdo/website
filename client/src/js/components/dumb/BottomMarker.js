import React from 'react';

function BottomMarker(props) {
  let { data, hover = false } = props;
  return (
    <div className="title">
      <span className={hover ? "unactive" : "active"}>
        {data}
        <div className={hover ? "bottom-mark " : "bottom-mark mark-active"}></div>
      </span>
    </div>
  )
}
export default BottomMarker;

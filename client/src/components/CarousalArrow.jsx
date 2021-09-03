import React from 'react'

export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#e23744" }}
        onClick={onClick}
      />
    );
  }

 export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#e23744" }}
        onClick={onClick}
      />
    );
  }



//   export const NextArrow1 = (props) =>{

//     return(
// <div
//  className = {props.className}  style ={{...props.style,background: "#e23744"}}  onClick={props.onClick}>

// </div>

//     );


//   }
  
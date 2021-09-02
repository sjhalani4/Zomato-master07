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
  
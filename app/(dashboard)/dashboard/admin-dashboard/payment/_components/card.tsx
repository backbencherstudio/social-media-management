import React from "react";

export default function Card({text, number}:any) {
  return (
    <div className="p-8 bg-white rounded-lg">
      <h1>{text}</h1>
      <p>{number}</p>
    </div>
  );
}

"use client";
import React from "react";

function Lectures({ params }) {
  console.log(params);
  return (
    <div>
      <h2>Play Lectures</h2>
      <p>Semester:{params.lectures[0]}</p>
      <p>Day:{params.lectures[1]}</p>
      <p>Subject:{params.lectures[2]}</p>
    </div>
  );
}

export default Lectures;

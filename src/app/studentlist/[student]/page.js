"use client";
import React from "react";

function StudentS({ params }) {
  console.log(params.student);
  return (
    <div>
      <h1>Student</h1>
      <h4>Name:{params.student}</h4>
    </div>
  );
}

export default StudentS;

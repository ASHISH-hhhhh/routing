"use client";
import React from "react";
import { useRouter } from "next/navigation";

function StudentList() {
  const navigate = useRouter();
  const users = [
    { name: "ashish", id: 1 },
    { name: "ashish2", id: 12 },
    { name: "ashish3", id: 13 },
    { name: "ashish4", id: 14 },
    { name: "ashish5", id: 15 },
  ];
  return (
    <div>
      <h1>Student List</h1>
      {users.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate.push(`/studentlist/${item.name}`)}
        >
          <p>Name:{item.name}</p>
          <p>Id:{item.id}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;

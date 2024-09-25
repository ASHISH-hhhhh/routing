"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LayoutLogin({ children }) {
  const pathName = usePathname();
  return (
    <div>
      <h1>Common Login</h1>
      <ul>
        <li>
          {" "}
          {pathName === "/login" ? (
            ""
          ) : (
            <Link href="/login">Go to Main Login</Link>
          )}
        </li>
        <li>
          {" "}
          <Link href="/login/teacher">Go to Teacher Login</Link>
        </li>
        <li>
          {" "}
          <Link href="/login/student">Go to Student Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default LayoutLogin;

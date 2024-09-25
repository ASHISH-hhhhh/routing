import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">Go to Login</Link>
      <br />
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <br />
      <Link href="/studentlist">Go to Student List</Link>
    </div>
  );
}

export default Home;

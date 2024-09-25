"use client";
import { useRouter } from "next/navigation";
function Login() {
  const navigate = useRouter();
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => navigate.push("/login/teacher")}>
        Go to Login Teacher
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => navigate.push("/login/student")}>
        Go to Login Student
      </button>

      <br />
      <br />
      <br />
      <button onClick={() => navigate.push("/")}>Go to Home</button>
    </>
  );
}
export default Login;

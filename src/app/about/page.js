"use client";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();
  return (
    <>
      <h1>About</h1>

      <button onClick={() => router.push("/about/aboutcourse")}>
        Go to About Courses
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => router.push("/about/aboutcollege")}>
        Go to About College
      </button>

      <br />
      <br />
      <br />
      <button onClick={() => router.push("/")}>Go to Home</button>
    </>
  );
}
export default About;

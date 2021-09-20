import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const error = () => {
  const [goback, setGoback] = useState("");
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h2>404 Error This page is not found </h2>
      <p>The page you looking for has been remove</p>
      <ul>
        <li>
          <a onClick={() => router.push("/")}>Back to Home page</a>
        </li>
      </ul>
    </div>
  );
};

export default error;

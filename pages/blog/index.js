import React from "react";
import Navbar from "../components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data },
  };
};

function index({ data }) {
  return (
    <div>
      <Navbar />
      <h3>Thisis Blog page </h3>
      {data.map((el) => {
        console.log(el);
        const { name, username, email, phone, website, address, id } = el;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default index;

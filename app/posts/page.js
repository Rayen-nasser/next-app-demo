import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //=== ISG ===
    next: {
      revalidate: 120,
    },
  });
  const posts = await data.json();
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div
          style={{
            padding: "15px",
            backgroundColor: "black",
            color: "white",
            margin: "15px",
            cursor: "pointer",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "75%",
        margin: "20px auto",
      }}
    >
      {postsJSX}
    </div>
  );
};

export default page;

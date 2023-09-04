import React from 'react'

const PostDetails = async ({postId}) => {
    // await new Promise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve()
    //     },1000)
    // })
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, );
    const post = await data.json();
      const postJSX = 
                <div
                    style={{
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "black",
                    color: "white",
                    margin: "15px",
                    width: "75%",
                    margin: "20px auto",
                    borderRadius: 15,
                    }}
                >
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>

  return (
    <div>
      {postJSX}
    </div>
  )
}

export default PostDetails

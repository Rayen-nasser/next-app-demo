import React, { Suspense } from 'react'
import PostDetails from './PostDetails'
import loading from './loading'

const page = async ({params}) => {

      return (
        <div>
            <h1 className='title'>POST Deatil</h1>
            <Suspense fullback>
                <PostDetails postId={params.postdetails}/>
            </Suspense>
        </div>
      
    )
}

export default page

import React from 'react'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"
import Post from "./Post"
function Posts({ posts }) {

    const [realtimePosts, loading, error] = useCollection(
        query(collection(db, "posts"), orderBy("timestamp", "desc"))
    )
    // console.log(realtimePosts.docs)


    return (
        <div>
            {realtimePosts?.docs.map((post) => (
                <Post
                    key={post.id}
                    name={post.data().name}
                    message={post.data().message}
                    email={post.data().email}
                    timestamp={post.data().timestamp}
                    image={post.data().image}
                    postImage={post.data().postImage}

                />
            ))}

            <Post />
        </div>
    )
}

export default Posts

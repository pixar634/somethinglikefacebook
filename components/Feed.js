
import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";



function Feed({ posts }) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 ml-4 xl:mr-40 overflow-y-auto  scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl overflow-x-auto">
                <Stories />
                <InputBox />
                <Posts posts={posts} />

            </div>
        </div>
    );
}

export default Feed;
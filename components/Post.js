import React from 'react'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Logo from '../assets/loader1.svg';
function Post({ name, message, email, postImage, image, timestamp }) {
    return (
        <div className="flex flex-col">
            <div className="p-5 bg-gray-700 text-white mt-5 rounded-t-2xl shadow-sm">
                {!image && (
                    <div className="flex justify-center">
                        <img src={Logo} className="h-10" />

                    </div>
                )}
                <div className="flex items-center space-x-2">


                    {image && (
                        <img className="rounded-full" src={image} width={40} height={40} />

                    )}

                    <div>
                        <p className="font-medium">{name}</p>
                        {timestamp && (
                            <p className="text-xs text-gray-400">
                                {new Date(timestamp?.toDate()).toLocaleString()}
                            </p>
                        )}
                    </div>
                </div>

                <p className="pt-4">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white rounded-md p-10">
                    <Image src={postImage} objectFit="cover" layout="fill" />
                </div>
            )}

            {/* Post Footer */}
            <div className="flex justify-between items-center rounded-b-2xl bg-gray-700 shadow-md text-gray-400">
                <div className="inputIcon m-2 p-3 rounded-none rounded-bl-2xl group">
                    <ThumbUpIcon className="h-4 group-hover:animate-bounce" />
                    <p className="text-xs sm:text-base hidden sm:inline-flex">Like</p>
                </div>

                <div className="inputIcon m-2 p-3 rounded-none  rounded-bl-2xl group">
                    <ChatAltIcon className="h-4 group-hover:animate-bounce" />
                    <p className="text-xs sm:text-base hidden sm:inline-flex ">Comment</p>
                </div>

                <div className="inputIcon m-2 p-3 rounded-none rounded-br-2xl group">
                    <ShareIcon className="h-4 group-hover:animate-bounce" />
                    <p className="text-xs sm:text-base hidden sm:inline-flex ">Share</p>
                </div>
            </div>
        </div>


    )
}

export default Post

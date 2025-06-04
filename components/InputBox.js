import React from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react"
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase"
import { serverTimestamp } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

function InputBox() {

    const [session] = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)
    const sendPost = (e) => {
        e.preventDefault();
        //prevent users to submit vithout any value in input field
        if (!inputRef.current.value) return;
        // alert(inputRef.current.value);
        addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp(),
        }).then(doc => {
            if (imageToPost) {
                (async () => {
                    const storageRef = ref(storage, `posts/${doc.id}`);
                    await uploadString(storageRef, imageToPost, 'data_url');
                    removeImage();
                    const url = await getDownloadURL(storageRef);
                    await setDoc(doc(db, 'posts', doc.id), { postImage: url }, { merge: true });
                })();
            }
        })



        inputRef.current.value = '';
    }
    const addImagetoPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }
    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-gray-700 p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-centre">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input type="text" className="rounded-full h-12 bg-gray-600 text-white flex-grow px-5 focus:outline-none" placeholder={`Whats on your mind,${session.user.name}?`}
                        ref={inputRef}
                    />
                    <button hidden type='submit' onClick={sendPost}>Submit</button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor:pointer">

                        <img src={imageToPost} className='h-10 object-contain' alt="" />
                        <p className="text-xs text-red-600 text-center">Remove</p>
                    </div>
                )}

            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base hidden sm:inline-flex">Live Video</p>

                </div>
                <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base hidden sm:inline-flex">Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImagetoPost} type="file" hidden />
                </div>
                <div className='inputIcon'>
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base hidden sm:inline-flex">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox

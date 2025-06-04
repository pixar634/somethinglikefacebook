import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid"
import {
    FlagIcon,
    PlayerIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from "next-auth/client"
function Header() {
    const [session] = useSession();
    return (
        <div className="sticky font-barlow top-0 z-50 bg-gray-800 flex items-center p-2 lg:px-5  text-white ">
            {/* left */}
            <div className="flex items-center ">
                {/* <Image className="bg-blend-darken h-20"
                    src="../assets/logo1.png"
                    width="40"
                    height="40"
                    layout="fixed"
                /> */}
                <img src="https://links.papareact.com/t4i" className="h-10  transition duration-500 transform-gpu ease-in lg:rotate-180 md:rotate-90" alt="Logo" />


                <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-600 p-2 hover:b-2 hover:border-blue-400" >
                    <SearchIcon className="h-6 text-gray-300" />
                    <input
                        className="hidden lg:inline-flex ml-2 bg-transparent   outline-none placeholder-gray-300 flex-shrink"
                        placeholder="Search GlobeConnect"
                    />
                </div>
            </div>
            {/* Centre */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>



            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">

                {/* Profile pic */}
                <Image
                    className="rounded-full cursor-pointer"
                    onClick={signOut}
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
                    {session.user.name}
                </p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />

            </div>

        </div>


    )
}

export default Header

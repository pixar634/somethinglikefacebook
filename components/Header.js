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

function Header() {
    return (
        <div className="sticky top-0 z-50 flex bg-white items-centre p-2 lg:px-5 shadow-md ">
            {/* left */}
            <div className="flex items-centre">               
                    {/* <SearchIcon className="h-6" />                     */}
                     <Image src ="https://links.papareact.com/5me" 
                     width={40} 
                     height={40} 
                     layout = 'fixed'/>
                
                <div className="flex ml-2 items-centre rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-400"/> 
                    <input 
                    className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" 
                    placeholder="Search Facebook" />
                </div>
            </div>
            
            {/* Centre */}
            <div  className="flex justify-center flex-grow ">
                <div className="flex space-x-6 md:space-x-20">
                <HeaderIcon Active Icon={HomeIcon}/> 
                <HeaderIcon Icon={FlagIcon}/> 
                <HeaderIcon Icon={PlayIcon}/> 
                <HeaderIcon Icon={ShoppingCartIcon}/> 
                <HeaderIcon Icon={UserGroupIcon}/> 
                </div>
            </div>
        

            
            {/* Right */}
            <div>
                {/* Profile Pic */}
                <p className="whitespace-nowrap font-semibold pr-3">@mrmonochrome</p>
                <div>

                </div>
            </div>

        </div>
        
        
    )
}

export default Header

import React from 'react'

function HeaderIcon({Active, Icon}) {
    return (
        <div className="flex items-center md:px-10 sm:h-14 cursor-pointer md:hover:bg-gray-100 rounded-xl group active:border-b-2 active:border-blue-500">
            <Icon className={`h-5 test-gray-500 text-centre sm:h-7 mx-auto group-hover:text-blue-500 sm
            ${Active  && 'text-blue-500'}`}/>
        </div>
    )
}

export default HeaderIcon

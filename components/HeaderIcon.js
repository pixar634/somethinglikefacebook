import React from 'react'

function HeaderIcon({Active, Icon}) {
    return (
        <div className='flex items-centre cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group '>
            <Icon className={`h-5 test-gray-500 text-centre sm:h-7 mx-auto group-hover:text-blue-500 sm
            ${Active  && 'text-blue-500'}`}/>
        </div>
    )
}

export default HeaderIcon
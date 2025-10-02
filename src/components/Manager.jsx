import React from 'react'

const Manager = () => {
    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="mx-auto max-w-4xl">
                <div className='flex flex-col p-4'>
                    <input type="text" className='border border-gray-300 rounded-md p-2' />
                    <div className='flex justify-between items-center gap-2'>
                        <input type="text" className='border border-gray-300 rounded-md p-2 w-1/2' />
                        <input type="text" className='border border-gray-300 rounded-md p-2 w-1/2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager

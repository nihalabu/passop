import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-200 flex justify-between px-6 h-16 items-center '>
        <div className="logo font-bold">PASSOP</div>
        <div className='font-sans font-medium'>
            <ul className='flex justify-center gap-2.5 '>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

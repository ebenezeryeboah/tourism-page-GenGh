import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between h-16 items-center ' >
            <span>Logo Here</span>
            <div className='flex gap-6 ' >
                <span>Home</span>
                <span>About</span>
                <span>Listing</span>
                <span className='px-5'>Blog</span>
            </div>
        </nav>
    )
}

export default Navbar
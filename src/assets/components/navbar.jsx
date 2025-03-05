import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between '>
            <span>Logo Here</span>
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Listing</span>
                <span>Blog</span>
            </div>
        </nav>
    )
}

export default Navbar
import React from 'react'

export const Navbar = () => {
    return(
        <>
            <nav className='bg-zinc-700 text-white fixed top-0 w-full'>
                <ul className='navitem'>
                    <li><a href='/problemset/all'>Problems</a></li>
                    <li><a href='/'>Login</a></li>
                    <li><a href='/signup'>Signup</a></li>
                </ul>
            </nav>
        </>
    )
}

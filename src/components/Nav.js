import React from 'react'

export const Nav = () => {
    return (
        <>
            <nav className='bg-blue-800'>
                <ul className="flex justify-around p-3">
                    <li>
                        <a href='#' className='text-blue-300 border-b-2 border-blue-800 hover:text-white hover:border-white'>Inicio</a>
                    </li>
                    <li>
                        <a href='#' className='text-blue-300 border-b-2 border-blue-800 hover:text-white hover:border-white'>Tiendas</a>
                    </li>
                    <li>
                        <a href='#' className='text-blue-300 border-b-2 border-blue-800 hover:text-white hover:border-white'>Productos</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

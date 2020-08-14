import React from 'react'
import { Login } from './components/Login'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { CardCategories } from './components/CardCategories'
// import { Register } from './components/Register'

export const App = () => {
    return (
        <main>
            <Nav/>
            <Login/>
            <CardCategories/>
            <Footer/>
        </main>
    )
}

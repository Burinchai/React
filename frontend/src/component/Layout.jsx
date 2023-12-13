import React from 'react'
import { Outlet } from 'react-router-dp'
import Header from './Header'

const Layout = () =>{
    return(
        <main>
            <Header/>
            <Outlet/>
        </main>
    );
}
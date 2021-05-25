import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "../index.css"

const Navbar = () => {
    return (
        <header className="bg-gray-700">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-green-400"
                    className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-green-400 text-4xl font-bold cursive">
                        usilwal
                    </NavLink>
                    <NavLink to="/posts" activeClassName="text-green-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-400">
                        Posts
                    </NavLink>
                    <NavLink to="/projects" activeClassName="text-green-400"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-400">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-green-400"
                    className="inline-flex items-center py-3 px-3 pr-1 my-6 rounded text-gray-200 hover:text-green-400">
                        About
                    </NavLink>
                    
                </nav>
                <div className="hidden sm:inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://linkedin.com/in/utkarsh-silwal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                    <SocialIcon url="https://github.com/usilwal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                    <SocialIcon url="mailto:usilwal@hotmail.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                </div>
            </div>
        </header>
    )
}

export default Navbar

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
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-green-400">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar

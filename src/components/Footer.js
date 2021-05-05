import React from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "../index.css"

const Footer = () => {
    return (
        <header className="w-100">
            <div className="bg-black border-t-2 border-green-400">
                <div className="inline-flex py-3 px-3 my-1 mx-4">
                    <SocialIcon url="https://linkedin.com/in/utkarsh-silwal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                    <SocialIcon url="https://github.com/usilwal" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                    <SocialIcon url="mailto:usilwal@hotmail.com" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35} }/>
                </div>
            </div>
        </header>
    )
}

export default Footer
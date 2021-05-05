import React from 'react'
import image from "./assets/bgImage.jpg"

const Home = () => {
    return (
        <main className="bg-black">
            <img src={image} alt="bgImage" className="absolute object-cover w-full h-full"/>
            <section className="relative min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-center text-gray-100 font-bold cursive leading-none lg:leading-snug home-name">WELCOME!</h1>
                <p className="text-6xl text-center text-gray-300 font-bold italic leading-none lg:leading-snug">to utkarsh silwal's site</p>
            </section>    
        </main>
    )
}

export default Home

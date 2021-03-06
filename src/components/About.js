import React, { useEffect, useState } from 'react';
import profilebg from "./assets/profilebg.png";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);
    
    if(!author) return <div className="font-bold p-64 mx-auto bg-black text-white">Loading...</div>;

    return (
        <main className="relative">
            <img src={profilebg} 
                 alt="profile background" 
                className="absolute w-full h-full"/>
            <div className="lg:p-10 lg:pt-24 container mx-auto relative">
                <section className="bg-gray-800 lg:rounded-lg shadow-2xl lg:flex p-6 lg:p-16">
                    <img src={urlFor(author.authorImage).url()} 
                         className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-16" 
                         alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl">
                            <span className="text-green-400">Software Engineer:{" "}</span>
                            <span className="text-gray-200">{author.name}</span>
                        </h1>
                        <div className="p-6 my-2 rounded bg-gray-700">
                            <span className="text-gray-100">
                            <BlockContent blocks={author.bio}
                                          projectId="l6jj32fd"
                                          dataset="production" 
                                          className="prose-red"
                            />
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About

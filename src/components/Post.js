import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
    return builder.image(source);
}

const Post = () => {
    const [ post, setPost ] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`)
            .then((data) => setPost(data[0]))
            .catch(console.error);
    }, [slug]);

    if(!post) return <div>Loading...</div>;

    return (
        <main className="bg-purple-50 min-h-screen p-12">
            <article className="container shadow-m mx-auto bg-purple-50 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-gray-500 pl-32 pr-32 p-4 rounded">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                {post.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(post.authorImage).url()}
                                alt={post.name}
                                className="w-10 h-10 rounded-full"/>
                                <p className="cursive flex items-center pl-2 text-2xl">{post.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={post.mainImage.asset.url} 
                         alt={post.title}
                         className="w-full object-cover rounded-t"
                         style={{ height: "400px"}}/>
                </header>
                <br/>
                <div className="bg-gray-300 text-lg px-16 py-12 leading-normal max-w-full">
                    <BlockContent blocks={post.body} 
                                  projectId="l6jj32fd" 
                                  dataset="production"/>
                </div>
            </article>
        </main>
    )
}

export default Post

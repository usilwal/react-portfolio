import React, { useState, useEffect } from 'react';
import { colorPicker, iconPicker } from "./helpers";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { SiCplusplus, SiCsharp, SiGo, SiJava, SiJavascript, SiPython, SiRuby } from "react-icons/si"
const Projects = () => {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            body,
            languageType,
            languageList,
            frameworks_tools,
            url,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => data.sort((a, b) => new Date(b.date) - new Date(a.date)))
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, [])
    
    return (
        <main className="bg-purple-50 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    PROJECTS</h1>
                <h2 className="text-lg text-gray-800 flex justify-center pt-3 mb-12">
                    A collection of my applications and sites</h2>
                <section className="grid gap-8 sm:grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3">
                    {projectData && projectData.map((project, index) => (
                    <article className={"relative shadow-l bg-white p-8 border-l-8 " + colorPicker(project.languageType)}>
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-green-500">
                            {iconPicker(project.languageType)}
                            <a href={project.url} alt={project.title} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>

                        <div className="text-gray-500 text-xs">
                            <div>
                                <strong className="font-bold">Languages</strong>:{" "}
                                {project.languageList}
                            </div>
                            <div>
                                <strong className="font-bold">Frameworks and Tools</strong>:{" "}
                                {project.frameworks_tools}
                            </div>
                            { project.mainImage ? 
                            <img src={project.mainImage.asset.url} 
                                    alt={project.mainImage}
                                    className="w-auto mx-auto object-cover rounded-t p-4 px-0"
                                    style={{ height: "200px"}} 
                                />
                                : "" }
                            <p className="my-6 text-sm text-gray-700 leading-relaxed">
                                <BlockContent blocks={project.body} 
                                  projectId="l6jj32fd" 
                                  dataset="production"/></p>
                            <div className="italic align-text-bottom">
                                { project.url ? 
                                <a href={project.url} rel="noopener noreferrer" target="_blank" className="text-green-400 font-bold hover:underline hover:text-green-800">
                                    Project Link{" "}
                                </a> : ""}
                                <div>
                                    <strong className="font-bold">Date</strong>:{" "} 
                                    {new Date(project.date).toLocaleDateString()}
                                </div>
                            </div>

                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Projects

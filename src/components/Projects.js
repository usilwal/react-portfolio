import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";

const Projects = () => {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            description,
            languageType,
            languageList,
            frameworks_tools,
            url,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, [])

    return (
        <main className="bg-purple-200 min-h-screen p-12">
            <section className="container mx auto">
                <h1 className="text-5xl flex justify-center cursive">
                    Projects</h1>
                <h2 className="text-lg text-gray-800 flex justify-center pt-3 mb-12">
                    A collection of my applications and sites</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-500">
                            <a href={project.url} alt={project.title} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Languages</strong>:{" "}
                                {project.languageList}
                            </span>
                            <span>
                                <strong className="font-bold">Frameworks and Tools</strong>:{" "}
                                {project.frameworks_tools}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="justify-center">
                                <a href={project.url} rel="noopener noreferrer" target="_blank" className="text-blue-600 font-bold hover:underline hover:text-blue-500">
                                    Project Link{" "}
                                </a>
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

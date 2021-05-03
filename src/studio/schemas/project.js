export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "languageType",
            title: "Main Language",
            type: "string",
            options: {
                list: [
                    {value: "c++", title: "C++"},
                    {value: "c#", title: "C#"},
                    {value: "java", title: "Java"},
                    {value: "javascript", title: "Javascript"},
                    {value: "python", title: "Python"},
                    {value: "multiple", title: "Multiple Languages"},
                ],
            },
        },
        {
            name: "languageList",
            title: "List of Languages",
            type: "string",
        },
        {
            name: "frameworks_tools",
            title: "Frameworks and Tools",
            type: "string",
        },
        {
            name: "url",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            }
        }
    ]
}
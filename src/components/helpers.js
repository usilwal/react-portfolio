import { SiCplusplus, SiCsharp, SiGo, SiJava, SiJavascript, SiPython, SiRuby } from "react-icons/si"

const style = { 
    display: 'inline-block', 
    position: 'relative',
    top: '-3px',
    right: '10px'
}

export const iconPicker = (language) => {
    switch(language) {
        case "c++":
            return < SiCplusplus size='1em' style={style}/>
        case "c#":
            return < SiCsharp size='1em' style={style}/>
        case "golang":
                return < SiGo size='1em' style={style}/>
        case "java":
            return < SiJava size='1em' style={style}/>
        case "javascript":
            return < SiJavascript size='1em' style={style}/>
        case "python":
            return < SiPython size='1em' style={style}/>
        case "ruby":
            return < SiRuby size='1em' style={style}/>
        default:
            return ""
    }
}

export const colorPicker = (language) => {
    switch(language) {
        case "c++":
            return "border-blue-800"
        case "c#":
            return "border-purple-600"
        case "golang":
            return "border-green-200"
        case "java":
            return "border-yellow-700"
        case "javascript":
            return "border-yellow-300"
        case "python":
            return "border-blue-400"
        case "ruby":
            return "border-red-600"
        case "multiple":
            return "border-black"
        default:
            return ""
    }
}


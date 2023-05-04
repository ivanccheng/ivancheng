import React from "react";
import Tag from "./Tags";

function ProjectCard(props) {
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 670);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="project-card">
            {isSmallScreen || window.innerWidth < 670 ? (
                <div></div>
            ) : (
                <img
                    src={loadImage(props.image)}
                    className='project-image'
                />)}

            <h2>{props.title}</h2>
            <Tag tags={props.tags}></Tag>
            <ul>
                {props.desc.map((d) => (
                    <li> {d}</li>
                ))}
            </ul>
        </div>
    );
}


function loadImage(source) {
    try {
        const image = require('../assets/' + source)
        return image
    }
    catch {
        return null
    }
}

export default ProjectCard

// ['React', 'JavaScript', 'CSS', 'HTML']
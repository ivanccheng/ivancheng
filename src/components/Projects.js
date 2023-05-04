import React from 'react';
import ProjectCard from './ProjectCard';



const proj = [
    {
        image: 'baddie-match.png',
        title: 'Baddie-match',
        link: 'github.com',
        desc: [
            'a;ldkfj',
            'asdlfk;j'
        ],
        tags: ['React', 'Flask', 'Postgres', 'Docker', 'REST API', 'Heroku']
    },
    {
        image: 'straights.png',
        // image: null,
        title: 'Straights',
        link: 'github.com',
        desc: [
            'Object oriented turn based card game, built in C++, playable from CLI',
            'Leverages separate compilation, operator overloading, and inheritance',
        ],
        tags: [
            'Object Oriented',
            'C++',
            'Design Patterns',
            'Operator Overloading',
            'Polymorphism'
        ]
    }
]

const Projects = () => {

    return (

        <div>
            <h1>Projects</h1>
            <div className='card-container'>
                {
                    proj.map((p) => (
                        <ProjectCard className='project-card'
                            image={p.image}
                            title={p.title}
                            link={p.link}
                            desc={p.desc}
                            tags={p.tags}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default Projects;

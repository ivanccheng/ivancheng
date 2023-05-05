import React from 'react';
import ProjectCard from './ProjectCard';



const proj = [
    {
        image: 'baddie-match.png',
        title: 'Baddie-match',
        link: 'https://github.com/uwbaddev/baddie-match',
        desc: [
            'Fullstack application, used to track badminton matches UW\'s Badminton Team',
            'Mentored juniors in software development, providing instruction on design methodologies and coding techniques',
            'Streamlined application development using dockerfiles to build production-ready images and docker-compose to optimize local development',
            'Implemented Elo tracking system to assign skill rankings to players based on wins and score differential',
        ],
        tags: ['React', 'Flask', 'Postgres', 'Docker', 'REST API', 'Heroku']
    },
    {
        image: 'straights.png',
        // image: null,
        title: 'Straights',
        link: 'https://github.com/ivanccheng/cardgame-straights',
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

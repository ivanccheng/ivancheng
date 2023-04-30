import React from 'react';
import Card from './Card';

import Emoji from '../components/Emoji'

const Main = () => {
    const experience = 
        {
          logo: 'company-logo-1.png',
          jobTitle: 'Web Developer',
          company: 'Company 1',
          duration: 'Jan 2018 - Present',
          jobResponsibilities: [
            'Developed and maintained the company website',
            'Worked with a team of developers to build a custom CMS',
            'Collaborated with design and marketing teams to implement new features'
          ]
        }
    
    return (
        <div>
            <h3>
                Hi I'm Ivan
                <Emoji symbol="👋" label="wave" />
            </h3>
            <p>Welcome to my website</p>
            <div>
                <Card
                    logo={experience.logo}
                    jobTitle={experience.jobTitle}
                    company={experience.company}
                    duration={experience.duration}
                    jobResponsibilities={experience.jobResponsibilities}
                />
            </div>
        </div>

    );
}
export default Main;

import React from 'react';
import Card from './Card';

import Experiences from './Jobs';

const Main = () => {
    function render_cards(experiences) {
        return (
            <div className='card-container'>
                {experiences.map((experience) => (
                    <Card
                        logo={experience.logo}
                        images={experience.images}
                        jobTitle={experience.jobTitle}
                        link={experience.link}
                        company={experience.company}
                        duration={experience.duration}
                        jobResponsibilities={experience.jobResponsibilities}
                    />
                ))}
            </div >
        )
    }

    return (
        <div>
            <h1>
                Experience
            </h1>

            {render_cards(Experiences)}

        </div>

    );
}
export default Main;

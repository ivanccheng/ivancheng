import React from 'react';
import Emoji from '../components/Emoji'

const About = () => {
  return (
    <div className='about-container'>
      <h1>
        Hi I'm Ivan <Emoji symbol="👋" label="wave" />
      </h1>
      <h2>
        I write code.
      </h2>
      <p>
        Hello
      </p>
    </div>
  );
}
export default About;

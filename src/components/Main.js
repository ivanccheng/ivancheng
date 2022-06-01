import React from 'react';

import Emoji from '../components/Emoji'

const Main = () => {
    return (
        <div>
            <h3>
                Hi I'm Ivan 
                <Emoji symbol="👋" label="wave"/>
            </h3>
            <p>Welcome to my website</p>
        </div>
    );
}
export default Main;

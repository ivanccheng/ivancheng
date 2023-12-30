import React from 'react';
import List from './List';
import ImageList from './ImageList';

function Card(props) {
    return (
        <div className="card">
            {/* <div className="company-logo">
                <img src={loadImage(props.logo)} alt={props.company} />
            </div> */}
            <div className="card-header">
                <div className='link-container'>
                    <p >
                        {props.duration}
                    </p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <img src={loadImage('link2.svg')} className='link-icon'></img>
                    </a>

                </div>
                <div className="company-info">
                    <h2>{props.company} </h2>
                    {/* <h4>{props.duration} </h4> */}
                    <h4>{props.jobTitle} </h4>
                </div>
            </div>
            {/* <p>{props.duration}</p> */}
            <ImageList images={props.images} />
            <ul>
                {props.jobResponsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>

        </div >
    );
}

function loadImage(source) {
    try {
        const image = require('../assets/' + source)
        return image
    } catch {
        return null
    }

}


export default Card

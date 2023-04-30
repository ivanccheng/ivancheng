import React from 'react';
import List from './List';

function Card(props) {
    return (
      <div className="card">
        <div className="company-logo">
          <img src={props.logo} alt={props.company} />
        </div>
        <div className="company-info">
          <h3>{props.jobTitle}</h3>
          <p>{props.company}</p>
          <p>{props.duration}</p>
          <ul>
            {props.jobResponsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }


export default Card
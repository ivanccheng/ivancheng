import React from 'react';
import List from './List';
import ImageList from './ImageList';

// function Card(props) {
//     return (
//       <div className="card">
//         {/* <div className="company-logo">
//           <img src={props.logo} alt={props.company} />
//         </div> */}
//         <div className="company-info">
//           <h2>{props.jobTitle}</h2>
//           <h4>{props.company}</h4>
//           <p>{props.duration}</p>
//           <ul>
//             {props.jobResponsibilities.map((responsibility, index) => (
//               <li key={index}>{responsibility}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }


function Card(props) {
    const styles = {
        backgroundImage: `url(${loadImage(props.logo)})`,
        backgroundSize: 'cover',
        // height: '1vw'
    };
    return (
        <div className="card">
            {/* <div className="company-logo">
                <img src={loadImage(props.logo)} alt={props.company} />
            </div> */}
            <div className="card-header">
                <div className="company-info">
                    <h2>{props.company}</h2>
                    <h4>{props.jobTitle}</h4>
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
function MyComponent() {

    return <div style={{ color: 'blue', lineHeight: 10, padding: 20 }}> Inline Styled Component</div>

}
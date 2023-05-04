import React from 'react';
// import './Tag.css';

const Tag = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.map((tag) => (
        <div key={tag} className="tag">{tag}</div>
      ))}
    </div>
  );
};

export default Tag;
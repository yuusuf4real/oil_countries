import React from 'react';

const OilCountries = ({ name, imgSrc, story, btn }) => {
  return (
    <>
      <div className='card'>
        <h2>{name}</h2>
        <img src={imgSrc} alt={name} />
        <p>{story}</p>
        <button>{btn}</button>
      </div>
    </>
  );
};

export default OilCountries;

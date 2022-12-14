import React from 'react';
import OilCountriesData from './OilCountriesData';
import OilCountries from './OilCountries';

const BlogPost = () => {
  return (
    <>
      <h1>5 Top Oil Producing Countries in 2022</h1>
      <div className='container'>
        {OilCountriesData.map((value) => {
          return (
            <OilCountries
              name={value.name}
              imgSrc={value.imgSrc}
              story={value.story}
              btn={value.btn}
            />
          );
        })}
      </div>
    </>
  );
};

export default BlogPost;

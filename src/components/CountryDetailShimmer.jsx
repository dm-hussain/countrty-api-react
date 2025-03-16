import React from 'react';
import { useTheme } from '../context/ThemeContext';

function CountryDetailShimmer() {
 
  const {isDark}= useTheme()

  return (
    <>
      <div 
      className={`  ${isDark ? 'bgLight' : ''} container detailsShimmer  `}>
       
        <div className="  flagBox  "></div>
        <div className="w-50 h-100 d-flex flex-column justify-content-center ">
          <p></p>
          <p></p>
          <p></p>
          <p className="w-50"></p>
        </div>
      </div>
    </>
  );
}

export default CountryDetailShimmer;

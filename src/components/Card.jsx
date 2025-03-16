import React, { useContext } from 'react';
import { Link, useOutletContext } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';

function Card({name, flag, population, region, capital, data}) {
  
  const {isDark}=  useContext(ThemeContext)
  // console.log(isDark);
  
   
  return (
   
      <div className= {`${isDark && 'darkMode'}  country-card `}>
        <Link to={`/${name}`}  state={data}  >
          <img src= {flag} alt={`${name} " flag"`} />
          <div className="p-5">
            <p className=" fw-bold text-black fs-5  mb-4 text-inherit ">{name}</p>
            <p className=" fw-bold text-black  mb-2">
              Population: <span className=" fw-normal">{population}</span>
            </p>
            <p className=" fw-bold text-black  mb-2">
              Region: <span className="fw-normal">{region}</span>
            </p>
            <p className=" fw-bold text-black  mb-2">
              Capital: <span className="fw-normal"> { capital?.[0] }</span>
            </p>
          </div>
        </Link>
      </div>
  
  );
}

export default Card;

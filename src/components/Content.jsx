import React, { useEffect, useState } from 'react';
import Search from './Search';
import Select from './Select';
import Card from './Card';
import CardShimmer from './CardShimmer';
 function Content() {
  const [query, setQuery] = useState('');
  const [regionQuery, setRegionQuery] = useState('');
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);


 
    

  return ( 
    <> 
       
       
        
    <div className={` container `}>
     

    <div className="container d-flex flex-column  content-container    ">
    
      <div className="d-flex flex-column mb-5 flex-md-row justify-content-lg-between gap-4  w-100   ">
        <Search setQuery={setQuery} />
        <Select setQuery={setQuery}    />
      </div>

    </div>



    { countryData.length === 0 ? <CardShimmer /> :  <div  
    className="d-flex flex-column gap-4 flex-lg-row flex-md-wrap justify-content-md-between     "
      style={{ marginBottom: '150px' }}
    >
      {countryData
        .filter((country) =>
          country?.region?.toLowerCase().includes(query) ||   country?.name?.common.toLowerCase().includes(query))
        
        .map((country, i) => {
          
          return (
            <Card
              
              key={country.name?.common}
              name={country.name?.common}
              flag={country.flags?.svg}
              population={country?.population}
              region={country?.region}
              capital={country?.capital}
              data={country}
            />
          );
        })}
    </div>

    }
  </div>
       
      
   
    </>
  );
}

export default Content;

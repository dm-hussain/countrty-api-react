import React from 'react';

function Search({setQuery}) {

 

  return (
    <div className= {`  input-group  searchByName py-1 `}>
      <span className="input-group-text ">Search by Name</span>
      <input
      onChange={(e)=> setQuery(e.target.value)}
       className="form-control  " />
    </div>
  );
}

export default Search;

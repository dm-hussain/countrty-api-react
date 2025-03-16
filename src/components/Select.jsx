import React  from 'react';

function Select({setQuery }) {
  // const [selectedOption, setSelectedOption] = useState("");

 

  return (
    <select
      // value={regionQuery}
      onChange={(e) =>  setQuery(e.target.value) }
      className= {` form-select form-select-lg mb-3 py-1 selectRegion`}
      aria-label="Large select example"
    >
      <option hidden  >
        Filter by Region
      </option>
      <option value="asia">Asia</option>
      <option value="americas">Americas</option>
      <option value="africa">Africa</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default Select;

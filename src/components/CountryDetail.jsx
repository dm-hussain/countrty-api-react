import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import CountryDetailShimmer from './CountryDetailShimmer';

function CountryDetail() {
  const { country } = useParams();

  const { state } = useLocation();

  // const {isDark} = useContext(ThemeContext)
  const { isDark } = useTheme();

  const [countryData, setCountryData] = useState({});

  function updateData(data) {
    setCountryData({
      name: data.name?.common,
      flag: data.flags.svg,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      tld: data.tld,
      capital: data.capital,
      languages: data.languages,
      currencies: data.currencies,
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((allBorder) =>
      setCountryData((prev) => {
        return { ...prev, borders: allBorder };
      })
    );
  }

  useEffect(() => {
    if (state) {
      updateData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateData(data);
      })
      .catch((err) => console.log(err));
  }, [country]);

  return (
    <div className='minHeight'>
      <div className="container backBtn">
        <button
          onClick={() => history.back()}
          type="button"
          className="btn btn-secondary   "
        >
          Go Back
        </button>
      </div>

     

      {


      !countryData.name ?  <CountryDetailShimmer /> : <div className={`${isDark ? 'darkMode' : ''}  country-details container `} >
      <div>
        <img src={countryData.flag} alt="flag" />
      </div>

      <div className=" details ">
        <h2 className="text-2xl fw-bold   my-6">{countryData.name}</h2>

        <div className="country-all-details flex justify-between ">
          <div>
            <p className="fw-semibold mb-2">
              Native Name:{' '}
              <span className="fw-normal">{countryData.name}</span>
            </p>
            <p className="fw-semibold mb-2">
              Population:{' '}
              <span className="fw-normal"> {countryData.population}</span>
            </p>
            <p className="fw-semibold mb-2">
              Region: <span className="fw-normal">{countryData.region}</span>
            </p>
            <p className="fw-semibold mb-2">
              Sub Region:{' '}
              <span className="fw-normal">{countryData.subregion}</span>
            </p>
            <p className="fw-semibold mb-2">
              Capital:{' '}
              <span className="fw-normal">
                {countryData.capital?.join(', ')}
              </span>
            </p>
          </div>
          <div>
            <p className="fw-semibold mb-2">
              Top Level Domain:{' '}
              <span className="fw-normal">{countryData.tld?.join(', ')}</span>
            </p>
            <p className="fw-semibold mb-2">
              Currencies:{' '}
              <span className="fw-normal">
                {countryData.currencies &&
                  Object.values(countryData.currencies)
                    .map((el) => el.name)
                    .join(', ')}
              </span>
            </p>
            <p className="fw-semibold mb-2">
              Languages:{' '}
              <span className="fw-normal">
                {' '}
                {countryData.languages &&
                  Object.values(countryData.languages).join(', ')}
              </span>
            </p>
          </div>
        </div>

        {countryData?.borders?.length > 0 && (
          <div className="mt-6  ">
            <p className="font-bold mb-2 d-flex align-items-center flex-wrap   ">
              Border Countries: &nbsp;
              {countryData.borders.map((code) => {
                return (
                  <Link
                    key={code}
                    to={`/${code}`}
                    className="fw-normal  cursor-pointer m-1   bg-white border-2 rounded-md px-2 py-1 shadow-sm"
                  >
                    {code}
                  </Link>
                );
              })}
            </p>
          </div>
        )}
      </div>
    </div>
      }
    </div>
  );
}

export default CountryDetail;

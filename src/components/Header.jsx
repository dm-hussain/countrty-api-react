 
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { Link } from 'react-router';
import {  useTheme } from '../context/ThemeContext';

function Header() {
  // const { isDark, setIsDark } = theme;

  // const { isDark, setIsDark } = useContext(ThemeContext);
  const { isDark, setIsDark }=   useTheme()

  const handleClick = () => {

    setIsDark(!isDark);
    localStorage.setItem('isDark', !isDark);
  };

  return (
    <div
      className={` ${ isDark ? 'darkMode' : '' }   header position-sticky top-0 z-2  `}
    >
      <div className="container ">
        <header className="d-flex justify-content-between align-items-center py-3 ">
          <Link to={'/'} className="cursor-pointer ">
            <h2>Where in the world!</h2>
          </Link>

          <div onClick={() => handleClick()}>
            {isDark ? (
              <span className="cursor-pointer">
                Light Mode <CiLight size={30} />
              </span>
            ) : (
              <span className="cursor-pointer">
                Dark Mode <MdDarkMode size={30} />
              </span>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;

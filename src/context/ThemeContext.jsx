import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDark'))
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={` ${isDark ? 'darkMode' : ' '} mainPage`}> {children}  </div>
    </ThemeContext.Provider>
  );
};


// export const useTheme= ()=>{

//       const { isDark, setIsDark } = useContext(ThemeContext);
//       console.log(useContext(ThemeContext));
      

//       return  { isDark, setIsDark }
    
// }

// alternate of above custom hook
export const useTheme= ()=>  useContext(ThemeContext); 


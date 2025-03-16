import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { useContext, useState } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

function App() {
  // const [isDark, setIsDark] = useState( JSON.parse(localStorage.getItem('isDark')));

  // const {isDark, setIsDark}= useContext(ThemeContext)

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;

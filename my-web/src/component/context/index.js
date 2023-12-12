import About from '@/pages/about/about';
import Registration from '@/pages/registration';
import { createContext, useContext, useEffect, useState } from 'react';

export const YourContext = createContext();

export const PopupProvider = ({ children }) => {
  const [userRegister, setUserRegister] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Set a timeout to show the popup after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => 
    {
      clearTimeout(timeoutId);}
  }, []);
  const popup=()=>{
    setShowPopup(!showPopup);
  }
  return (
    <YourContext.Provider value={{ userRegister, setUserRegister }}>
        {showPopup ? <Registration onPopup={popup}/> : <div/>}  
        {children}
    </YourContext.Provider>
  );
};

export const useYourContext = () => {
  return useContext(YourContext);
};
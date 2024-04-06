import { createContext, useEffect, useState } from 'react';

const PreferenceContext = createContext({});

function PreferenceProvider({ children }) {
  const [prefs,setPrefs]=useState({test:'test'})
  
  useEffect(() => {
    const savedPrefs = localStorage.getItem('prefs')
    if(savedPrefs) setPrefs(JSON.parse(savedPrefs))
  },[])

  return <PreferenceContext.Provider value={{prefs,setPrefs}}>{children}</PreferenceContext.Provider>;
}

export { PreferenceContext, PreferenceProvider };
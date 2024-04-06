import { createContext, useState } from 'react';

const PreferenceContext = createContext({});

function PreferenceProvider({ children }) {
  const [prefs,setPrefs]=useState({test:'test'})
  return <PreferenceContext.Provider value={{prefs,setPrefs}}>{children}</PreferenceContext.Provider>;
}

export { PreferenceContext, PreferenceProvider };
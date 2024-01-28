import React, { createContext,useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider for the context
const MyContextProvider = ({ children }) => {
  const [myValue, setMyValue] = useState('');

  const updateValue = (newValue) => {
    setMyValue(newValue);
  };

  return (
    <MyContext.Provider value={{ myValue, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider
export {MyContext}
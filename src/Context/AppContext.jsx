import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create the provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Data Function
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://admin.refabry.com/api/all/product/get');
     setData(response.data.data.data);
     setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <AppContext.Provider
      value={{ user, setUser, theme, loading, data, fetchData }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

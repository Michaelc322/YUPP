import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {



  // FIRST ONE 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
    // Example: Check if user is logged in from localStorage
    axios.defaults.withCredentials = true;
const [isLoading, setIsLoading] = useState(true);
const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
}

    useEffect(() => {
            const getProfile = async () => { 
                try {
                    const {data} = await axios.get('/auth/user/', config);
                    console.log("data", data)
                    if(data.error){
                        console.log(data.error, "data error get profile");
                        if(isLoggedIn){
                          setIsLoggedIn(false);
                        }
                        setIsLoading(false);

                    } else {
                        setUserInfo(data.user);
                        setIsLoggedIn(true);
                        setIsLoading(false);
                    }
                }
                catch (error) {
                    console.log(error, "error get profile");
                    setIsLoggedIn(false);
                    setIsLoading(false);

                }
                finally {
                    setIsLoading(false);
                }
            }

            console.log("is logged in", isLoggedIn)
            getProfile();

    }, [])

    const login = () => {
      // Logic to handle login
      setIsLoggedIn(true);
    };
  
    const logout = () => {

      setIsLoggedIn(false);
    };
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userInfo, setUserInfo, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

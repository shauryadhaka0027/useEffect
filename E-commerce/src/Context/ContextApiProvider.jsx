import React, { createContext, useState } from 'react'
export const ContextApi=createContext()
const ContextApiProvider = ({children}) => {
  const[isAuth,setIsAuth]=useState(false);
  const[user,setUser]=useState([]);
  const[cart,setCart]=useState([])
  
  return (
    <ContextApi.Provider value={{user,setIsAuth,setUser,isAuth,cart,setCart}}>
      {children}
    </ContextApi.Provider>
  )
}

export default ContextApiProvider

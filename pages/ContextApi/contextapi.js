import React, { createContext, useState } from 'react'
 export const Context=createContext();
const ContextApi = ({children}) => {
 
     const name="bikram";
  const [names,setnames]=useState("hello brother i am from context api")
  return (
   <Context.Provider value={{names,setnames}}>
      {children}
   </Context.Provider>
  )
}

export default ContextApi

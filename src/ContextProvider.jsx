import React, { useState } from 'react'
import { userContext } from './Components/Context'
export const ContextProvider = ({children}) => {

    const[remaning , setRemaning] = useState(2000);
    const[spent , setSpent] = useState(0);
    const[addExpence , setAddExpence] = useState([]);


  return (
    
    <userContext.Provider value={{remaning , setRemaning , spent , setSpent , addExpence , setAddExpence}}>
        {children}
    </userContext.Provider>

  )
}

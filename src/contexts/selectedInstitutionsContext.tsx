import React from 'react';
import { useContext } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


type ListSelectedInstitutionsContextData = {
  data: Array<number>;
  handleSelectInstitution: (number: number) => void;
  handleClear: () => void

}

export const ListSelectedInstitutionsContext = createContext({} as ListSelectedInstitutionsContextData)

type ListSelectedInstitutionsContextProviderProps = {
  children: ReactNode,
}

export function ListSelectedInstitutionsContextProvider({ children }: ListSelectedInstitutionsContextProviderProps) {
  const [data, setData] = useState(Array())

  function handleClear(){
    setData([])
  }

  function handleSelectInstitution(number: number){
    if(data.includes(number)){
      var newList = data.filter(inst => inst != number);
      setData(newList)
    }

    else{
      var newList = data
      newList.push(number)
      setData(newList)
    }

    console.log("New data -> ", newList)
  }

  return(
    <ListSelectedInstitutionsContext.Provider value={{
      data,
      handleSelectInstitution,
      handleClear
    }}>
      {children}
    </ListSelectedInstitutionsContext.Provider>
  )
}

export const useListSelectedInstitutions = () => {
  return useContext(ListSelectedInstitutionsContext)
}
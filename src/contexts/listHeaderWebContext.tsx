import React from 'react';
import { useContext } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


type ListHeaderWebContextData = {
  data: Array<object>;
  loading: boolean;
  handleGetData: (dataCollected: Array<any>) => void;
  handleLoading: (state: boolean) => void
}

export const ListHeaderWebContext = createContext({} as ListHeaderWebContextData)

type ListHeaderWebContextProviderProps = {
  children: ReactNode,
}

export function ListHeaderWebContextProvider({ children }: ListHeaderWebContextProviderProps) {
  const [data, setData] = useState(Array())
  const [loading, setLoading] = useState(false)

  function handleGetData(dataCollected: any){
    setData(dataCollected)
  }

  function handleLoading(state: boolean){
    setLoading(state)
  }

  return(
    <ListHeaderWebContext.Provider value={{
      data,
      loading,
      handleGetData,
      handleLoading
    }}>
      {children}
    </ListHeaderWebContext.Provider>
  )
}

export const useListHeaderWeb = () => {
  return useContext(ListHeaderWebContext)
}
import React from 'react';
import { useContext } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


type ListHeaderContextData = {
  data: Array<object>;
  dataClassified: Array<object>;
  loading: boolean;
  handleGetData: (dataCollected: Array<any>) => void;
  handleGetDataClassified: (dataProcessed: Array<any>) => void;
  handleLoading: (state: boolean) => void
}

export const ListHeaderContext = createContext({} as ListHeaderContextData)

type ListHeaderContextProviderProps = {
  children: ReactNode,
}

export function ListHeaderContextProvider({ children }: ListHeaderContextProviderProps) {
  const [data, setData] = useState(Array())
  const [loading, setLoading] = useState(false)
  const [dataClassified, setDataClassified] = useState(Array())

  function handleGetData(dataCollected: any){
    setData(dataCollected)
  }

  function handleGetDataClassified(dataProcessed: any){
    setDataClassified(dataProcessed)
  }

  function handleLoading(state: boolean){
    setLoading(state)
  }

  return(
    <ListHeaderContext.Provider value={{
      data,
      dataClassified,
      loading,
      handleGetData,
      handleGetDataClassified,
      handleLoading
    }}>
      {children}
    </ListHeaderContext.Provider>
  )
}

export const useListHeader = () => {
  return useContext(ListHeaderContext)
}
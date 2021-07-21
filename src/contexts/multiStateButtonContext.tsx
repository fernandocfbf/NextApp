import React from 'react';
import { useContext } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


type MultiStateButtonContextData = {
  selected: number;
  handleSelectDate: (id: number) => void
}

export const MultiStateButtonContext = createContext({} as MultiStateButtonContextData)

type MultiStateButtonContextProviderProps = {
  children: ReactNode,
}

export function MultiStateButtonContextProvider({ children }: MultiStateButtonContextProviderProps) {
  const [selected, setSelected] = useState(1)

  function handleSelectDate(id: number) {
    setSelected(id)
  }


  return (
    <MultiStateButtonContext.Provider value={{
      selected,
      handleSelectDate
    }}>
      {children}
    </MultiStateButtonContext.Provider>
  )
}

export const useMultiStateButton = () => {
  return useContext(MultiStateButtonContext)
}
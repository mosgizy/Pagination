import React, { useReducer, useContext, useEffect } from 'react'
import fetchPage from './fetchPage'

const Pagination = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'GET_USER') {
    return {
      ...state,
      profiles: [...action.payload],
    }
  }

  if (action.type === 'STOP_LOADING') {
    return {
      ...state,
      loading: false,
    }
  }

  if (action.type === 'PAGE') {
    return {
      ...state,
      startData: action.payload[0],
      endData: action.payload[1],
      currentPage: action.payload[2],
    }
  }

  return state;
}

const defaultValue = {
  profiles: [],
  gap: 10,
  currentPage: 1,
  endData: 10,
  startData: 0,
  loading: true,
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const data = fetchPage()



  useEffect(() => {
    data && dispatch({ type: 'STOP_LOADING' })
    dispatch({ type: "GET_USER", payload: [...data].slice(state.startData, state.endData) })
  }, [state.startData, data])

  return (
    <Pagination.Provider value={{ ...state, dispatch }}>
      {children}
    </Pagination.Provider>
  )
}

export const useGlobalContext = () => useContext(Pagination)


export { Context, Pagination }

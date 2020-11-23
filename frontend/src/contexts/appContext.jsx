import React, { useState, useEffect } from 'react'

import api from '@services/api'
import { node } from 'prop-types'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [modalState, setModalState] = useState('')
  const [cid, setCid] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    if (cid) {
      setLoading(true)

      const fetchData = async () => {
        const resp = await api.getStatistic(cid, 2019)

        setData(resp)
        setLoading(false)
      }

      fetchData()
    }
  }, [cid, setData])

  return (
    <AppContext.Provider
      value={{
        loading,
        cid,
        setCid,
        data,
        setData,
        modalState,
        setModalState
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: node
}

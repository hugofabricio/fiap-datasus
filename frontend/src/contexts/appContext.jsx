import React, { useState } from 'react'

import { node } from 'prop-types'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [cid, setCid] = useState(null)
  const [data, setData] = useState(null)

  return (
    <AppContext.Provider
      value={{
        cid,
        setCid,
        data,
        setData
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: node
}

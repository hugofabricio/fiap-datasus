import React, { useContext } from 'react'

import { AppContext } from '@contexts/appContext'

const HomeView = () => {
  const { cid } = useContext(AppContext)

  return (
    <>
      <div>{cid && <p>{cid}</p>}</div>
    </>
  )
}

export default HomeView

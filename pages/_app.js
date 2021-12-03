import React from 'react'
import '../styles/tailwind.css'

const App = ({ Component, PageProps }) => {
  return <Component {...PageProps} />
}

export default App

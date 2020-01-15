import React from 'react'

import mainImage from '~/images/main.png'
import download from '~/images/download.jpg'

const App = () => {
  return (
    <div>
      <h1>Hello word!</h1>
      <img src={mainImage} />
      <img src={download} />
    </div>
  )
}

export default App

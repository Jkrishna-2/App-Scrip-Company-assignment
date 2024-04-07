import React from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import ProductGrid from './ProductGrid.js'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App

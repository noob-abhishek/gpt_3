import React from 'react'
import { Footer, Blog, Possibility, Wgpt, Header, Features } from './containers'
import { CTA, Brand, Navbar  } from './components'
import './App.css';
import './normal.css';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Wgpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      

    </div>
  )
}

export default App

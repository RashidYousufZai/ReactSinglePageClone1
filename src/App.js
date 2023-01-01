import './App.css';

import {CTA , Brand , Navbar} from './component'
import {Blog , Features, Footer, Header, Possiblity, WhatGPT} from './container'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

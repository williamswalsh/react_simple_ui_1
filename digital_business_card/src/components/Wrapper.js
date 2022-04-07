import React from 'react'
import Profile from './Profile';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const Wrapper = () => {
  return (
    <div className='container'>
        <div className='space-above-profile'></div>
        <Profile />
        <About />
        <Interests />
        <Footer />
    </div>
  )
}
export default Wrapper;

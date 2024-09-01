import React from 'react'

import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
    <div >
       <NavBar/>
       <Banner/>
       <Freebook/>
       <Footer/>
       </div>
    </>
  );
}

export default Home

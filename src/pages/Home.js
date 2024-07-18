// import React from 'react'
import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar/Navbar';
import Head from '../components/Head/Head';
import Courses from '../components/Course/courses'
import Data from '../components/data/Data'
import Info from '../components/info/Info'
import Contact from '../components/Contact/Contact';
function Home({infoScroll}) {
  return (
    <div className="">
       
      <Head/>
      <Courses/>
      <Data/>
      <Info infoScroll={infoScroll} />
      <Contact/>
    </div>
  )
}

export default Home

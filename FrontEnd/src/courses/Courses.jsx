import React from 'react'
import NavBar from '../components/NavBar'
import Course from '../components/course'
import Footer from '../components/footer'

function Courses() {
  return (
    <>
    <NavBar/>
    <div className="min-h-screen">
    <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses

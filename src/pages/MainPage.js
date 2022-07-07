import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import './Pages.css'
import RightSide from './RightSide'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <Header/>
      <div className='mainpage'>
      <Main/>
      <div>
      <Link to='/'>
      <h2>Repositories</h2>
      </Link>
      <RightSide/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

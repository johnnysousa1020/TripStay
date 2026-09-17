import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import FeaturedHotels from './components/FeaturedHotels'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import HotalDetails from './pages/HotelDetails'
import MyReservations from './pages/MyReservations'
import FlighSearch from './components/FlightSearch'
import TripSummary from './components/TripSummary'
import Favorites from './pages/Favorites'
import Offers from './pages/Offers'
import './App.css'

function Home(){
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [searchData, setSearchData] = useState(null)

  return (
    <>
      <Header />
      <Hero />
      <FlighSearch onSearch={setSearchData} onSelectFlight={setSelectedFlight} selectedFlight={selectedFlight}/>
      <Destinations />
      <FeaturedHotels onChooseHotel={setSelectedHotel} selectedHotel={selectedHotel}/>
      <TripSummary selectedFlight={selectedFlight} selectedHotel={selectedHotel} searchData={searchData}/>
      <Benefits />
      <Footer />
    </>
  )
}

function App() {
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/hotel/:id' element={<HotalDetails />}/>

      <Route path='/minhas-resevas' element={<MyReservations />}/>

      <Route path='/favorites' element={<Favorites />}/>

      <Route path='/ofertas' element={<Offers />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

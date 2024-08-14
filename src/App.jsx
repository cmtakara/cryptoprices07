import './App.css'
// import Route and Routes 
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import Welcome from './pages/Welcome';

// You need to have <Routes></Routes> (this is plural and has a beginning and ending tag 
//    because it wraps all of the routes)
// <Route /> is singular (no s) and it is self-closing
//    <Route /> requires both the path, which tells us what is in the url bar
//    and the element which tells us what we are rendering

function App() {


  return (
    <>
      <Nav/>

      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/currencies' element={<Currencies />}/>
        <Route path='/price' element={<Price/>} />
      </Routes>

    <Footer />
    </>
  )
}

export default App

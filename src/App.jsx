import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Presentation from './components/Presentation/Presentation';
import Search from './components/Search/Search';
import Products from './components/Products/Products';
import img from './Images/imgCentral.png';
import Footer from './components/Footer/Footer';

const App = () => {
  const Informed = () =>{
    return (
      <section className='container-informed'>
      <h2>Don't miss out on the latest AI tools and updates! Sign up now to stay informed and ahead of the curve.</h2>
      <section>
        <input type='text' placeholder='Email'/>
        <button>Join us!</button>
      </section>
      <div className='img'><img src={img} alt='img'/></div>
      </section>
    )
  }
  return (
    <main className='App'>
      <NavBar />
      <Presentation/>
      <Search/>
      <Products/>
      <Informed/>
      <Footer/>
    </main>
  )
}

export default App
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Presentation from './components/Presentation/Presentation';
import Search from './components/Search/Search';
import Products from './components/Products/Products';

const App = () => {
  return (
    <main className='App'>
      <NavBar />
      <Presentation/>
      <Search/>
      <Products/>
    </main>
  )
}

export default App
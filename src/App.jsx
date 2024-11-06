import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Ensures each page has the nav and footer.
function App() {
  return (
    <>
      <Nav />
      <main className="container my-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
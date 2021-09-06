import React from 'react';
import Navbar from 'components/Navabr';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';

function App() {
  return (    
      <>
        <Navbar />
        <div className="container">
          <DataTable />
        </div>
        <Footer />
      </> 
  ); 
}

export default App;

import React from 'react';
import Navbar from 'components/Navabr';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';
import BarCharts from './components/BarChats';
import DonutChart from './components/DonutChart';

function App() {
  return (    
      <>
        <Navbar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de Vendas</h1>
          
          <div className="row py-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <BarCharts />
          </div>
          <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
            <DonutChart />
          </div>
          </div>
          <div className="py-3">
            <h2 className="text-primary">Todas vendas</h2>
          </div>
          <DataTable />
        </div>
        <Footer />
      </> 
  ); 
}

export default App;

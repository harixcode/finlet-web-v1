// App.tsx

import React from 'react';
import './App.css';
import PercentageCalculator from './components/percentage/percentage_calculator.tsx';
import { AppBar, Box } from '@mui/material';
import ResponsiveAppBar from './components/header/Appbar.tsx';
import Footer from './components/footer/footer.tsx';
import PercentageChangeCalculator from './components/percentage/percentage_change.tsx';
const App: React.FC = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <section className="new-section"><PercentageCalculator /></section>
      <section className="new-section">
        <PercentageChangeCalculator /></section>
      
      {/* Footer */}
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}> 
        <Footer/>
      </Box>
    </div>
    
  );
}

export default App;

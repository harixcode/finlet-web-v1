// App.tsx

import React from 'react';
import './App.css';
import PercentageCalculator from './components/percentage/percentage_calculator.tsx';
import { AppBar, Box, Container } from '@mui/material';
import ResponsiveAppBar from './components/header/Appbar.tsx';
import Footer from './components/footer/footer.tsx';
import PercentageChangeCalculator from './components/percentage/percentage_change.tsx';
const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ResponsiveAppBar/>
      <Container sx={{ mt: 4, flex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <PercentageCalculator />
          <PercentageChangeCalculator />
        </Box>
      </Container>
      
      {/* Footer */}
      <Box
          sx={{
            py: 2,
            px: 3,
            mt: "auto",
          }}> 
        <Footer/>
      </Box>
    </div>
    
  );
}

export default App;

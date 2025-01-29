import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';


const Footer = () => {
    return (

    <Box
    component="footer"
    sx={{
      py: 2,
      px: 3,
      mt: "auto",
      bgcolor: "primary.main",
      color: "white",
      textAlign: "center",
    }}
  >
    <Typography
            variant="h6"
            noWrap
            component="a">
            GitHub: <a  href="https://github.com/harixcode" >harixcode</a>
          </Typography>
    </Box>
  );
}
export default Footer;

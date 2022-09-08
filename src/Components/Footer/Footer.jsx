import React from 'react';
import Typography from '@mui/material/Typography';

const date= new Date();
const current_year = date.getFullYear();
  
const style_footer = {
    textAlign: "center",
    // position:"absolute",
    // bottom:"0",
    // right:"0",
    // left:"0"
    color:"white",
    width: "auto",
    margin: "auto",
    marginBottom: "30px",
    textDecoration: "underline"
  };

const Footer = () => {
  return (
    <>
      <Typography variant="body1" sx={style_footer}>
        Spraxa Solution Pvt. Ltd. &copy; {current_year}
      </Typography>
    </>
  )
}
export default Footer;
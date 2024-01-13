import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div>
        <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpa8s8VOuOVy7ZKTf5G1r--wpa-tqrYiIKkU4b-4VqWUGV4txp_DC2UK_7qc5YE0A2oI&usqp=CAU"'
              height='30'
              alt=''
              loading='lazy'
            />
           <Typography variant="h5" color="text.secondary" component="div">
            Discount Calculator
          </Typography>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
    </div>
  )
}

export default Header

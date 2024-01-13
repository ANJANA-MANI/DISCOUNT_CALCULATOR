import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div><MDBFooter className=' text-center text-white'style={{backgroundColor:"#CD6155"}}>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: '#EC7063 ' }}>
      © 2024 Copyright:
      <a className='text-white' href='https://mdbootstrap.com/'>
       Discount.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer

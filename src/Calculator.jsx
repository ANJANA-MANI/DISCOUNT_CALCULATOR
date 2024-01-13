import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
function Calculator() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [savings, setSavings] = useState(0)
  const [show, setShow] = useState('none');

  const calculateAmount = (e) => {
    if (price == 0) {
      alert('Please enter the price');
    }
    else if (discount == 0) {
      alert('Please enter the discount');
    }
    else {
      const output = price - (price * discount / 100);
      setAmount(output);
      const save = price - output;
      setSavings(save);
      setShow('block')
    }


  }
  const reset = (e) => {

    setAmount(0);
    setDiscount(0);
    setPrice(0);
    setSavings(0)
    setShow('none');
  }

  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', margin: '50px',backgroundSize:"contain",
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundImage:`url(https://img.freepik.com/premium-vector/cash-back-loyalty-program-bonus-pile-coins-credit-card-mobile-phone-with-button-get-started-cashback-saving-money-flat-illustration-vector_128772-1872.jpg)` }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">

          </Typography>
          <Typography variant="h4" color="text.secondary" component="div">
            Shop Wisely
          </Typography>
          <br></br>


          <div>
            <TextField id="standard-basic" value={price || ""} label="Price" variant="standard" onChange={(e) => { setPrice(e.target.value) }} />
            <br></br>
            <TextField id="standard-basic" value={discount || ""} label="Discount %" variant="standard" onChange={(e) => {
              setDiscount(e.target.value)
            }
            } />
          </div>

        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

          <IconButton aria-label="play/pause" onClick={e => { calculateAmount(e) }}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next" onClick={e => { reset(e) }}>
            <CancelIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400 }}
        image="img1.png"
        alt="salesman"

      />

      <Typography component="div" width="320px" color="text.secondary" className="net"
       display={show} marginLeft="250px" style={{
        backgroundSize:"cover",
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat', 
        backgroundImage:'url(bill.png)',
        
      }}
      >
      <div style={{marginTop:"130px"}}>
      <span style={{ color: "#273746", fontSize: "25px" }}> Net Amount :&#8377;{amount}</span><br></br>
      <span style={{ color: "#273746", fontSize: "25px" }}>Actual Price:&#8377;{price}</span><br></br>
      <span style={{ color: "#273746", fontSize: "25px" }}>Savings:&#8377;{savings}</span><br></br>
      </div>

       
      </Typography>

    </Card>
  );
}

export default Calculator
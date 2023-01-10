// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(false)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/4f882bc58f02cd55ff47"} alt='Profile Pic' />
              <Box>
                <Typography variant='h4' sx={{ marginTop: 5 }}>
                  Bearbanner
                </Typography>

                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Bannerbear is a powerful automated image and video generation tool that can be used by a variety of businesses
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth label='Company Name' inputProps={{ readOnly: true }} aria-readonly="true" placeholder='johnDoe' defaultValue='Bearbanner' />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField fullWidth label='Program Website' inputProps={{ readOnly: true }} aria-readonly="true" placeholder='johnDoe' defaultValue='https://www.bannerbear.com/affiliate/' />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth label='Profit Margin / Sale' inputProps={{ readOnly: true }} aria-readonly="true" placeholder='johnDoe' defaultValue='5-10%' />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              multiline
              inputProps={{ readOnly: true }}
              label='Program Description'
              placeholder='Description'
              defaultValue='
Bannerbear is a powerful automated image and video generation tool that can be used by a variety of businesses


Businesses can use it to automate parts of their content creation process, freeing up their time and saving them money


We have round the clock customer support, a fully documented API and a Knowledge Base with hundreds of articles'
            />
          </Grid>




          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={e => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              12 upvotes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Start Promoting
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount

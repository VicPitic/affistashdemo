// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

const TabSecurity = () => {
  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // Handle Current Password
  const handleCurrentPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }

  const handleMouseDownCurrentPassword = event => {
    event.preventDefault()
  }

  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  const handleMouseDownNewPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  const handleMouseDownConfirmNewPassword = event => {
    event.preventDefault()
  }

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    multiline
                    inputProps={{ readOnly: true }}
                    label='📞 Cold Calling Script'
                    defaultValue='
                      Hello, am I speaking to the owner of {company name}...? 
                      &#10;
                      &#10;
                      My name is {name} and I am representing Bearbanner, a company that helps copmanies in the eCommerce industry
                      grow their online presence through automated content. 

                      ...

                      Since I noticed you have a nice online presence I strongly belive that you value your company`s online image, so I would 
                      like to introduce you to our tool that can save you a lot of time and money ...   
                    
                    '
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    multiline
                    inputProps={{ readOnly: true }}
                    label='📧 Cold Email Script'
                    defaultValue='
                    Hello, am I speaking to the owner of {company name}...? 
                      &#10;
                      &#10;
                      My name is {name} and I am representing Bearbanner, a company that helps copmanies in the eCommerce industry
                      grow their online presence through automated content. 

                      ...

                      Since I noticed you have a nice online presence I strongly belive that you value your company`s online image, so I would 
                      like to introduce you to our tool that can save you a lot of time and money ...   
                    '
                  />
                </FormControl>
              </Grid>

            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
            <img width={183} alt='avatar' height={256} src='/images/pages/pose-m-1.png' />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>


        <Box sx={{ mt: 11 }}>

          <Typography variant='body2'>
            Did you find these scripts useful?
          </Typography>
          <br />
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            Definetily
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='secondary'
            onClick={() => setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })}
          >
            Not Really
          </Button>
        </Box>
      </CardContent>
    </form>
  )
}

export default TabSecurity

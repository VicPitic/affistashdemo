// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Typography } from '@mui/material'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)

  return (
    <CardContent sx={{
      display: 'inline-flex', flexWrap: 'wrap',

    }} spacing={7}>

      <Grid container xs={12} sm={6} spacing={5}>
        <Grid item xs={12} sm={12}><h2>💡 Marketing tips</h2></Grid>
        <Grid item xs={12} sm={12}>

          <TextField
            fullWidth
            inputProps={{ readOnly: true }}
            multiline
            label='Marketing Approach'
            minRows={2}
            placeholder='Bio'
            defaultValue='For promoting Bannerbear our experts would recommend the following path: Target eCommerce people that create lots of content on Social Media or that have a big online audience and pitch the automation services that Bannerbear offers. You can also abuse the power of blogs and get yourself listed in a bunch of tech articles.'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            inputProps={{ readOnly: true }}
            label='Target Age Group'
            placeholder='Target Age Group'
            defaultValue='35-40'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            inputProps={{ readOnly: true }}
            label='Target Gender'
            placeholder='https://example.com/'
            defaultValue='Male'
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel>Target Location</InputLabel>
            <Select label='Country' defaultValue='USA'>
              <MenuItem value='USA'>USA</MenuItem>
              <MenuItem value='UK'>UK</MenuItem>
              <MenuItem value='Australia'>Australia</MenuItem>
              <MenuItem value='Germany'>Germany</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id='form-layouts-separator-multiple-select-label'>Best Promotion Platforms</InputLabel>
            <Select
              multiple
              defaultValue={['English']}
              id='account-settings-multiple-select'
              labelId='account-settings-multiple-select-label'
              input={<OutlinedInput label='Languages' id='select-multiple-language' />}
            >
              <MenuItem value='English'>Blogs</MenuItem>
              <MenuItem value='French'>TikTok</MenuItem>
              <MenuItem value='Spanish'>PPC Ads</MenuItem>
              <MenuItem value='Portuguese'>Youtube Influencers</MenuItem>
            </Select>
          </FormControl>
        </Grid>



      </Grid>
      <Grid container xs={12} sm={6} spacing={5}>
        <Grid item xs={12} sm={12}><h2>⚡ Media Content</h2></Grid>
        <Grid item xs={12} sm={12}>
          <center>
            <iframe style={{ borderRadius: "10px", width: "105%", margin: '15px' }} height="315" src="https://www.youtube.com/embed/tIqh3AfITdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </center>
        </Grid>

      </Grid>

      <Grid container xs={12} sm={6} spacing={5} sx={{ marginTop: 3.5 }}>
        <Grid item xs={12}>
          <Typography variant='body2'>
            Did you find these tips useful?
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
        </Grid>
      </Grid>


    </CardContent>
  )
}

export default TabInfo

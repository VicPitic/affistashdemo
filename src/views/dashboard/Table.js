// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'


const rows = [
  {
    age: 27,
    icon: "https://giddyup.io/wp-content/uploads/2021/03/GiddyUp_wordmark_orange_RGB-2.svg",
    status: 'current',
    date: '09/27/2018',
    name: 'GiddyUp',
    salary: '$$$',
    email: 'giddyup.io/',
    designation: 'Human Resources Assistant'
  },
  {
    icon: "https://www.dfogpc.com/assets/image/584ea331-0cd2-4c48-85d9-737f9dddfa0b/619225ef564a93080805e42a/1fd79669-16fb-4960-80cc-b2677e854748/logo.png.webp",
    age: 61,
    date: '09/23/2016',
    salary: '$',
    status: 'professional',
    name: 'DFO Global',
    email: 'dfogpc.com/contact-us',
    designation: 'Nuclear Power Engineer'
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfiSS2PKCVI-T4Uv9v44nawgPtiwaZ71d3rnIWxQy5g&s",
    age: 59,
    date: '10/15/2017',
    name: 'Amazon Associates',
    status: 'rejected',
    salary: '$$',
    email: 'affiliate-program.amazon.com/',
    designation: 'Environmental Specialist'
  },
  {
    icon: "https://partnernetwork.ebay.com/images/EPN_Logo_2.png",
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$',
    name: 'eBay ',
    email: 'partnernetwork.ebay.com',
    designation: 'Sales Representative'
  },
  {
    icon: "https://www.digital1to1.com/wp-content/uploads/2019/09/widitrade.png",
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$$$',
    name: 'Widitrade',
    designation: 'Operator',
    email: 'publishers.widitrade.com/signup/'
  },
  {
    icon: "https://audiotheme.com/content/uploads/shareasale-logo.jpg",
    age: 33,
    date: '08/25/2017',
    salary: '$$',
    name: 'ShareASale',
    status: 'professional',
    email: 'www.shareasale.com',
    designation: 'Senior Cost Accountant'
  },
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Product Price</TableCell>
              <TableCell>Profit Margin</TableCell>
              <TableCell>Industry</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (

              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>

                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Link href='/program'>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <br />

                      <img width={"100px"} src={row.icon}></img>
                      <br />
                      <Typography variant='caption'>{row.name}</Typography>
                      <br />
                    </Box>
                  </Link>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable

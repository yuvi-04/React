import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px', bgcolor: '#FFFDD0'}}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow sx={{ bgcolor: '#FC0FC0'}}>
                    <TableCell sx={{ bgcolor: 'inherit'}}>Id</TableCell>
                    <TableCell sx={{ bgcolor: 'inherit'}}>First Name</TableCell>
                    <TableCell sx={{ bgcolor: 'inherit'}}>Last Name</TableCell>
                    <TableCell sx={{ bgcolor: 'inherit'}}>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row) => {
                        return (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [
    {
    id: 1,
    first_name: "Kinsley",
    last_name: "Dulin",
    email: "kdulin0@facebook.com",
    gender: "Male",
    ip_address: "187.22.135.116"
    }, {
    id: 2,
    first_name: "Helena",
    last_name: "Gillooly",
    email: "hgillooly1@meetup.com",
    gender: "Female",
    ip_address: "44.22.132.247"
  }, {
    id: 3,
    first_name: "Dominga",
    last_name: "Wreakes",
    email: "dwreakes2@google.co.jp",
    gender: "Female",
    ip_address: "67.173.62.180"
  }, {
    id: 4,
    first_name: "Myrah",
    last_name: "Trett",
    email: "mtrett3@gov.uk",
    gender: "Female",
    ip_address: "254.130.139.50"
  }, {
    id: 5,
    first_name: "Heywood",
    last_name: "Longshaw",
    email: "hlongshaw4@imgur.com",
    gender: "Male",
    ip_address: "5.128.130.130"
  }, {
    id: 6,
    first_name: "Louella",
    last_name: "Issac",
    email: "lissac5@scientificamerican.com",
    gender: "Polygender",
    ip_address: "34.143.42.204"
  }, {
    id: 7,
    first_name: "Eamon",
    last_name: "MacGorrie",
    email: "emacgorrie6@mashable.com",
    gender: "Male",
    ip_address: "1.220.40.124"
  }, {
    id: 8,
    first_name: "Sherwynd",
    last_name: "Houselee",
    email: "shouselee7@blog.com",
    gender: "Male",
    ip_address: "0.191.219.233"
  }, {
    id: 9,
    first_name: "Del",
    last_name: "Scay",
    email: "dscay8@nhs.uk",
    gender: "Male",
    ip_address: "115.233.141.25"
  }, {
    id: 10,
    first_name: "Adelina",
    last_name: "Skoyles",
    email: "askoyles9@oaic.gov.au",
    gender: "Female",
    ip_address: "190.205.149.181"
  }]

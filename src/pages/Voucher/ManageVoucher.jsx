import React from 'react'
import styles from "./Voucher.module.css"
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const rows = [
  {
    id: 1,
    image: "https://img.freepik.com/premium-vector/vector-gift-voucher-design-template-gift-voucher-template-promotion-sale-discount_471203-861.jpg"
  }
];
export default function ManageVoucher() {
  return (
    <div className={styles.AddSliderContainer}>
      <h4>Manage Voucher</h4>
      <div className={styles.uploadContainer}>
        <div className={styles.TableContainer}>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="td" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="td" scope="row">
                      <img src={row.image} alt="boys play chess" />
                    </TableCell>
                    <TableCell align="right">
                      <Button color='error' variant="contained"> Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

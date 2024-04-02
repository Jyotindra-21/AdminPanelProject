import React from 'react'
import styles from "./Slider.module.css"
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
    image: "https://i.pinimg.com/originals/6f/99/0e/6f990ef112d7ab8ffc8cb9ca27633c9f.jpg"
  }
];
export default function ManageSliderImage() {
  return (
    <div className={styles.AddSliderContainer}>
      <h4>Manage Slider Image</h4>
      <div className={styles.uploadContainer}>
        <div className={styles.TableContainer}>
          {/* <table border={1}>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="https://i.pinimg.com/originals/6f/99/0e/6f990ef112d7ab8ffc8cb9ca27633c9f.jpg" alt="boys play chess" /></td>
                <td>

                </td>
              </tr>
            </tbody>
          </table> */}
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

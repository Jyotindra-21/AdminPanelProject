import React from 'react'
import styles from "./Slider.module.css"
import { Button } from '@mui/material'
export default function ManageSliderImage() {
  return (
    <div className={styles.AddSliderContainer}>
      <h4>Manage Slider Image</h4>
      <div className={styles.uploadContainer}>
        <div className={styles.TableContainer}>
          <table border={1}>
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
                  <Button color='error'  variant="contained"> Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

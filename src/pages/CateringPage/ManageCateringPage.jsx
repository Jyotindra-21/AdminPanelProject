import React from 'react'
import styles from "./CateringPage.module.css"
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ManageCateringPage() {
  return (
    <div className={styles.CateringContainer}>
      <h4>Manage Catering Page</h4>
      <div className={styles.uploadContainer}>
        <div>
          <label htmlFor="TermConditions">Terms & Conditions</label>
          <div className={styles.Add_form}>
            <input type="text" id='TermConditions' placeholder='Terms & Conditions' />
            <Button variant='contained' color='primary'>ADD</Button>
          </div>
        </div>
        <div>
          <div className={styles.Terms_Cards}>
            <div className={styles.Card}>
              <h5>This is Term and condition</h5>
              <div>
                <IconButton aria-label="delete" color="primary">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit" color="primary">
                  <EditIcon />
                </IconButton>
                {/* <Button variant='contained'></Button>
                <Button variant='contained'></Button> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <label htmlFor="callToAction">Call to action button</label>
            <div className={styles.Add_form}>
              <input type="text" id='callToAction' placeholder='call to action' />
              <Button variant='contained' color='primary'>Update</Button>
            </div>
          </form>
        </div>
        <Button variant='contained' color='primary'>Save</Button>
      </div>
    </div>
  )
}

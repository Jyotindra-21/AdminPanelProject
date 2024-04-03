import React from 'react'
import styles from "./FAQ.module.css"
import { Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ManageFAQ() {
  return (
    <div className={styles.Faq_Main}>
      <h4>Manage FAQ</h4>
      <div className={styles.faq_container}>
        <div className={styles.FAQ_Card}>
          <div className={styles.Card_content}>
            <h3><span> Question :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quia?</h3>
            <h3><span> Answer :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error unde soluta, dolor autem perspiciatis iusto iste libero corrupti. Quia!</h3>
            <h3><span>Categorized : </span> Category 1 </h3>
          </div>
          <div className={styles.Card_action}>
            <IconButton aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" color="primary">
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )

}

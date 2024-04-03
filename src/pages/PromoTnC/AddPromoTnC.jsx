import React from 'react'
import styles from "./PromoTnC.module.css"
import { Button } from '@mui/material'

export default function AddPromoTnC() {
  return (
    <div className={styles.Faq_Main}>
      <h4>Add Promo TnC</h4>
      <div className={styles.faq_container}>
        <form>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="FAQQuestionCategory">Promo Category</label>
            <select className={styles.form_select} name="Category" id='FAQQuestionCategory'>
              <option value="" disabled>Select Category</option>
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
              <option value="cat3">Category 3</option>
            </select>
          </div>
          <h6 className={styles.Or_}>OR</h6>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="addCat"></label>
            <input className={styles.form_input} id='addCat' type="text" placeholder='Add New Category' />
          </div>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="title">Title</label>
            <input className={styles.form_input} id='tile' type="text" placeholder='Enter Title' />
          </div>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="des">Description</label>
            <textarea className={styles.form_input} name="des" id="des" cols="30" rows="6" placeholder='Description'></textarea>
          </div>
          <div className={styles.Control_form}>
            <label className={styles.form_label} >
              <Button className={styles.Button_add} variant='contained' color='primary' >ADD</Button>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

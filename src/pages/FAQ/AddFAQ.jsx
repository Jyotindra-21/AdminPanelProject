import React from 'react'
import styles from "./FAQ.module.css"
import { Button } from '@mui/material'

export default function AddFAQ() {
  return (
    <div className={styles.Faq_Main}>
      <h4>Add FAQ</h4>
      <div className={styles.faq_container}>
        <form>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="FAQQuestionCategory">FAQ Question Category</label>
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
            <label className={styles.form_label} htmlFor="question">Question</label>
            <input className={styles.form_input} id='question' type="text" placeholder='Enter Question' />
          </div>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="answer">Answer</label>
            <textarea className={styles.form_input} name="answer" id="answer" cols="30" rows="6"></textarea>
          </div>
          <div className={styles.Control_form}>
            <label className={styles.form_label} htmlFor="answer">
              <Button className={styles.Button_add} variant='contained' color='primary' >ADD</Button>
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

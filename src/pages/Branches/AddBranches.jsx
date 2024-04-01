import React from 'react'
import styles from "./Branches.module.css"
import { Button } from '@mui/material'

export default function AddBranches() {
  return (
    <div className={styles.BranchesContainer}>
      <h4>Add Branches</h4>
      <div className={styles.FormContainer}>
        <form action="">
          <div className={styles.form_control}>
            <div className={styles.form_label}><label htmlFor="branch">Branch Name</label></div>
            <div className={styles.form_input}><input type="text" id="branch" placeholder='Branch Name' /></div>
          </div>
          <div className={styles.form_control}>
            <div className={styles.form_label}><label htmlFor="branch_address">Address</label></div>
            <div className={styles.form_input}><textarea name="branchAddress" id="branch_address" cols="30" rows="4" placeholder='Branch Address'></textarea></div>
          </div>
          <div className={styles.form_control}>
            <div className={styles.form_label}><label htmlFor="branch_address">Operation Hours</label></div>
            <div className={styles.form_input}>
              <div style={{ display: "flex" }}>
                <div className={styles.form_control_sub}>
                  <div className={styles.form_label}><label htmlFor="fromHour">From</label></div>
                  <div className={styles.form_input}>
                    <select name="FromHour" id="fromHour">
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                    </select>
                  </div>
                </div>
                <div className={styles.form_control_sub}>
                  <div className={styles.form_label}><label htmlFor="ToHour">To</label></div>
                  <div className={styles.form_input}><select name="ToHour" id="TOHour">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                  </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form_control}>
            <div className={styles.form_label}><label htmlFor="location">Location Link <br /> (Google Map)</label></div>
            <div className={styles.form_input}><input type="text" id="location" placeholder='Location' /></div>
          </div>
          <div className={styles.form_control}>
            <div className={styles.form_label}><label htmlFor="waze_link">Waze Link</label></div>
            <div className={styles.form_input}><input type="text" id="waze_link" placeholder='waze link' /></div>
          </div>
          <div className={styles.form_control}>
            <div className={styles.form_label}> <Button variant='contained' color='primary' >Add Branch</Button> </div>
          </div>
        </form>
      </div>
    </div>
  )
}

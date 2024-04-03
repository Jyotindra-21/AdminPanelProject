import React, { useState } from 'react'
import styles from "./CateringCourse.module.css"
import Box from '@mui/material/Box';
import CateringCourseCard from '../../components/CateringCourseCard/CateringCourseCard';

export default function ManageCateringCourse() {
  return (
    <div className={styles.AddMenuItemContainer}>
      <h4>Manage Catering Course</h4>
      <div className={styles.ManageContainer}>
        <Box sx={{ maxWidth: 180, marginLeft: "auto", marginBottom: "10px" }}>
        </Box>

        <CateringCourseCard
          img={`https://img.freepik.com/premium-vector/vector-gift-voucher-design-template-gift-voucher-template-promotion-sale-discount_471203-861.jpg`}
          title={`Course Title`}
          pricePerPax={`20`}
          description={`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`} />
      </div>
    </div>
  )
}

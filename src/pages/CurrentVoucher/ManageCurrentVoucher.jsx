import React, { useState } from 'react'
import styles from "./CurrentVoucher.module.css"
import Box from '@mui/material/Box';
import CurrentVoucherCard from '../../components/CurrentVoucherCard/CurrentVoucherCard';



export default function ManageCurrentVoucher() {

  return (
    <div className={styles.AddMenuItemContainer}>
      <h4>Manage Current Voucher</h4>
      <div className={styles.ManageContainer}>
        <Box sx={{ maxWidth: 180, marginLeft: "auto", marginBottom: "10px" }}>
        </Box>

        <CurrentVoucherCard
          img={`https://img.freepik.com/premium-vector/vector-gift-voucher-design-template-gift-voucher-template-promotion-sale-discount_471203-861.jpg`}
          title={`Voucher Title`}
          validity={`25-04-2024`}
          VoucherCode={`1245-2132-3659`}
          description={`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`} />
      </div>
    </div>
  )
}

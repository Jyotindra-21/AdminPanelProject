import React from 'react'
import styles from "./Voucher.module.css"
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function AddVoucher() {


  return (
    <div className={styles.AddSliderContainer}>
      <h4>Add Voucher</h4>
      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          <CloudUploadIcon className={styles.ImageUploadIcon}  />
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            color="secondary"
          >
            Select Image
            <VisuallyHiddenInput type="file" />
          </Button>

        </div>
        <Button  color="primary" variant="contained">Upload </Button>
      </div>
    </div>
  )
}

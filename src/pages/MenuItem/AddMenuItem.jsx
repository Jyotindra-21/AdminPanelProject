import React from 'react'
import styles from "./MenuItem.module.css"
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
const TitleInput = styled('input')({
    width: "100%",
    padding: "10px",
    borderRadius:"10px",
    fontSize:"18px"
})
const DescriptionTextarea = styled('textarea')({
    width:"100%",
    borderRadius:"10px",
    padding:"10px",
    fontSize:"18px"
})
export default function AddMenuItem() {
    return (
        <div className={styles.AddMenuItemContainer}>
            <h4>Add Menu Item</h4>
            <div className={styles.uploadContainer}>
                <form className={styles.uploadBox}>
                    <CloudUploadIcon className={styles.ImageUploadIcon} />
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

                    <TitleInput type="text" placeholder='Title' />
                    <DescriptionTextarea name="" id="" cols="30" rows="5" placeholder='Description' />
                    <Button color="primary" variant="contained">Upload </Button>
                </form>
            </div>
        </div>
    )
}

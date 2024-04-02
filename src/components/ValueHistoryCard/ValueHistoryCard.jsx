import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from "./ValueHistoryCard.module.css"
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

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
export default function ValueHistoryCard({ img, description }) {
    return (
        <Card className={styles.Value_History_Card}>
            <img className={styles.cardImage} src={img} />
            <CardContent className={styles.Card_content}>
                <div>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        color="primary">
                        Re Upload Image
                        <VisuallyHiddenInput type='file' />
                    </Button>
                </div>
                <textarea className={styles.textarea_filed} cols="30" rows="8" placeholder='Description' defaultValue={description}></textarea>
            </CardContent>
        </Card>
    )
}

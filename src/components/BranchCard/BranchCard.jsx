import React from 'react'
import styles from "./BranchCard.module.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function BranchCard({ name, details, operationHour, mapLink }) {
    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                <h3>{name}</h3>
                <p>{details}</p>
                <h3>Operation Hour : {operationHour}</h3>
                <h3>Map Link : <Link to={mapLink}>{mapLink}</Link></h3>
            </div>
            <div className={styles.card_bottom}>
                <Button variant='contained' style={{ marginRight: "20px" }} color="primary">Edit</Button>
                <Button variant='contained' style={{ marginRight: "20px" }} color="error">Delete</Button>
            </div>
        </div>
    )
}

import React from 'react'
import Box from '@mui/material/Box';
import styles from "./AboutUs.module.css"
import { Button, Divider } from '@mui/material';
import ValueHistoryCard from '../../components/ValueHistoryCard/ValueHistoryCard';

export default function AboutUs() {
    return (
        <div className={styles.AboutContainer}>
            <h4>Manage About us Page</h4>
            <div className={styles.uploadContainer}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                        <div className={styles.form_control}>
                            <label htmlFor="introduction_id">Introduction</label>
                            <textarea className={styles.form_filed} name="introduction" id="introduction_id" cols="30" rows="6" placeholder='Introduction..' defaultValue={`Some introduction Here`}></textarea>
                        </div>
                        <div className={styles.form_control}>
                            <label htmlFor="title_id">Title</label>
                            <input type='text' className={styles.form_filed} name="title" id="title_id" cols="30" rows="10" placeholder='Some Sample Title' />
                        </div>
                        <div style={{ padding: "20px 0" }}>
                            <Button variant='contained' color='primary'>Update</Button>
                        </div>
                </Box>
            </div>
            {/* History section */}
            <Divider sx={{ width: "80%" }} />
            <h4>History Section</h4>
            <div className={styles.uploadContainer}>
                <ValueHistoryCard
                    img={`https://media.istockphoto.com/id/134955466/photo/mans-hand-moves-white-knight-into-position-on-chessboard.jpg?s=612x612&w=0&k=20&c=0THrZYfetu-u_kyDv1ZHTHkWpRsKCldWah3iTxhI0-Y=`}

                    description={`Some Sample description`}
                />
            </div>
            {/* Mission section */}
            <Divider sx={{ width: "80%" }} />
            <h4>Mission Section</h4>
            <div className={styles.uploadContainer}>
                <textarea className={styles.form_filed} cols="30" rows="8" placeholder='Mission..' defaultValue={`Some mission here`}></textarea>

            </div>
            {/* Value section */}
            <Divider sx={{ width: "80%" }} />
            <h4>Value Section</h4>
            <div className={styles.uploadContainer}>
                <ValueHistoryCard
                    img={`https://media.istockphoto.com/id/134955466/photo/mans-hand-moves-white-knight-into-position-on-chessboard.jpg?s=612x612&w=0&k=20&c=0THrZYfetu-u_kyDv1ZHTHkWpRsKCldWah3iTxhI0-Y=`}
                    description={`This is some description`}
                />
            </div>
        </div>
    )
}

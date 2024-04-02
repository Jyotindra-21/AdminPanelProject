import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./CateringCourseCard.module.css"

export default function CateringCourseCard({ img, title, description,pricePerPax  , id }) {
  return (
    <Card className={styles.Menu_Item_Card}>
      <img className={styles.cardImage} src={img}  />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price Per Pax : {pricePerPax}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <div>
          <Button style={{ marginRight: "5px" }} color='primary' variant='contained'>Edit</Button>
          <Button style={{ marginRight: "5px" }} color="error" variant='contained' >Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
}
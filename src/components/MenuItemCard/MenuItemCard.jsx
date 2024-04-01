import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./MenuItemCard.module.css"

export default function MenuItemCard({ img, title, description, id }) {
  return (
    <Card sx={{ maxWidth: "100%", display: "flex", border: "2px solid #ccc" }}>
      <img className={styles.cardImage} src={img}  />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
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
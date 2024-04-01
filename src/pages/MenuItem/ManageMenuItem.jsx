import React, { useState } from 'react'
import styles from "./MenuItem.module.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
export default function ManageMenuItem() {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className={styles.AddMenuItemContainer}>
      <h4>Manage Menu Item</h4>
      <div className={styles.ManageContainer}>
        <Box sx={{ maxWidth: 180, marginLeft: "auto", marginBottom: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Category 1</MenuItem>
              <MenuItem value={100}>Category 2</MenuItem>
              <MenuItem value={1000}>Category 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <MenuItemCard
          img={`https://media.istockphoto.com/id/134955466/photo/mans-hand-moves-white-knight-into-position-on-chessboard.jpg?s=612x612&w=0&k=20&c=0THrZYfetu-u_kyDv1ZHTHkWpRsKCldWah3iTxhI0-Y=`}
          title={`Boy play chess`}
          description={`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`} />
      </div>
    </div>
  )
}

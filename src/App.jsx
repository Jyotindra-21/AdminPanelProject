import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AddSliderImage from './pages/Slider/AddSliderImage';
import ManageSliderImage from './pages/Slider/ManageSliderImage';
import AddMenuItem from './pages/MenuItem/AddMenuItem';
import ManageMenuItem from './pages/MenuItem/ManageMenuItem';
import AboutUs from './pages/AboutUs/AboutUs';
import AddBranches from './pages/Branches/AddBranches';
import ManageBranches from './pages/Branches/ManageBranches';
import AddVoucher from './pages/Voucher/AddVoucher';
import ManageVoucher from './pages/Voucher/ManageVoucher';
import AddCurrentVoucher from './pages/CurrentVoucher/AddCurrentVoucher';
import ManageCurrentVoucher from './pages/CurrentVoucher/ManageCurrentVoucher';
import AddCateringCourse from './pages/CateringCourse/AddCateringCourse';
import ManageCateringCourse from './pages/CateringCourse/ManageCateringCourse';
import ManageCateringPage from './pages/CateringPage/ManageCateringPage';
import AddFAQ from './pages/FAQ/AddFAQ';
import ManageFAQ from './pages/FAQ/ManageFAQ';
import AddPromoTnC from './pages/PromoTnC/AddPromoTnC';
import ManagePromoTnC from './pages/PromoTnC/ManagePromoTnC';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* HEADER */}
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      {/* SIDEBAR */}
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />


      <Main open={open}>
        <DrawerHeader />

        {/* ROUTES START */}
        <Routes>
          <Route path="/" element={<Dashboard />} >
          </Route>
          <Route path="/slider/add-slider-image" element={<AddSliderImage />} />
          <Route path="/slider/manage-slider-image" element={<ManageSliderImage />} />
          <Route path="/menu/add-menu-item" element={<AddMenuItem />} />
          <Route path="/menu/manage-menu-item" element={<ManageMenuItem />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/branch/add-branches" element={<AddBranches />} />
          <Route path="/branch/manage-branches" element={<ManageBranches />} />
          <Route path="/voucher/add-voucher" element={<AddVoucher />} />
          <Route path="/voucher/manage-voucher" element={<ManageVoucher />} />
          <Route path="/voucher/add-current-voucher" element={<AddCurrentVoucher />} />
          <Route path="/voucher/manage-current-voucher" element={<ManageCurrentVoucher />} />
          <Route path="/catering/add-catering-course" element={<AddCateringCourse />} />
          <Route path="/catering/manage-catering-course" element={<ManageCateringCourse />} />
          <Route path="/catering/manage-catering-page" element={<ManageCateringPage />} />
          <Route path="/faq/add-faq" element={<AddFAQ />} />
          <Route path="/faq/manage-faq" element={<ManageFAQ />} />
          <Route path="/promo/add-promo-tnc" element={<AddPromoTnC />} />
          <Route path="/promo/manage-promo-tnc" element={<ManagePromoTnC />} />


        </Routes>
        {/* ROUTES END */}
      </Main>
    </Box>
  );
}





import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MenuIcon from "@mui/icons-material/Menu";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AppsIcon from "@mui/icons-material/Apps";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export const SideMenuData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />
  },
  {
    id: 2,
    title: "Slider",
    path: "/",
    icon: <SlideshowIcon />,
    subNav: [
      {
        id: 201,
        title: "Add Slider Image",
        path: "/slider/add-slider-image",
        icon: <AddCircleOutlineRoundedIcon />,
      },
      {
        id: 202,
        title: "Manage Slider Image",
        path: "/slider/manage-slider-image",
        icon: <EditRoundedIcon />,
      },
    ],
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    icon: <MenuIcon />,
    subNav: [
      {
        id: 301,
        title: "Add Menu Item",
        path: "/menu/add-Menu-item",
        icon: <AddCircleOutlineRoundedIcon />,
      },
      {
        id: 302,
        title: "Manage Menu Item",
        path: "/menu/manage-menu-item",
        icon: <EditRoundedIcon />,
      },
    ],
  },
  {
    id: 4,
    title: "About Us",
    path: "/about-us",
    icon: <AcUnitIcon />,
  },
  {
    id: 5,
    title: "Branches",
    path: "/Branches",
    icon: <AppsIcon />,
    subNav: [
      {
        id: 501,
        title: "Add Branches",
        path: "/branch/add-branches",
        icon: <AddCircleOutlineRoundedIcon />,
      },
      {
        id: 502,
        title: "Manage Branches",
        path: "/branch/manage-branches",
        icon: <EditRoundedIcon />,
      },
    ],
  },
];

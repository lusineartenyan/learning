import HouseIcon from '@mui/icons-material/House';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarItems = [
    {
        path: "/",
        name: "Home",
        icon: <HouseIcon/>
    },
    {
        path: "/menu",
        name: "Menu",
        icon: <RestaurantIcon/>
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <SettingsIcon/>
    }
];
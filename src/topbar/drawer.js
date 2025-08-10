import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { closeDrawerSideBar } from '../appState/action';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Diversity3SharpIcon from '@mui/icons-material/Diversity3Sharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import InsertPhotoSharpIcon from '@mui/icons-material/InsertPhotoSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';

function DrawerSidebar() {
    const theme = useTheme();
    const drawerSidebarState = useSelector((state) => state.drawerSidebarState);
    const { openDrawerSidear } = drawerSidebarState
    const dispatch = useDispatch()
    const toggleDrawer = (toggle) => () => {
        dispatch(toggle)
    };

    const renderDrawerIcons = (conditionParam) => {
        switch (conditionParam) {
            case 0:
                return <HomeSharpIcon />;
                break;
            case 1:
                return <Diversity3SharpIcon />;
                break;
            case 2:
                return <OndemandVideoSharpIcon />;
                break;
            case 3:
                return <InsertPhotoSharpIcon />;
                break;
            case 4:
                return <LocalPostOfficeSharpIcon />;
                break;
            case 5:
                return <ForumSharpIcon />;
                break;
            case 6:
                return <GroupAddSharpIcon />;
                break;
            default:
                break;
        }
    }

    const DrawerList = (
        <Box
            sx={{
                width: "250px",
            }}
            role="presentation"
            onClick={toggleDrawer(closeDrawerSideBar())}
        >
            <List>
                {['Home', "Friends List", 'Your Videos', 'Your Photos', 'Your Posts', 'Messages', 'Friend Requests'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    renderDrawerIcons(index)
                                }
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            open={openDrawerSidear}
            onClose={toggleDrawer(closeDrawerSideBar())}
            disableScrollLock
            sx={{
                zIndex: 1202,
                [theme.breakpoints.up('md')]: {
                    display: "none"
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
}
export default DrawerSidebar

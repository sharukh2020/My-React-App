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
import { useTheme } from '@mui/material/styles';

export default function Sidebar() {
    const theme = useTheme();

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
    return (
        <Drawer
            variant="permanent"
            sx={{
                height: "90vh",
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: "100%", boxSizing: 'border-box' },
                "& .MuiPaper-root": {
                    position: "relative"
                },
                [theme.breakpoints.up("md")]: {
                    position: "fixed",
                    left: 0,
                    top: "10vh",
                    zIndex: 1201,
                    minWidth: "250px"
                },
                [theme.breakpoints.down("md")]: {
                    display: "none"
                },

            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['Home', "Friends List", 'Your Videos', 'Your Photos', 'Your Posts', 'Messages', 'Friend Requests'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        renderDrawerIcons(index)
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

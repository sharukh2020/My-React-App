import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
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

export default function TemporaryDrawer({
    toggle, toggleHandle
}) {
    const [open, setOpen] = React.useState(toggle);
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
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleHandle(false)}>
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
    );

    React.useEffect(() => {
        setOpen(toggle)
    }, [toggle])

    return (
        <div>
            <Drawer open={open} onClose={toggleHandle(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

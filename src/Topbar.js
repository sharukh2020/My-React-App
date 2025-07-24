import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import TemporaryDrawer from './drawer';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


function Topbar() {
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };
    return (
        <Box
            component={"div"}
            sx={{
                height: "10vh",
                backgroundColor: theme.palette.primary.dark,
                boxShadow: theme.shadows[3],
                [theme.breakpoints.down('sm')]: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }
            }}
        >
            <Box
                component={"div"}
                sx={{
                    width: "10%",
                    height: "10vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    [theme.breakpoints.up('sm')]: {
                        display: "none"
                    }
                }}
            >
                <MenuSharpIcon
                    sx={{
                        color: "white",
                        "&:hover": {
                            color: "grey"
                        }
                    }}
                    onClick={toggleDrawer(true)}
                />
            </Box>
            <TemporaryDrawer toggle={openDrawer} toggleHandle={toggleDrawer} />
            <Autocomplete
                disablePortal
                size="small"
                options={['Home', "Friends List", 'Your Videos', 'Your Photos', 'Your Posts', 'Messages', 'Friend Requests']}
                sx={{
                    width: {
                        xs: "60%",
                        sm: "360px"
                    },
                    margin: "0 10%",
                    border: "none",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    },
                    "& .MuiOutlinedInput-notchedOutline ": {
                        border: "none"
                    },
                    "& .MuiFormLabel-root": {
                        color: "#67696b"
                    },

                }
                }
                renderInput={(params) => <TextField
                    {...params}
                    label="Search"
                    sx={{
                        "& .MuiFormLabel-root , .MuiSvgIcon-root": {
                            color: 'grey'
                        }
                    }}
                />}
            />
            <Box sx={{
                width: "10%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 25, height: 25 }}></Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        disableScrollLock
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            </Box>

        </Box>
    );
}

export default Topbar;



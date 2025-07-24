import * as React from 'react';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

function Searchfield() {
    return (
        <Autocomplete
            disablePortal
            size="small"
            options={['Home', "Friends List", 'Your Videos', 'Your Photos', 'Your Posts', 'Messages', 'Friend Requests']}
            sx={{
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
    )
}

export default Searchfield
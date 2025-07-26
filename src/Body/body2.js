import React, { useState } from 'react';
import axios from 'axios';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import MultiActionAreaCard from './card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Body2() {
    const theme = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

    return (
        <Box
            sx={{
                position: "relative",
                left: "250px",
                top: "10vh",
                // marginTop: 2,
                [theme.breakpoints.down("md")]: {
                    left: 0,
                },
                [theme.breakpoints.up("md")]: {
                    width: 'calc(100vw - 266px)'
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 2,
                paddingBottom: 2,
            }}>
            <Box sx={{
                boxShadow: 5,
                [theme.breakpoints.down("sm")]: {
                    width: "90%"
                },
                width: "400px"
            }}
            >
                <form onSubmit={handleSignIn}>
                    <Grid
                        container
                        sx={{
                            padding: {
                                xs: 2,
                                sm: 5
                            }
                        }}
                        spacing={2}
                    >
                        <Grid
                            size={12}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    color: "grey",
                                }}
                            >
                                Sign In
                            </Typography>
                        </Grid>
                        <Grid
                            size={12}
                        >
                            <TextField
                                size="small"
                                label="Email"
                                helperText="Please enter your Email"
                                sx={{
                                    width: "100%",
                                }}
                                required={true}
                                name={"email"}
                                type={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid
                            size={12}
                        >
                            <TextField
                                size="small"
                                label="Password"
                                helperText="Please enter your password"
                                sx={{
                                    width: "100%",
                                }}
                                required={true}
                                name={"password"}
                                type={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>

                        <Grid
                            size={12}
                        >
                            <Button
                                sx={{
                                    width: "100%",
                                    padding: 0
                                }}
                                variant="contained"
                            >
                                <input type={"submit"} style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    color: "white",
                                    fontSize: "16px",
                                    width: "100%",
                                    padding: 10
                                }} />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

export default Body2
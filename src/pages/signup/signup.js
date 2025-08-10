import { useState } from "react";
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Firebase
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUpPage() {
    const theme = useTheme();

    // Handling Firebase SignUp
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    return (
        <Box
            component={"form"}
            onSubmit={handleSignUp}
            sx={{
                width: "300px",
                [theme.breakpoints.down("sm")]: {
                    width: "250px"
                },
                padding: 2,
                boxShadow: theme.shadows[3],
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    width: "100%",
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    marginBottom: 2
                }}
            >
                Sign Up
            </Typography>
            <TextField
                size="small"
                label="Email"
                helperText="Please enter your Email"
                sx={{
                    width: "100%",
                    marginBottom: 2
                }}
                required={true}
                name={"email"}
                type={"email"}
                value={email}
                // Setting state for email
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                size="small"
                label="Password"
                helperText="Please enter your password"
                sx={{
                    width: "100%",
                    marginBottom: 2
                }}
                required={true}
                name={"password"}
                type={"password"}
                value={password}
                // Setting state for password
                onChange={(e) => setPassword(e.target.value)}
            />
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
        </Box>
    )
}

export default SignUpPage
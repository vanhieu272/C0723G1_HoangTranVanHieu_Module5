import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import * as Yup from "yup";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ContactForm() {
    const formContact = useFormik(
        {
            initialValues: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            validationSchema: Yup.object({
                name: Yup.string()
                    .min(2, 'Too Short!')
                    .max(40, 'Too Long!')
                    .required('Required'),
                email: Yup.string().email()
                    .required('Required'),
                phone: Yup.string().matches(/^0[0-9]{9}$/).required('Required'),
                message: Yup.string().required('Required'),
            }),
            onSubmit: (values) => {
                alert(JSON.stringify(values, null, 2));
            },
        }
    )


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Contact Form
                    </Typography>
                    <Box component="form" noValidate onSubmit={formContact.handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    value={formContact.values.name}
                                    onChange={formContact.handleChange}
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    error={formContact.touched && formContact.errors.name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={formContact.values.email}
                                    onChange={formContact.handleChange}
                                    autoComplete="email"
                                    error={formContact.touched && formContact.errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    value={formContact.values.phone}
                                    onChange={formContact.handleChange}
                                    label="Phone number"
                                    type="text"
                                    id="phone"
                                    error={formContact.touched && formContact.errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="message"
                                    value={formContact.values.message}
                                    onChange={formContact.handleChange}
                                    label="Message"
                                    type="text"
                                    id="message"
                                    error={formContact.touched && formContact.errors.message}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
import React, { useState, useEffect } from "react";
import {
    FormControl,
    Button,
    InputLabel,
    input,
    FormHelperText,
    Grid,
    CardHeader,
    Card,
    Style,
    CardContent,
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleConfirmar = () => {

        if (email != "aula10@gmail.com" && senha != "123")
            return alert("E-mail: aula10@gmail.com\nSenha: 123")

        navigate("/tarefas")
    }

    return (
        <Grid container spacing={1}>
            <Card sx={style}>
                <CardHeader
                    title="Login"
                    subheader="Entre na sua conta"
                />
                <CardContent sx={{
                    width: '95%',
                    maxWidth: '100%',
                }}>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormHelperText id="login_email_helper_text">Email:</FormHelperText>
                            <input id="login_email" aria-describedby="login_email_helper_text" value={email} onChange={e => { setEmail(e.target.value) }} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <FormHelperText id="login_senha_helper_text">Senha</FormHelperText>
                            <input id="login_senha" aria-describedby="login_senha_helper_text" value={senha} onChange={e => { setSenha(e.target.value) }} />
                        </FormControl>
                    </Grid>

                    <Grid sx={styleButto} container mt={2}>
                        <Grid item xs={1}>
                            <Button
                                size="small"
                                variant="contained"
                                endIcon={<SendIcon />}
                                onClick={handleConfirmar}>Enviar
                            </Button>


                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid >

    );
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '10%',
    bgcolor: 'background.paper',
    p: 5,
};

const styleButto = {
    width: '100',
};


export default Login;
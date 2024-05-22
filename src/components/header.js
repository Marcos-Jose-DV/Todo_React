import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

function Header() {

  const handleLogin = () => {
    alert("E-mail: aula10@gmail.com\nSenha: 123")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*  
              <MenuIcon />
              */}
          </IconButton>
          <Typography variant="h6" padding={4} component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
            <Button
              padding={20}
              size="small"
              variant="contained"
              color='success'
              onClick={handleLogin}>Ver credenciais
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
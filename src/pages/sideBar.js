import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";




export default function ClippedDrawer() {


  const mystyle = {
    backgroundColor: "#4864fc",
    padding: 20,
    fontFamily: "Arial",
    margin: 30,
    boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
    borderRadius: 16,
  }


const home = <Link  
to={`/`}
style={{color: "#ffffff"}}
> Home </Link>

const funcionarios = <Link  
to={`/funcionarios`}
style={{color: "#ffffff"}}
> Funcionários </Link>

const novoFunc = <Link  
to={`/createnewemployee`}
style={{color: "#ffffff"}}
> Novo funcionário </Link>


  return (


    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
            IronOffice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
 
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <div
          style={{
            margin: 0,
            padding: 10,
            minHeight: '90vh',
            position: "fixed",
            top: 55,
            bottom: 60,
            width: "300px",
            boxSizing: "initial",
            backgroundColor: "#1B2631",
            linkColor: "#ffffff",
            boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
            borderRadius: 18,
          }}
  >
          <List>
            {[home, funcionarios, novoFunc].map((text, index) => (
              <ListItem style={mystyle} button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <PeopleAltIcon />}
                </ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
              ))}
            
          </List>
          </div>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
    
  );
}


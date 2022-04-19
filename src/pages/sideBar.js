import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


export default function ClippedDrawer() {


const home = <Link  
to={`/`}
> Home </Link>

const funcionarios = <Link  
to={`/funcionarios`}
> Funcionários </Link>

const novoFunc = <Link  
to={`/createnewemployee`}
> Novo funcionário </Link>


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            IronOffice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
 
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[home, funcionarios, novoFunc].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon /> : <PeopleAltIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

      </Box>
    </Box>
  );
}


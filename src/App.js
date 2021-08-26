import React from 'react'
import './App.css';
import TodoList from './Component/TodoList';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <CssBaseline/>
      <Container maxWidth="xl" disableGutters>
      <Typography variant="h6" component="h2">
      <div className={classes.root} >
       <Grid container 
       spacing={2} 
       lg={12} md={12} xs={12} 
       justifyContent="center" 
       alignItems="center" 
       >
           <Grid item  className="Appset">
         <Paper className={classes.paper}>
         <TodoList/>
         </Paper>
         </Grid>
       </Grid>
       </div>
       </Typography>
      </Container>
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './todoform.css'
import SearchTodoList from "./TodoSearch";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin:theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}))

const getLocalItem=()=>{
    let list=localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }
    else 
       return [];
}

function TodoForm(props) {
    const classes = useStyles;

    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [test,setTest] = useState(false);
    const inputRef = useRef(null);
    const [inputdata,setInputData] = useState('');

    const handleSearch=(e)=>{
        setInputData(e.target.value);
    }

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    };
    
    const clickTest=(e)=>{
        setTest(!test)
    }
    

    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <> 
                              
                       <Typography variant="h4" component="h2" align="left">
                                <Paper className={classes.paper}>
                                    <TextField
                                        type="text"
                                        value={input}
                                        name="text"
                                        placeholder="Add a task"
                                        onChange={handleChange}
                                        ref={inputRef}
                                        style={{ borderBottom: "none" }}
                                        className={classes.margin}
                                    />
                                </Paper>
                            </Typography>

                            <div className={classes.root}>
                                    
                              <Paper className={classes.paper}>
                              <div className="todoform-button">
                                  
                                <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start" >
                              <Grid item lg={12} md={12} xs={12}>
                                 <Button
                                 fullWidth="true"
                                    variant="none"
                                    className="todo-button"
                                  >
                                    <div className="todoform-button-item">#Edit</div>
                                </Button>
                              </Grid>
                              </Grid>
                                </div>
                              </Paper>
                            </div>

 
                    </>
                ) :
                    (
                        <>
                           
                            <Typography variant="h4" component="h2" align="left">
                                <Paper className={classes.paper}>
                                    <TextField
                                        type="text"
                                        autoComplete="off"
                                        value={input}
                                        name="text"
                                        placeholder="Add a task"
                                        onChange={handleChange}
                                        ref={inputRef}
                                        style={{ borderBottom: "none" }}
                                        className={classes.margin}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AddIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Paper>
                            </Typography>

                                  <SearchTodoList/>
                                 <Button
                                 type="submit"
                                 fullWidth="true"
                                    variant="none"
                                    value={test}
                                    onClick={clickTest}
                                  >
                                </Button>
                        </>
                    )
                }
            </form>
        </>

    )
}

export default TodoForm
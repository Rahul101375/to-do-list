import React, { useState,useEffect } from 'react'
import TodoForm from './TodoForm'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import './todo.css'



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}))


function Todo({ todos, completeTodo, removeTodo, updateTodo }) {


    const classes = useStyles();

    const [dekha,setDisplay] = useState();
    const [store,setStore] = useState([]);
    
    // const refInput=useRef(null);
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

     
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    
    const handleRadio=(e)=>{
        setDisplay(e.target.value)

        const sets=e.target.value
        setStore([sets,...store])
    }


    return (
        
        <>
        <Typography variant="h6" component="h2">
            <Paper className={classes.Paper}>
       { todos.map((todo, index) => (
            <div
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
            >
                        <Grid container spacing={2}>
                            <Grid item lg={10} md={10} xs={10} justifyContent="flex-start" alignItems="flex-start">
                               <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
                                   <Grid item lg={1} md={1} xs={1}>
                                <div>
                                    {todo.text !== null || todo.text !== undefined || todo.text.length()>0 ?
                                  <div key={todo.id} >
                                  <input
                                        type="radio"
                                        value={todo.text}
                                        onChange={handleRadio}
                                        name="radiovalues"
                                        size="small"
                                    />

                                    </div>
                                    :
                                     ' '
                                 }
                                </div>
                                </Grid>
                                <Grid item >
                                <div key={todo.id}
                                    onClick={() => completeTodo(todo.id)}
                                >
                                    {todo.text}
                                </div>
                                </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={1} md={1} xs={1}>
                                {/* <div className='icons'> */}
                                <div
                                    onClick={() => removeTodo(todo.id)}
                                    className="delete-icon"
                                >
                                    <DeleteForeverIcon/>
                                </div>
                            </Grid>
                            <Grid item lg={1} md={1} xs={1}>
                                <div
                                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                                    className='edit-icon'>
                                    <EditIcon />
                                </div>
                            </Grid>
                        </Grid>
            </div>
        ))
            }
        </Paper>
        </Typography>

    {dekha ? 
      <>
      <div>
          <ul>
             <div className="Completed"> Completed</div>
              <Typography variant="h6" component="h2">
            <Paper className={classes.Paper}>
                 <Grid container spacing={0} alignItems="center" justifyContent="flex-start">
                     <Grid item  spacing={0}>
                         <Radio
                         checked="true"
                         color="default"
                         />
                     </Grid>
                     <Grid item >
                           <div style={{display:"block"}}>
                               {
                               new Set(store)
                           }
                           </div>
                     </Grid>
                 </Grid>
                </Paper>
                </Typography>
          </ul>
      </div>
      </>

     :
     ''
    }
        </>
    )
}

export default Todo
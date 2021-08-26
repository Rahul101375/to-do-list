import React,{useState,useEffect} from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from "./TodoForm";
import Todo from './Todo';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import './todolist.css'
// import SearchTodoList from './TodoSearch';

const getLocalItem=()=>{
    let list = localStorage.getItem('lists')

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else return [];
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function TodoList(props){
    const classes=useStyles();

    const[todos,setTodos] = useState(getLocalItem);

    // const[searchTerm,setSearchTerm] = useState('');
    // const[searchResult,setSearchResult] = useState([]);
     
    const addTodo= (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);

    };

    // const searchHandler=(searchTerm)=>{
    //     setSearchTerm(searchTerm);
    //     if(searchTerm !== ''){
    //         const newSearch = todos.filter((nSearch)=>{
    //             return Object.values(nSearch)
    //                  .join(" ")
    //                  .toLowerCase()
    //                  .includes(searchTerm.toLowerCase());
    //         });
    //         setSearchResult(newSearch);
    //     }
    //     else{
    //         setSearchResult(todos);
    //     }
    // };

    const updateTodo = (todoId,newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item=>(item.id === todoId ? newValue : item)))
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const handleReset=()=>{
        setTodos([]);
    }

   const completeTodo = id =>{
       let updatedTodos = todos.map(todo=>{
           if(todo.id === id){
               todo.isComplete = !todo.isComplete;
           }
           return todo;
       });

       setTodos(updatedTodos);
   };

   useEffect(()=>{
       localStorage.setItem('lists',JSON.stringify(todos))
   },[todos]);

    return(
        <>
        
        <div className={classes.root}>
            <Typography 
            variant="h5" 
            align="left" 
            style={{textTransform:"none"}}
            >
                To do list
             </Typography>

             <Typography  component="h2" align="right" >
                <Button>
                <div className={classes.root}>
                   <Button variant="contained"
                   onClick={handleReset}
                   style={{textTransform:"none",color:"#5bc29e"}}
                   >
                      <RefreshIcon/> 
                      <div className="Reset-button">Reset all tasks</div>
                   </Button>
                   </div>
                </Button>
             </Typography>
            </div>

                <TodoForm
                onSubmit={addTodo}
                />
                 {/* <SearchTodoList 
                 todos={searchTerm.length < 1 ? todos : searchResult }
                 term={searchTerm}
                 searchKeyword={searchHandler}
                 /> */}
                <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                />
        </>
    )
}

export default TodoList

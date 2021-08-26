import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const getLocalItem=()=>{
    let list = localStorage.getItem('lists')

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else return [];
}

const SearchTodoList=(props)=>{

      const [checks,setChecks]=useState(getLocalItem);
       
    return(
        <>
        <div>
            {
                checks.map((item,index)=>{
                    <div key={index}>{item === props.name ? '':props.name}</div>
                })
            }
        </div>
        </>
    )
}

export default SearchTodoList

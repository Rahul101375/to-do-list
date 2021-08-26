// import React, { useEffect, useRef, useState } from 'react'
// import TodoForm from './TodoForm'
// import TodoList from './TodoList'

// // const getLocalItem=()=>{
// //     let list = localStorage.getItem('lists')

// //     if(list){
// //         return JSON.parse(localStorage.getItem('lists'))
// //     }
// //     else return [];
// // }

// const SearchTodoList=(props)=>{
    
//     const inputEl=useRef("");

//     const getSearchTerm=()=>{
//         props.searchKeyword(inputEl.current.value)
//     }


//     return(
//         <>

//         <div>
//             <input
//             ref={inputEl}
//             type="text"
//             value={props.term}
//             onChange={getSearchTerm}
//             />
//         </div>
//         </>
//     )
// }

// export default SearchTodoList

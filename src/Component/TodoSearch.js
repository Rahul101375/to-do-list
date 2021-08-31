import React, { useRef, useState } from 'react'
import './todosearch.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: theme.spacing(2),
        color: theme.palette.text.secondary,
    },

}))

const localStorageData = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    }
    else {
        return [];
    }
    console.log(JSON.parse(localStorage.getItem('lists')));
}

function SearchTodoList() {

    const classes = useStyles();
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState(localStorageData);
    const [word, setWord] = useState();


    const handleFilter = (e) => {

        const searchWord = e.target.value;
        setWord(searchWord);
        const newfilter = data.filter((value) => {
            return value.text.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === " ") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newfilter);
        }
    }

    const clearInput = () => {
        setFilteredData(['']);
        setWord('');

    }


    return (
        <>
            <div className={classes.root}>
                <Typography variant="h4" component="h2" align="left">
                    <Paper className={classes.paper}>
                        <TextField
                            type="text"
                            autoComplete="off"
                            value={word}
                            name="text"
                            placeholder="Search To do List Items"
                            onChange={handleFilter}
                            style={{ borderBottom: "none" }}
                        />
                        {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                        {filteredData.length != 0 && (
                            <div className="dataResult">
                                {filteredData.map((value, index) => {
                                    return (
                                        <div key={index} >
                                            {value.text}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Paper>
                </Typography>
            </div>
        </>
    )
}
export default SearchTodoList
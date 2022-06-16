import React from 'react';
import './Header.css';
import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import categories from '../../data/category';


const Header = ({ category, setCategory, word, setWord, LightMode }) => {
    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: LightMode ? '#000' : '#fff'
            },
            type: LightMode ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

  return (
    <div className='header'>
        <span className='title'>{word ? word : "Anji Word Hunt"}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField id="standard-basic" className='search' label="Search for" variant="standard" value={word} onChange={(e) => setWord(e.target.value)}/>
                <TextField id='standard-select-currency' className='select' select label='Language' value={category} onChange={(e) => handleChange(e.target.value)}>
                   
                
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                </TextField>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header
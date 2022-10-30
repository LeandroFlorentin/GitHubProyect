import React, { useState } from "react";
import { IconButton, Stack, TextField, Switch } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux'
import { darkMode } from '../../redux/actions'

const Search = (props) => {
    const dispatch = useDispatch()
    const { setInputUser } = props;
    const [modo, setModo] = useState(false)
    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        setValueInput(inputValue)
    }

    const handleSubmit = () => {
        setInputUser(valueInput)
    }

    const darkModeOn = () => {
        dispatch(darkMode(!modo))
        setModo(!modo)
    }

    return (
        <Stack
            direction='row'
            width={{ sx: '100%', sm: '80%' }}
            sx={{
                marginTop: '30px',
            }}
        >
            <TextField
                size="small"
                id='outlined-basic'
                label='GitHub User'
                placeholder='Buscar usuario de GitHub'
                variant='outlined'
                value={valueInput}
                onChange={onSearchValueChange}
                sx={{
                    width: '100%',
                }}
            />
            <IconButton
                onClick={handleSubmit}
                sx={{
                    left: '-40px'
                }}>
                <SearchIcon size='small' />
            </IconButton>
            <Switch onClick={darkModeOn} />
        </Stack>
    )
}
export default Search;
import React, { useState, useRef } from 'react'
import { styled, makeStyles } from '@mui/styles'
import {
    Button,
    Card,
    Container,
    ImageList,
    ImageListItem,
    Typography,
    IconButton,
    Grid
} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        "& .MuiLinearProgress-bar": {
            borderRadius: '1.2rem',
        },
        "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: "#f1f1f1",
        },
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: props => props.barColor,
        },
    }
})

const SkillsProgressBar = ({value, ...props}) => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <LinearProgress variant='determinate' value={value} sx={{ width: { xs: '100%', md: '70%' }, height: '7px', borderRadius: '1.2rem' }} />
            <Typography sx={{ ml: 1, color: '#5e5c7f' }}>{value}%</Typography>
        </div>
    )
}

export default SkillsProgressBar
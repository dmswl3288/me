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
    Grid,
    Link,
    Dialog,
    DialogTitle,
} from '@mui/material'
import Fade from 'react-reveal/Fade'

const DetailWork = ({
    handleClose,
    open,
    title,
}) => {

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true}>
            <DialogTitle>{title}</DialogTitle>
            
        </Dialog>
    )
}

export default DetailWork
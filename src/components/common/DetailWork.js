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
    MobileStepper,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SwipeableViews from 'react-swipeable-views'

const DetailWork = ({
    handleClose,
    open,
    work,
    activeStep,
    setActiveStep,
}) => {

    const handleStepChange = (step) => {
        setActiveStep(step)
    }

    if (!work) return null

    const maxSteps = work.subImgSrc.length
    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true}>
            <DialogTitle
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}  
            >
                {work.title}
                <IconButton onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <SwipeableViews 
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {work.subImgSrc.map((src, i) => {
                    return (
                        <div key={i}>
                            <img 
                                src={src} 
                                style={{ width: '100%' }} 
                            />
                        </div>
                    )
                })}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ display: maxSteps > 1 ? 'flex' : 'none', justifyContent: 'center' }}
            />
        </Dialog>
    )
}

export default DetailWork
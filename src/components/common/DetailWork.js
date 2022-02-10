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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

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
        <Dialog 
            onClose={handleClose} 
            open={open} 
            fullWidth={true} 
            PaperProps={{ style: {
                borderRadius: 8,
            }}}
            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
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
            <div style={{ display: 'flex', padding: '0 16px 10px 16px', justifyContent: 'space-between' }}>
                <div>
                    <FavoriteBorderIcon sx={{ width: 30, height: 30, mr: 2}} />
                    <ModeCommentOutlinedIcon sx={{ width: 30, height: 30, mr: 2 }} />
                    <SendOutlinedIcon sx={{ width: 30, height: 30 }} />
                </div>
                <div>
                    <BookmarkBorderOutlinedIcon sx={{ width: 30, height: 30 }} />
                </div>
            </div>
            <div style={{ padding: '0 16px 10px 16px' }}>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'black', overflow: 'hidden', marginRight: 5, border: '3px solid #ffffff', zIndex: '2' }}>
                            <img 
                                src='assets/profile/profile_0.jpg'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'black', overflow: 'hidden', marginRight: 5, border: '3px solid #ffffff', marginLeft: '-18px', zIndex: '1' }}>
                            <img 
                                src='assets/profile/profile_1.jpg'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'black', overflow: 'hidden', marginRight: 5, border: '3px solid #ffffff', marginLeft: '-18px', zIndex: '0' }}>
                            <img 
                                src='assets/profile/profile_2.jpg'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                    <div>
                        <strong>me</strong>님&nbsp;<strong>외 여러 명</strong>이 좋아합니다
                    </div>
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#8e8e8e', padding: '14px 4px' }}>2021년 11월 13일</Typography>
            </div>
        </Dialog>
    )
}

export default DetailWork
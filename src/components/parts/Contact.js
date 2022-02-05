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
import './Contact.css'
import { Icon } from '@iconify/react'

const PageContainer = styled(Container)({
    // backgroundColor: '#f5f7f9 !important',
    backgroundColor: '#ffffff !important',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
})
const CardBox = styled(Card)({
    boxShadow: '0 5px 20px 0 rgb(69 67 96 / 10%) !important',
    borderRadius: '20px !important',
})

const Contact = () => {
    return (
        <PageContainer id='contact'>
            <img
                className='message-img'
                src='assets/contact/5661.png'
                width={250}
            />
            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 4 }}>CONTACT</Typography>
            <CardBox sx={{ p: 4 }}>
                <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="bx:bxs-phone" style={{ marginRight: '10px' }}/>+82 10 2881 9649
                </Typography>
                <Typography sx={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="ic:baseline-email" style={{ marginRight: '10px' }}/>dmswl3288@naver.com
                </Typography>
                <Typography sx={{ textAlign: 'left' }}>
                    <Icon icon="carbon:location-filled" style={{ marginRight: '10px' }}/>Bucheon-si, Gyeonggi-do, Republic of Korea
                </Typography>
            </CardBox>
        </PageContainer>
    )
}
   
export default Contact
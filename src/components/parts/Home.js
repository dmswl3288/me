import React, { useState, useRef } from 'react'
import Typewriter from 'typewriter-effect'
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
import './Home.css'

const PageContainer = styled('div')({
    // backgroundColor: '#f5f7f9 !important',
    minWidth: '100%',
    backgroundColor: '#ffff00 !important',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: '180px',
    // paddingBottom: '100px',
    paddingTop: '80px',
    height: '100vh',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, rgb(126, 108, 245) 0%, rgb(108, 163, 245) 100%)',
    color: '#fff',
})

const Home = () => {
 return ( 
     <PageContainer id='home'>
        <Typography variant="h4">I'm a</Typography>
        <Typography variant="h4">
            <Typewriter
                options={{
                    strings: ['Programmer', 'Software Developer', 'Software Engineer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </Typography>
        <Grid>
            <img
                className='updown-img'
                src='assets/home/5141097.png'
                width={400}
                height={400}
            />
        </Grid>
     </PageContainer>
 )
}

export default Home
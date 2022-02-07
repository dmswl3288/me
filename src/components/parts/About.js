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
import SchoolIcon from '@mui/icons-material/School'
import ComputerIcon from '@mui/icons-material/Computer'
import SkillsProgressBar from '../common/SkillsProgressBar'
import Fade from 'react-reveal/Fade'

const PageContainer = styled(Container)({
    // backgroundColor: '#f5f7f9 !important',
    backgroundColor: '#f9f9ff !important',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
})
const CardBox = styled(Card)({
    boxShadow: '0 5px 20px 0 rgb(69 67 96 / 10%) !important',
    textAlign: 'left', 
    padding: '15px', 
    borderRadius: '15px !important',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const About = () => {
    return (
        <div style={{ background: '#f9f9ff', minWidth: '100%' }}>
            <PageContainer id='about'>
                <Fade bottom>
                    <Typography variant='h5' sx={{ textAlign: 'left',fontWeight: 'bold' }}>
                        Education
                    </Typography>
                </Fade>
                <CardBox sx={{ mb: 2 }}>
                    <div style={{
                        border: '1px solid #ff4c60',
                        width: '0.1px',
                        height: '120px',
                        marginRight: '20px',
                        color: '#ff4c60',
                    }} >
                        <Fade bottom><SchoolIcon sx={{ marginLeft: '-12px' }}/></Fade>
                        <Fade bottom><SchoolIcon sx={{ marginLeft: '-12px', marginTop: '45px' }} /></Fade>
                    </div>
                    <div>
                        <Fade bottom><Typography sx={{ fontSize: '1.2rem' }}>Duksung Women's University</Typography></Fade>
                        <Fade bottom><Typography>IT Media Engineering</Typography></Fade>
                        <Fade bottom><Typography>2014.03 ~ 2019.02</Typography></Fade>

                        <Fade bottom><Typography sx={{ fontSize: '1.2rem' }}>Sangdong High School</Typography></Fade>
                        <Fade bottom><Typography>2011.03 ~ 2014.02</Typography></Fade>
                    </div>
                </CardBox>
                <Fade bottom>
                    <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                        Skills
                    </Typography>
                </Fade>
                <CardBox>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} md={6}>
                            <Fade bottom><Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', mb: 2 }}>Language</Typography></Fade>
                            <Fade bottom><Typography>C/C++</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>JAVA</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={85} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>C#</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>JAVASCRIPT</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>PHP</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>Go</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={30} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>Python</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={50} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>HTML</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                            <Fade bottom><Typography>css</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#6c6ce5' /></Fade>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Fade bottom><Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', mb: 2 }}>Tool</Typography></Fade>
                            <Fade bottom><Typography>React.js</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#ffd15c' /></Fade>
                            <Fade bottom><Typography>Unity3D</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#ffd15c' /></Fade>
                            <Fade bottom><Typography>Node.js</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={60} barColor='#ffd15c' /></Fade>
                            <Fade bottom><Typography>MySQL(MariaDB)</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={90} barColor='#ffd15c' /></Fade>
                            <Fade bottom><Typography>Spring Framework</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={60} barColor='#ffd15c' /></Fade>
                            <Fade bottom><Typography>Docker</Typography></Fade>
                            <Fade bottom><SkillsProgressBar value={50} barColor='#ffd15c' /></Fade>
                        </Grid>
                    </Grid>
                </CardBox>
            </PageContainer>
        </div>
    )
}
   
export default About
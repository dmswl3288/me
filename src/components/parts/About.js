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
                <Typography variant='h5' sx={{ textAlign: 'left',fontWeight: 'bold' }}>
                    Education
                </Typography>
                <CardBox sx={{ mb: 2 }}>
                    <div style={{
                        border: '1px solid #ff4c60',
                        width: '0.1px',
                        height: '120px',
                        marginRight: '20px',
                        color: '#ff4c60',
                    }} >
                        <SchoolIcon sx={{ marginLeft: '-12px' }}/>
                        <SchoolIcon sx={{ marginLeft: '-12px', marginTop: '45px' }} /> 
                    </div>
                    <div>
                        <Typography sx={{ fontSize: '1.2rem' }}>Duksung Women's University</Typography>
                        <Typography>IT Media Engineering</Typography>
                        <Typography>2014.03 ~ 2019.02</Typography>

                        <Typography sx={{ fontSize: '1.2rem' }}>Sangdong High School</Typography>
                        <Typography>2011.03 ~ 2014.02</Typography>
                    </div>
                </CardBox>
                <Typography variant='h5' sx={{ textAlign: 'left', fontWeight: 'bold' }}>
                    Skills
                </Typography>
                <CardBox>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', mb: 2 }}>Language</Typography>
                            <Typography>C/C++</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                            <Typography>JAVA</Typography>
                            <SkillsProgressBar value={85} barColor='#6c6ce5' />
                            <Typography>C#</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                            <Typography>JAVASCRIPT</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                            <Typography>PHP</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                            <Typography>Go</Typography>
                            <SkillsProgressBar value={30} barColor='#6c6ce5' />
                            <Typography>Python</Typography>
                            <SkillsProgressBar value={50} barColor='#6c6ce5' />
                            <Typography>HTML</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                            <Typography>css</Typography>
                            <SkillsProgressBar value={90} barColor='#6c6ce5' />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ fontSize: '1.15rem', fontWeight: 'bold', mb: 2 }}>Tool</Typography>
                            <Typography>React.js</Typography>
                            <SkillsProgressBar value={90} barColor='#ffd15c' />
                            <Typography>Unity3D</Typography>
                            <SkillsProgressBar value={90} barColor='#ffd15c' />
                            <Typography>Node.js</Typography>
                            <SkillsProgressBar value={60} barColor='#ffd15c' />
                            <Typography>MySQL(MariaDB)</Typography>
                            <SkillsProgressBar value={90} barColor='#ffd15c' />
                            <Typography>Spring Framework</Typography>
                            <SkillsProgressBar value={60} barColor='#ffd15c' />
                            <Typography>Docker</Typography>
                            <SkillsProgressBar value={50} barColor='#ffd15c' />
                        </Grid>
                    </Grid>
                </CardBox>
            </PageContainer>
        </div>
    )
}
   
export default About
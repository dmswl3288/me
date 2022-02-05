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
    padding: '15px',
    height: '270px',
    borderRadius: '15px !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})
const ActivityIcon = styled(Icon)({
    width: '60px', 
    height: '60px',
})

const Activity = () => {
    return (
        <PageContainer id='activity'>
            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 4 }}>Certifications and Awards</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardBox sx={{ backgroundColor: '#6c6ce5', color: '#fff', boxShadow: 'rgb(108 108 229 / 50%) 0px 5px 20px 0px' }}>
                        <ActivityIcon icon="teenyicons:certificate-solid" />
                        <Typography sx={{ marginTop: '1rem' }}>Engineer Information Processing</Typography>
                        <Typography>Human Resources Development Service of Korea</Typography>
                        <Typography>2018.11.16</Typography>
                    </CardBox>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardBox sx={{ backgroundColor: '#f9dc47', color: '#454360', boxShadow: 'rgb(249 215 76 / 50%) 0px 5px 20px 0px' }}>
                        <ActivityIcon icon="healthicons:award-trophy" />
                        <Typography sx={{ marginTop: '1rem' }}>창업아이디어 경진대회 최우수상</Typography>
                        <Typography>주관 - 창업진흥원, 중소벤처사업부, 스마트창작터</Typography>
                        <Typography sx={{ fontSize: '0.8rem' }}>AR을 이용한 실시간 FPS 총 게임 개발과 사업계획서를 작성하여 수상</Typography>
                        <Typography>2018.04.11</Typography>
                    </CardBox>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardBox sx={{ backgroundColor: '#f97b8b', color: '#fff', boxShadow: 'rgb(249 123 139 / 50%) 0px 5px 20px 0px' }}>
                        <ActivityIcon icon="healthicons:award-trophy" />
                        <Typography sx={{ marginTop: '1rem' }}>창의아이디어 공모전 동상</Typography>
                        <Typography>주관 - 덕성여자대학교 창업센터, 산학협력단</Typography>
                        <Typography sx={{ fontSize: '0.8rem' }}>ICT, IoT 관련 주제로 지하철 임산부배려석 인증머신을 아이디어로 사업계획서 및 기술문서를 작성하여 수상</Typography>
                        <Typography>2018.05.09</Typography>
                    </CardBox>
                </Grid>
            </Grid>
        </PageContainer>
    )
}
   
export default Activity
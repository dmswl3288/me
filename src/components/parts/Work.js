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
} from '@mui/material'
import Fade from 'react-reveal/Fade'
import DetailWork from '../common/DetailWork'

const PageLayout = styled('div')({
    minWidth: '100%', 
    backgroundColor: '#f5f7fd', 
    display: 'flex'
})
const PageContainer = styled(Container)({
    // backgroundColor: '#f5f7f9 !important',
    backgroundColor: '#f5f7fd !important',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '80px',
})
const CardBox = styled(Card)({
    boxShadow: '0 5px 20px 0 rgb(69 67 96 / 10%) !important',
    borderRadius: '20px !important',
})

const Work = () => {
    const [open, setOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState()
    const [activeStep, setActiveStep] = useState(0)

    const handleOpen = (work) => {
        setActiveStep(0)
        setSelectedWork(work)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <PageLayout>
            <PageContainer id='work'>
                <Fade bottom><Typography variant='h5' sx={{ fontWeight: 'bold' }}>My Works</Typography></Fade>
                <Typography>Development projects</Typography>
                <Typography>github URL : <a href='https://github.com/dmswl3288'>https://github.com/dmswl3288</a></Typography>
                <Typography sx={{ mb: 6 }}>* 타사의 영업비밀에 해당하는 일부 프로젝트는 비공개 주소입니다.</Typography>
                <Grid container spacing={2}>
                    {workData.map((work, index) => {
                        return (
                            <Grid item key={index} xs={12} md={4}>
                                <Fade bottom>
                                    <CardBox sx={{ p: 2 }}>
                                        <Button onClick={() => {handleOpen(work)}}>
                                            <img 
                                                src={work.mainImgSrc}
                                                width={300}
                                            />
                                        </Button>
                                        <div style={{ textAlign: 'left', marginTop: '25px' }}>
                                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{work.title}</Typography>
                                            {work.isAlone && <Typography sx={{ fontSize: '0.8rem' }}>1인 개발</Typography>}
                                            <Typography component={'div'} sx={{ fontSize: '0.8rem' }}>
                                                {work.description.split('\n').map((m, i) => {
                                                    return <div key={i}>{m}<br/></div>
                                                })}
                                                개발 언어 및 도구<br/>
                                                {work.languageAndTool.map((text, i) => {
                                                    return (
                                                        <div key={i}> - {text}</div>
                                                    )
                                                })}
                                                {work.link && (
                                                    <div>
                                                        <br/>참고<br/>
                                                        <a href='https://www.youtube.com/watch?v=sIoBtU8MuN4'>{work.link}</a>
                                                    </div>
                                                )}
                                            </Typography>
                                        </div>
                                    </CardBox>
                                </Fade>
                            </Grid>
                        )
                    })}
                </Grid>
                <DetailWork 
                    handleClose={handleClose} 
                    open={open} 
                    work={selectedWork} 
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                />
            </PageContainer>
        </PageLayout>
    )
}
   
export default Work

const workData = [
    {
        mainImgSrc: 'assets/work/Airlevel.png',
        subImgSrc: ['assets/work/Airlevel.png'],
        title: 'AirLevel 에어레벨',
        isAlone: true,
        description: '한국환경공단에서 제공하는 기본적인 미세먼지 수치를 매시간마다 확인 할 수 있으며, 그에 따른 (좋음/보통/나쁨/매우나쁨)단계를 나누어 위험도를 쉽게 알 수 있는 앱입니다.\n\n실시간으로 미세먼지 위성지도 확인이 가능하며, 다른 미세먼지 정보 사이트와 비교 할 수 있습니다.\n',
        languageAndTool: ['JAVA Programming', 'Android Studio', 'Open API']
    },
    {
        mainImgSrc: 'assets/work/TubeDown.png',
        subImgSrc: ['assets/work/TubeDown.png'],
        title: 'Tube Downloader',
        isAlone: true,
        description: '원하는 동영상을 다운받아 소장 가능한 어플리케이션입니다. 소장하고 싶은 영상이 맞는지 미리보기가 가능하며, 동영상 파일을 음원파일로 변환하여 저장할 수 있습니다.\n\n최신 영상이 매번 업데이트되어 확인할 수 있으며, 파일 이름을 사용자가 마음대로 설정하여 저장할 수 있습니다.\n',
        languageAndTool: ['JAVA Programming', 'Android Studio', 'YouTube Data API v3']
    },
    {
        mainImgSrc: 'assets/work/Secret.png',
        subImgSrc: ['assets/work/Secret.png'],
        title: 'Secret',
        isAlone: true,
        description: '누구에게 알리고 싶지 않는 나만의 공간 Secret입니다. 남몰래 하고 싶은 일이나 버킷리스트, 해야 할 일 등을 메모해 두어 비밀을 유지하세요. 내가 가지고 있는 각 사이트의 수많은 아이디와 비밀번호를 한 곳에 모아 비밀을 유지하세요.\n\n자주 깜박깜박 잊어버리는 아이디와 비밀번호를 안전한 곳에 보관하여 기억이 나지 않을 때마다 로그인 인증을 통해 나만의 정보를 확인할 수 있습니다.\n',
        languageAndTool: ['JavaScript, PHP, JAVA', 'React-Native / Navigation', 'MySQL', 'Android Studio']
    },
    {
        mainImgSrc: 'assets/work/ShootingStar.png',
        subImgSrc: ['assets/work/ShootingStar.png'],
        title: '슈팅스타',
        isAlone: false,
        description: '슈팅스타는 기존 FPS 게임에 증강현실(AR)기술을 더한 모바일 대전게임입니다. 사용자는 다른 기기 필요없이 방을 만들거나 이미 만들어진 방에 들어가 상대와 겨루어 승패를 얻게 됩니다.\n\n이 게임은 졸업작품을 위해 제작된 학과 프로젝트입니다.\n',
        languageAndTool: ['C# Programming', 'Unity3D', 'Vuforia SDK', 'Photon Cloud']
    },
    {
        mainImgSrc: 'assets/work/ReBrain.png',
        subImgSrc: ['assets/work/ReBrain.png'],
        title: '리브레인 RE-Brain : 기억게임',
        isAlone: true,
        description: '짧은 시간 동안 색이 바뀐 사각형을 단시간안에 기억하여 그 사각형의 위치를 맞추는 Application입니다.\n\n사각형의 위치를 정확하게 한번에 맞추게 되면, 다음 단계로 바로 넘어 갈 수 있습니다.\n',
        languageAndTool: ['C# Programming', 'Unity3D']
    },
    {
        mainImgSrc: 'assets/work/Speakit.png',
        subImgSrc: ['assets/work/Speakit.png'],
        title: 'SPEAKIT',
        isAlone: false,
        description: '회사 프로젝트로 영어를 모바일과 VR로 직접 대화하며 배우는 Application입니다. 360 실사 영상 속 원어민과 함께 생생하게 대화할 수 있습니다.\n\n구글 플레이 스토어와 오큘러스 스토어에 출시한 Application입니다. 클라이언트와 서버 모두 개발을 담당해 구현하였고, 앱과 관련된 사이트와 LMS 개발, 인앱구매 및 DB관리까지 맡았습니다.\n',
        languageAndTool: ['C# Programming', 'Unity3D']
    },
    {
        mainImgSrc: 'assets/work/mar_homepage.png',
        subImgSrc: ['assets/work/mar_homepage.png'],
        title: 'Web Development',
        isAlone: true,
        description: '회사 홈페이지 프론트엔드(front-end), 백엔드(back-end) 개발\n\n자주 깜박깜박 잊어버리는 아이디와 비밀번호를 안전한 곳에 보관하여 기억이 나지 않을 때마다 로그인 인증을 통해 나만의 정보를 확인할 수 있습니다.\n',
        languageAndTool: ['JavaScript, PHP', 'AWS', 'MariaDB']
    },
    {
        mainImgSrc: 'assets/work/lms_screen.png',
        subImgSrc: ['assets/work/lms_screen.png'],
        title: 'LMS',
        isAlone: false,
        description: '교육앱 전용 LMS 프론트엔드(front-end) 개발\n',
        languageAndTool: ['Spring Framework']
    },
    {
        mainImgSrc: 'assets/work/positivelab.png',
        subImgSrc: ['assets/work/positivelab.png'],
        title: 'POSITIVE LAB',
        isAlone: false,
        description: 'POSITIVE LAB 프론트엔드(front-end) 개발\n',
        languageAndTool: ['Spring Boot', 'MongoDB']
    },
    {
        mainImgSrc: 'assets/work/M.Vision.png',
        subImgSrc: ['assets/work/M.Vision.png'],
        title: '현대모비스 M.Vision',
        isAlone: false,
        description: 'Proxy Server와의 데이터 연동 작업 및 현대모비스 M.Vision 내,외부 디스플레이 기능 개발\n',
        languageAndTool: ['C# Programming', 'Unity3D'],
        link: 'https://www.youtube.com/watch?v=sIoBtU8MuN4'
    },
]
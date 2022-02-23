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
import DetailWork from 'src/components/common/DetailWork'
import CollectionsIcon from '@mui/icons-material/Collections'

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
                                        <Button onClick={() => {handleOpen(work)}} style={{maxHeight: '20vh', overflow: 'scroll'}}>
                                            <img 
                                                src={work.mainImgSrc}
                                                width={300}
                                            />
                                            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                                                <CollectionsIcon sx={{ background: '#fff', color: '#5e5c7f', borderRadius: '3px' }} />
                                            </div>
                                        </Button>
                                        <div style={{ textAlign: 'left', marginTop: '25px' }}>
                                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{work.title}</Typography>
                                            {work.date && <Typography sx={{ fontSize: '0.8rem' }}>{work.date}</Typography>}
                                            {work.isAlone && <Typography sx={{ fontSize: '0.8rem' }}>1인 개발</Typography>}
                                            <Typography component={'div'} sx={{ fontSize: '0.8rem' }}>
                                                {work.description.split('\n').map((m, i) => {
                                                    return <div key={i}>{m}<br/></div>
                                                })}
                                                {work.detail && work.detail.map((d, i) => {
                                                    return <div key={i}>● {d}<br/></div>
                                                })}
                                                <br/>🔧 개발 언어 및 도구<br/>
                                                {work.languageAndTool.map((text, i) => {
                                                    return (
                                                        <div key={i}>● {text}</div>
                                                    )
                                                })}
                                                {work.link && (
                                                    <div>
                                                        <br/>🔗 참고<br/>
                                                        <a href={work.link}>{work.link}</a>
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
        languageAndTool: ['C# Programming', 'Unity3D', 'Vuforia SDK', 'Photon Cloud'],
        link: 'http://shootingstars.creatorlink.net'
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
        date: '2019.02 ~ 2020.10',
        isAlone: false,
        description: 'Unity3D라는 게임엔진과 C# 언어를 사용하여 모바일과 VR로 영어 스피킹 학습을 경험하는 Application을 개발했습니다. 스타트업의 특성상 부족한 개발자 수로 인해 기존에 회사에서 사용하고 있던 PHP, MariaDB, nginx로 회원가입/로그인과 학습데이터 관리부터 클라이언트 개발까지 전반적인 업무를 수행했습니다. 이렇게 만든 앱은 구글 플레이 스토어와 오큘러스 스토어에 출시를 했습니다.\n',
        detail: ['영어 학습 앱 VR 버전과 모바일 버전 개발 및 각 스토어에 출시','앱 로그인/회원가입 부분 클라이언트, 서버 개발(VR, Mobile)','구글 플레이 스토어 인앱구매 기능 연동 및 개발','인기있는 학습 에피소드와 최신 업데이트한 에피소드 보여주는 기능 작업','VR 가상 키보드 개발','앱 내 회원 대시보드 개발','SKT 회원여부에 따른 전용 코스 제공 개발'],
        languageAndTool: ['C#, PHP', 'Unity3D, MariaDB, AWS(EC2), Apache, Nginx']
    },
    {
        mainImgSrc: 'assets/work/mar_homepage.png',
        subImgSrc: ['assets/work/mar_homepage.png'],
        title: '사내 홈페이지',
        date: '2019.05 ~ 2019.05',
        isAlone: true,
        description: '회사 홈페이지 프론트엔드(front-end), 백엔드(back-end) 개발\n기존 회사 홈페이지를 새로 개발하는 작업을 수행했습니다. HTML, CSS, PHP로 프론트 개발을 하고 AWS, Apache, nginx로 서버환경을 구축했습니다.\n',
        detail: ['홈페이지 픽스된 시안에 맞춰 UI 개발', '페이지 요청한 디바이스(모바일/PC) 확인 후 그에 따라 각각 다른 레이아웃 작업을 위해 별도 페이지 개발', '화면 영역에 따른 수직/수평 스크롤 작업'],
        languageAndTool: ['HTML, CSS, PHP, Javascript', 'AWS(EC2), Apache, Nginx', 'MariaDB']
    },
    {
        mainImgSrc: 'assets/work/lms_screen.png',
        subImgSrc: ['assets/work/lms_screen.png', 'assets/work/lms_0.png', 'assets/work/lms_1.png', 'assets/work/lms_2.png', 'assets/work/lms_3.png', 'assets/work/lms_4.png'],
        title: '대교 Summit 영어 LMS',
        date: '2020.01 ~ 2020.11',
        isAlone: false,
        description: '대교 써밋 영어 LMS(학습관리시스템) 개발을 수행했습니다. 저는 혼자 프론트 개발을 담당했고 Spring Framework와 JSP를 사용하여 LMS에 필요한 데이터를 서버에서 받아 화면에 보여주고 Bootstrap과 CSS를 사용해 UI를 꾸몄습니다.\n',
        detail: ['선생님/센터장 로그인에 따라 각각 다른 페이지를 보여주도록 개발', '반 학생들의 학습 현황과 결과 데이터를 받아 보여주는 Dashboard 개발', '선택한 해당 학생의 월별 출결 현황 달력 개발', '학습 평가 풀이화면 개발'],
        languageAndTool: ['JAVA, JSP, CSS', 'Bootstrap', 'Spring Framework(STS)']
    },
    {
        mainImgSrc: 'assets/work/positivelab.png',
        subImgSrc: ['assets/work/positivelab.png', 'assets/work/positivelab_about.png', 'assets/work/positivelab_product.png', 'assets/work/positivelab_news.png', 'assets/work/positivelab_brochure.png'],
        title: 'POSITIVE LAB',
        date: '2021.01 ~ 2021.05',
        isAlone: false,
        description: '외주사의 제품 소개 홈페이지 개발에 참여하였습니다. 이 프로젝트에서 주로 담당한 업무는 서버 api와 연동하여 브라우저에 보여주는 개발 작업입니다.\n',
        detail: ['각 페이지의 필요한 데이터 연동 작업', 'Brochure 다운로드 기능 작업', '접속국가 별 언어처리 기능과 한/영 탭으로 선택 시 번역되는 기능 작업', 'Contact 부분 메일 발송 기능 개발'],
        languageAndTool: ['Spring Boot', 'MongoDB']
    },
    {
        mainImgSrc: 'assets/work/M.Vision.png',
        subImgSrc: ['assets/work/M.Vision.png'],
        title: '현대모비스 M.Vision',
        date: '2020.09 ~ 2021.02',
        isAlone: false,
        description: '사용자가 스마트폰으로 어떤 동작을 하면 Proxy Server에 전달된 후 자동으로 저희가 만든 디스플레이 앱에 데이터가 전송됩니다. 이렇게 받은 데이터에 따라 디스플레이 화면에 변화를 주는 기능을 개발하였습니다.\n',
        detail: ['Proxy Server와의 데이터 연동 작업', '현대모비스 M.Vision 내,외부 디스플레이 기능 개발', '디자인 시안에 따른 UI 배치 작업'],
        languageAndTool: ['C# Programming', 'Unity3D'],
        link: 'https://www.youtube.com/watch?v=sIoBtU8MuN4'
    },
    {
        mainImgSrc: 'assets/work/ai_speaking_0.png',
        subImgSrc: ['assets/work/ai_speaking_0.png', 'assets/work/ai_speaking_1.png', 'assets/work/ai_speaking_2.png', 'assets/work/ai_speaking_3.png', 'assets/work/ai_speaking_4.png', 'assets/work/ai_speaking_5.png', 'assets/work/ai_speaking_6.png', 'assets/work/ai_speaking_7.png', 'assets/work/ai_speaking_8.png', 'assets/work/ai_speaking_9.png', 'assets/work/ai_speaking_10.png'],
        title: '웅진 AI Speaking',
        date: '2021.03 ~ ',
        isAlone: false,
        description: '안드로이드 탭과 스마트폰(android/iOS)으로 학습하는 AI 영어 말하기 웹 앱을 개발했습니다. 현재 2단계까지 출시되었으며, 1단계 개발 이후 피드백 수정 시점부터 이 프로젝트에 참여하게 되었습니다.\n',
        detail: ['각 학습 모듈의 이슈 및 추가 피드백 수정', '스마트폰 앱 출시를 위한 해상도 변경 작업', 'iOS 운영체제에 따른 이슈(해상도 이슈, 녹음이 안되는 이슈 등) 해결', '모바일앱 회원가입/로그인 UI 개발'],
        languageAndTool: ['Javascript, SCSS', 'Redux, React.js, Ionic Capacitor'],
        link: 'https://www.youtube.com/watch?v=cuMDeb1946A'
    },
    {
        mainImgSrc: 'assets/work/meeshop_0.png',
        subImgSrc: ['assets/work/meeshop_0.png', 'assets/work/meeshop_1.png', 'assets/work/meeshop_2.png', 'assets/work/meeshop_3.png', 'assets/work/meeshop_4.png', 'assets/work/meeshop_5.png', 'assets/work/meeshop_6.png', 'assets/work/meeshop_7.png'],
        title: 'MEESHOP',
        date: '2021.08 ~ 2021.11',
        isAlone: false,
        description: '미샵이라는 커머스 웹 개발에 잠시 참여하여 UI 작업과 API 연동 및 기능 작업을 수행하였습니다.\n',
        detail: ['홈 메인 화면, 상품 관리(상품 등록, 상품 수정, 상품 리스트) 페이지, 대시보드 페이지 개발', '개발한 각 페이지에 데이터 표현을 위한 API 연동 작업', '인플루언서 상품 등록 및 수정 기능 개발', '상품 리스트 검색 기능, 삭제/판매중지/품절처리 기능 개발', '각 페이지에 필요한 배너 연동 작업', '공지사항 UI 및 기능 개발'],
        languageAndTool: ['Javascript, CSS', 'Styled-components, Material-UI', 'Redux, React.js'],
    },
]
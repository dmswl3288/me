import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types'
import smoothscroll from 'smoothscroll-polyfill'
import { styled, makeStyles } from '@mui/styles'
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    useScrollTrigger,
    MenuItem,
    Menu,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const useStyles = makeStyles({
    pager: {
        width: '100%',
    }
})
const HeaderBar = styled(AppBar)({
    // backgroundColor: '#f5f7f9 !important',
    backgroundColor: '#fff !important',
    height: '60px',
    display: 'flex',
    flexDirection: 'row !important',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000 !important',
})

function ElevationScroll(props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}

const pages = ['HOME', 'ABOUT', 'ACTIVITY', 'WORK', 'CONTACT']

const Header = ({props}) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    
    smoothscroll.polyfill()

    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    })

    const onHandleScrollView = (id) => {
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }, 300)
    }
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return
        }
    
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((text, index) => (
                <ListItem button key={text} onClick={() => {onHandleScrollView(text.toLowerCase())}}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <ElevationScroll {...props}>
            <HeaderBar sx={{ 
                background: scrollPosition < 700 ? 'transparent !important': '#fff',
            }}>
                <Container
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                <IconButton onClick={() => {window.location.href='/me/'}}
                    sx={{ color: scrollPosition < 700 ? '#fff': '#000' }}
                >
                    EUNJI HAN
                </IconButton>
                <div>
                    {/* mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {['top'].map((anchor) => (
                            <div key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon sx={{ color: scrollPosition < 700 ? '#fff': '#000' }} />
                                </IconButton>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </div>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button onClick={() => {onHandleScrollView(page.toLowerCase())}}
                                sx={{ color: scrollPosition < 700 ? '#fff': '#000' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </div>
                </Container>
            </HeaderBar>
        </ElevationScroll>
    )
}

export default Header
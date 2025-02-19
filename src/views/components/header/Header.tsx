import { useEffect, useRef, useState } from 'react'
import { BigWrapper, Container, NavWrapper, Wrapper } from './styles'
import { VscMenu } from 'react-icons/vsc'
import { Link, useLocation,  } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setNavigation } from '../../../slices/navigationSlice'

const Header: React.FC = () => {
    const { pathname } = useLocation();
    const [floatingClass, setFloatingClass] = useState("")
    const dispatch = useAppDispatch();
    const toggleState = useAppSelector(state => state.navigation.state);

    const [_currentLogo, setCorrentLogo] = useState("logo.png")

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation({main: false}));
        }
    }

    const addFloatClass = () => {
        window.onscroll = function() {
			if (window.pageYOffset > 90) {
                setFloatingClass("floating-body")
                setCorrentLogo("logo-alt.png")
			} else {
                setFloatingClass("")

                if (window.innerWidth > 990) {
                    setCorrentLogo("logo.png")
                } else {
                    setCorrentLogo("logo-alt.png")
                }
			}
		}
    }

    useEffect(() => {
        addFloatClass()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <BigWrapper>
            <Wrapper className={floatingClass}>
                <Container>
                    <Link className='site-logo' to="/">
                        <img src="/assets/svg/banner.svg" alt="banner" />
                    </Link>
                    <NavWrapper ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState.main}>
                        <div className="nav-wrapper">
                            <div className="nav-logo">
                                <Link className='site-logo' to="/">
                                    <img src="/assets/svg/banner.svg" alt="banner" />
                                </Link>
                            </div>
                            <nav>
                                <ul>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/">Home</Link></li>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/about-us">About Us</Link></li>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to={'#'}>Products</Link></li>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/faq">FAQs</Link></li>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/blog">Blog</Link></li>
                                </ul>
                            </nav>
                            <div className="auth-nav">
                                <ul>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/signin">Login</Link></li>
                                    <li><Link  onClick={ () => dispatch(setNavigation({main: false})) } to="/signup">Use Dartmmind</Link></li>
                                </ul>
                            </div>
                        </div>
                    </NavWrapper>
                    <div className="toggle-menu" onClick={ () => dispatch(setNavigation({main: true})) }>
                        <VscMenu />
                    </div>
                </Container>
            </Wrapper>
        </BigWrapper>
    )
}

export default Header
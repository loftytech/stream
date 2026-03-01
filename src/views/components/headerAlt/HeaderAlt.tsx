import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeadBar, HeaderWrapper, Nav, NavContent, ToggleMenu } from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setNavigation } from '../../../slices/navigationSlice';

const HeaderAlt: React.FC = ()  => {
    const toggleState = useAppSelector(state => state.navigation.state);
    const dispatch = useAppDispatch();

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation({main: false}));
        }
    }

    return (
        <HeaderWrapper>
            <div className="overlay-wrapper">
                <img src="/assets/img/hero-overlay-img.png" alt="" />
            </div>
            <HeadBar>
                <div className="banner">
                    <img src="/assets/img/logo.png" alt="logo" />
                    <h2>Stream</h2>
                </div>
                <Nav ref={sidebarRef} onClick={e => closeMenu(e)} $navigationState={toggleState.main}>
                    <NavContent $navigationState={toggleState.main}>
                        <div className="nav-head">
                            <img src="/assets/img/white-logo.png" alt="logo" />
                            <h2>Stream</h2>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><Link to="/top-streamers">Top Streamers</Link></li>
                            <li><Link to="/vendors">StreamPass</Link></li>
                            <li><Link to="#">Support</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/signin">Signin</Link></li>
                            <li><Link to="/signup">Sign up now</Link></li>
                        </ul>
                    </NavContent>
                </Nav>
                <ToggleMenu onClick={() => dispatch(setNavigation({main: true}))}>
                    <span></span>
                </ToggleMenu>
            </HeadBar>
        </HeaderWrapper>
    )
}

export default HeaderAlt
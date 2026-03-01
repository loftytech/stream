import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HeadBar, HeaderWrapper, Nav, NavContent, SlideImgWrapper, SlideTextWrapper, SlideWrapper, ToggleMenu } from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setNavigation } from '../../../slices/navigationSlice';

const Header: React.FC = ()  => {
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
                    <img src="/assets/img/white-logo.png" alt="logo" />
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

            <SlideWrapper>
                <SlideTextWrapper>
                    <div className="tag">
                        <img src="/assets/img/hero-star-img.png" alt="" />
                        <span>From Streaming to Earning Fast </span>
                    </div>
                    <h1>Stream. Grow. Thrive. Earn.</h1>
                    <h6>Where Life Moves. Income Flows. Watch. Listen. View. Download. Collaborate - a place where every moment watched, viewed or heard brings new opportunities to earn.</h6>

                    <img className="ai-prompt" src="/assets/img/prompt-ai-img.png" alt="" />
                </SlideTextWrapper>
                <SlideImgWrapper>
                    <img src="/assets/img/hand-on-phone-img.png" alt="banner" />
                </SlideImgWrapper>
            </SlideWrapper>
        </HeaderWrapper>
    )
}

export default Header
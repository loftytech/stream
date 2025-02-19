import React, {useEffect, useRef, useState} from 'react'
import { Content, FooterContent, Head, HeadContent, MenuItems, MezoLtd, SidebarContent, SidebarWrapper } from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setNavigation } from '../../../slices/navigationSlice'
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineCash } from 'react-icons/hi';
import { CgLogOut } from 'react-icons/cg';


const Sidebar: React.FC = () => {
    const toggleState = useAppSelector(state => state.navigation.state);
    const dispatch = useAppDispatch();
    const [_isActiveSubMenu, setIsActiveSubMenu] = useState(false)

    const location = useLocation();

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation({dashboard: false}));
        }
    }


    const openSubMenu = () => {
        if (location.pathname.includes("/dashboard/transactions/giftcard") || location.pathname.includes("/dashboard/transactions/crypto")) {
            setIsActiveSubMenu(true)
        }
    }

    useEffect(() => {
        openSubMenu()
    }, [])

    return (
        <SidebarWrapper ref={sidebarRef} onClick={e => closeMenu(e)} $navigationState={toggleState.dashboard}>
            <SidebarContent $navigationState={toggleState.dashboard}>
                <Head>
                    <HeadContent onClick={() => dispatch(setNavigation({dashboard: false}))} to="/">
                        <img src="/assets/img/banner-img.png" />

                        <MezoLtd>
                            <span>MEZOVEST LTD</span>
                            <IoIosArrowDown />
                        </MezoLtd>
                    </HeadContent>
                </Head>
                <Content>
                    <ul>
                        <h3>home</h3>
                        <MenuItems $isActive={location.pathname === "/dashboard" ? true : false}>
                            <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard">
                                <RxDashboard />
                                <span>Overview</span>
                             </Link>
                        </MenuItems>
                        <MenuItems $isActive={location.pathname === "/dashboard/apps" ? true : false}>
                            <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/apps">
                                <HiOutlineCash />
                                <span>Orders</span>
                            </Link>
                        </MenuItems>
                    </ul>
                </Content>

                <FooterContent>
                    <button>
                        <CgLogOut />
                        <span>Log out</span>
                    </button>
                </FooterContent>
            </SidebarContent>
        </SidebarWrapper>
    )
}

export default Sidebar

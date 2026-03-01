import React, {useEffect, useRef, useState} from 'react'
import { Content, FooterContent, Head, HeadContent, Indicator, MenuItems, SidebarContent, SidebarWrapper, SubMenu, SubMenuItems, SubMenuWrapper } from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setNavigation } from '../../../slices/navigationSlice'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineCash } from 'react-icons/hi';
import { CgLogOut } from 'react-icons/cg';


const SubMenuIndicator: React.FC<{itemsLength: number}> = ({itemsLength}) => {
    const [_markerList, setMarkerList] = useState<string[]>([])

    const generatePages = () => {
        let _markers: any[] = []
        for (let index = 0; index < itemsLength; index++) {
            const markerString = index+1;
            _markers.push(markerString.toString())
        }

        setMarkerList(_markers)
    }

    useEffect(() => {
        generatePages()
    }, [])

    return (
        <Indicator>
            <div className="pipe-wrapper">
                <div className="pipe"></div>
            </div>
            {/* <div className="markers">
                {markerList.map((item: any, idx: number) => {
                    return <Image key={"marker-"+idx} src="/assets/svg/marker-icon.svg" alt="Logo" width={40} height={40} quality={100} />
                })}
            </div> */}
        </Indicator>
    )
}

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
                    <HeadContent to="#">
                        <img src="/assets/img/banner-img.png" />
                    </HeadContent>
                </Head>
                <Content>
                    <MenuItems $isActive={location.pathname === "/dashboard" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 14H14V21H21V14Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 14H3V21H10V14Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 3H14V10H21V3Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 3H3V10H10V3Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span>Dashboard</span>
                            </Link>
                    </MenuItems>

                    <MenuItems>
                        <div className="sub-menu" onClick={(e) => {
                                e.preventDefault()
                                if (toggleState.subMenu != "Stream Box") {
                                    dispatch(setNavigation({subMenu: "Stream Box"}))
                                } else {
                                    // dispatch(setNavigation({subMenu: ""}))
                                }
                            }}>
                            <a className="submenu-head">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" stroke="#2F4F4E" stroke-linejoin="round"/>
                                    <path d="M11 7H17" stroke="#2F4F4E" stroke-linecap="round"/>
                                    <path d="M11 12H17" stroke="#2F4F4E" stroke-linecap="round"/>
                                    <path d="M11 17H17" stroke="#2F4F4E" stroke-linecap="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8Z" fill="#2F4F4E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="#2F4F4E"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="#2F4F4E"/>
                                </svg>

                                <span>Stream Box</span>
                            </a>

                            <SubMenuWrapper isActive={toggleState.subMenu == "Stream Box"}>
                                <SubMenuIndicator itemsLength={3} />
                                <SubMenu>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/snap-royalties" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/snap-royalties">
                                            <span>Snap Collab</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/audio-colab" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/audio-colab">
                                            <span>Audio Collab</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/video-colab" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/video-colab">
                                            <span>Video Collab</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/live-stream" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/live-stream">
                                            <span>LiveStream Collab</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/downloadables" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/downloadables">
                                            <span>FileDownload Collab</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/purchases" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Royalties Report</span>
                                        </Link>
                                    </SubMenuItems>
                                </SubMenu>
                            </SubMenuWrapper>
                        </div>
                    </MenuItems>
                    <MenuItems $isActive={location.pathname === "/dashboard/wallets" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/wallets">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_43_18229)">
                                <path d="M23 20V18C22.9993 17.1137 22.7044 16.2528 22.1614 15.5523C21.6184 14.8519 20.8581 14.3516 20 14.13" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 20V18C17 16.9391 16.5786 15.9217 15.8284 15.1716C15.0783 14.4214 14.0609 14 13 14H5C3.93913 14 2.92172 14.4214 2.17157 15.1716C1.42143 15.9217 1 16.9391 1 18V20" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 2.13C16.8604 2.35031 17.623 2.85071 18.1676 3.55232C18.7122 4.25392 19.0078 5.11683 19.0078 6.005C19.0078 6.89318 18.7122 7.75608 18.1676 8.45769C17.623 9.1593 16.8604 9.6597 16 9.88" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_43_18229">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <span>Stream Partners</span>
                        </Link>
                    </MenuItems>
                    <MenuItems $isActive={location.pathname === "/dashboard/customers" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/customers">
                            <svg width="35" height="35" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64258 15.5L0.642578 6.5M9.64258 15.5L18.6426 6.5M9.64258 15.5L5.64258 6.5M9.64258 15.5L13.6426 6.5M0.642578 6.5L4.64258 0.5M0.642578 6.5H5.64258M4.64258 0.5L5.64258 6.5M4.64258 0.5H9.64258M14.6426 0.5L18.6426 6.5M14.6426 0.5L13.6426 6.5M14.6426 0.5H9.64258M18.6426 6.5H13.6426M5.64258 6.5H13.6426M5.64258 6.5L9.64258 0.5M13.6426 6.5L9.64258 0.5" stroke="#2F4F4E"/>
                            </svg>

                            <span>Tiktok Creators Network</span>
                        </Link>
                    </MenuItems>
                    <MenuItems $isActive={location.pathname === "/dashboard/customers" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/customers">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#476160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 17H8" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13H8" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 9H9H8" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <span>Income Log</span>
                        </Link>
                    </MenuItems>

                    <MenuItems>
                        <div className="sub-menu">
                            <a className="submenu-head" onClick={(e) => {
                                e.preventDefault()
                                if (toggleState.subMenu != "StreamPass") {
                                    dispatch(setNavigation({subMenu: "StreamPass"}))
                                } else {
                                    dispatch(setNavigation({subMenu: ""}))
                                }
                            }}>
                                <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.08301 1H22.917C23.5151 1.00018 23.9998 1.48494 24 2.08301V5.41895C22.7886 5.83452 21.9171 6.98064 21.917 8.33301C21.917 9.68545 22.7886 10.8314 24 11.2471V14.583C24 15.1812 23.5152 15.6668 22.917 15.667H2.08301C1.48483 15.6668 1 15.1812 1 14.583V11.2471C2.21144 10.8314 3.08301 9.68545 3.08301 8.33301C3.08287 6.98064 2.21145 5.83452 1 5.41895V2.08301C1.00018 1.48494 1.48494 1.00018 2.08301 1ZM5.20801 1.77734C4.08061 1.77752 3.16705 2.69191 3.16699 3.81934V12.8477C3.16723 13.9749 4.08071 14.8885 5.20801 14.8887H19.792C20.9193 14.8885 21.8328 13.9749 21.833 12.8477V3.81934C21.8329 2.69191 20.9194 1.77752 19.792 1.77734H5.20801ZM18.4443 5.16699V11.5H6.55566V5.16699H18.4443Z" stroke="#476160" stroke-width="2"/>
                                </svg>

                                <span>StreamPass</span>
                            </a>

                            <SubMenuWrapper isActive={toggleState.subMenu == "StreamPass"}>
                                <SubMenuIndicator itemsLength={3} />
                                <SubMenu>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/stream-pass" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/stream-pass">
                                            <span>StreamPass Code</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/orders" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>StreamPass Report</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/stores" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>StreamPass Checker</span>
                                        </Link>
                                    </SubMenuItems>
                                </SubMenu>
                            </SubMenuWrapper>
                        </div>
                    </MenuItems>

                    <MenuItems>
                        <div className="sub-menu">
                            <a className="submenu-head" onClick={(e) => {
                                e.preventDefault()

                                if (toggleState.subMenu != "withdrawal") {
                                    dispatch(setNavigation({subMenu: "withdrawal"}))
                                } else {
                                    dispatch(setNavigation({subMenu: ""}))
                                }
                            }}>
                                <HiOutlineCash />
                                <span>Withdrawal</span>
                            </a>

                            <SubMenuWrapper isActive={toggleState.subMenu == "withdrawal"}>
                                <SubMenuIndicator itemsLength={3} />
                                <SubMenu>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/revenue" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Partners Withdrawal</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Collab Withdrawal</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Withdrawal Logs</span>
                                        </Link>
                                    </SubMenuItems>
                                </SubMenu>
                            </SubMenuWrapper>
                        </div>
                    </MenuItems>

                    <MenuItems $isActive={location.pathname === "/dashboard/wallets" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/wish-hub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.2922 6L19.9463 14.1627C19.8666 14.6457 19.4491 15 18.9596 15H7.04304C6.55355 15 6.136 14.6457 6.05636 14.1627L4.84851 6.83731C4.76887 6.35434 4.35133 6 3.86183 6H2" stroke="#2F4F4E" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 20C8.55228 20 9 19.5523 9 19C9 18.4477 8.55228 18 8 18C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20Z" stroke="#2F4F4E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z" stroke="#2F4F4E"/>
                                <path d="M16 8H10" stroke="#2F4F4E" stroke-linecap="round"/>
                                <path d="M13 5V11" stroke="#2F4F4E" stroke-linecap="round"/>
                            </svg>

                            <span>WishHub</span>
                        </Link>
                    </MenuItems>


                    <MenuItems>
                        <div className="sub-menu">
                            <a className="submenu-head" onClick={(e) => {
                                e.preventDefault()
                                if (toggleState.subMenu != "Marketplace") {
                                    dispatch(setNavigation({subMenu: "Marketplace"}))
                                } else {
                                    dispatch(setNavigation({subMenu: ""}))
                                }
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="7" width="14" height="12" stroke="#2F4F4E" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7" stroke="#2F4F4E" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span>Marketplace</span>
                            </a>

                            <SubMenuWrapper isActive={toggleState.subMenu == "Marketplace"}>
                                <SubMenuIndicator itemsLength={3} />
                                <SubMenu>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Create Product</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Manage Product</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Browse Product</span>
                                        </Link>
                                    </SubMenuItems>
                                </SubMenu>
                            </SubMenuWrapper>
                        </div>
                    </MenuItems>


                    <MenuItems>
                        <div className="sub-menu">
                            <a className="submenu-head" onClick={(e) => {
                                e.preventDefault()
                                if (toggleState.subMenu != "Skills Centre") {
                                    dispatch(setNavigation({subMenu: "Skills Centre"}))
                                } else {
                                    dispatch(setNavigation({subMenu: ""}))
                                }
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 4C9 2.89543 9.89543 2 11 2C12.1046 2 13 2.89543 13 4V6H18V11H20C21.1046 11 22 11.8954 22 13C22 14.1046 21.1046 15 20 15H18V20H13V18C13 16.8954 12.1046 16 11 16C9.89543 16 9 16.8954 9 18V20H4V15H6C7.10457 15 8 14.1046 8 13C8 11.8954 7.10457 11 6 11H4V6H9V4Z" stroke="#2F4F4E"/>
                                </svg>

                                <span>Skills Centre</span>
                            </a>

                            <SubMenuWrapper isActive={toggleState.subMenu == "Skills Centre"}>
                                <SubMenuIndicator itemsLength={3} />
                                <SubMenu>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Join Skills</span>
                                        </Link>
                                    </SubMenuItems>
                                    <SubMenuItems $isActive={location.pathname === "/dashboard/transactions" ? true : false}>
                                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/purchases">
                                            <span>Manage Skills</span>
                                        </Link>
                                    </SubMenuItems>
                                </SubMenu>
                            </SubMenuWrapper>
                        </div>
                    </MenuItems>

                    <MenuItems $isActive={location.pathname === "/dashboard/wallets" ? true : false}>
                        <Link onClick={() => dispatch(setNavigation({dashboard: false}))} to="/dashboard/wallets">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_43_17716)">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke="#2F4F4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_43_17716">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>

                            <span>Settings</span>
                        </Link>
                    </MenuItems>
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

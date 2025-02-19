import styled from 'styled-components'

export const BigWrapper = styled.div`
    .floating-body {
        /* filter: drop-shadow(0px 4px 8px rgba(137, 139, 141, 0.1)); */
        background-color: #0F0F0F66;


        .site-logo {
            span {
                color: #222 !important;
            }
        }


        @media screen and (min-width: 990px) {
            nav {
                a {
                    /* color: #000 !important; */
                }
            }

            .auth-nav {
                /* li {
                    a {
                        color: #fff !important;
                        background-color: ${props => props.theme.primaryColor} !important;
                    }
                    :first-child {
                        a {
                            color: ${props => props.theme.primaryColor} !important;
                            background-color: #fff !important;
                            border: 1px solid ${props => props.theme.primaryColor} !important;
                        }
                    }
                } */
            }
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 0px 8%;
    height: 90px;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999999;

    @media screen and (min-width: 880px) {
        padding: 0px 8%;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px;
    /* max-width: 1280px; */
    flex: 1;

    .site-logo {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        /* height: 40px; */
        span {
            font-size: 23px;
            font-weight: 600;
            color: #fff;
        }
        .logo-image {
            display: none;
        }
        .icon-image {
            display: block;
        }

        img {
            height: 25px;
        }
    }


    
    .toggle-menu {
        margin-left: 20px;
        display: block;
        cursor: pointer;

        svg {
            font-size: 18px;
            color: #5C5C5C;
        }
    }

    @media screen and (min-width: 990px) {
        .categories {
            display: block;
        }
        .toggle-menu {
            display: none;
        }
    }
    @media screen and (min-width: 1240px) {
        .site-logo {
            /* height: 40px; */
            .logo-image {
                display: block;
            }
            .icon-image {
                display: none;
            }
        }

        .categories {
            margin: 0px 10px 0px 40px;
        }
    }
`;

export const NavWrapper = styled.nav<{navigationState: boolean}>`
    visibility: ${props => props.navigationState ? "visible" : "hidden"};
    position: fixed;
    top: 0px;
    left: 0px;

    &::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        z-index: 999;

        @media screen and (min-width: 990px) {
            background-color: transparent;
            width: 0px;
            height: unset;
        }
    }

    .nav-wrapper {
        width: 240px;
        height: 100vh;
        background: #0F0F0F;
        padding: 20px 0px;
        position: relative;
        z-index: 9999;
        left: ${props => props.navigationState ? "0px" : "-240px"};
        top: 0px;
        transition: all 0.2s ease-in-out;

        .nav-logo {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
            padding: 0px 20px 20px 20px;
            border-bottom: 1px solid #74757866;

            img {
                /* width: 160px; */
                margin: 0px auto;
            }
        }

        nav {
            ul {
                display: flex;
                flex-direction: column;

                li {
                    a {
                        display: block;
                        padding: 10px 20px;
                        color: #fff;
                        white-space: nowrap;
                        font-size: 14px;
                        font-weight: 400;
                        font-family: 'Lato', sans-serif;
                    }
                }
            }
        }

        .auth-nav {
            padding: 0px 20px;
            ul {
                display: flex;
                flex-direction: column;

                li {
                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50px;
                        padding: 0px 20px;
                        border-radius: 8px;
                        color: #fff;
                        letter-spacing: 0.1px;
                        font-size: 13px;
                        font-weight: 500;
                        font-family: 'Lato', sans-serif;
                        white-space: nowrap;
                        background: ${props => props.theme.primaryColor};
                        border: 1px solid ${props => props.theme.primaryColor};

                        margin-top: 20px;
                    }

                    &:first-child {
                        a {
                            color: #fff;
                            background: transparent;
                            border: 1px solid #475367;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 990px) {
        display: flex;
        flex: 1;
        visibility: visible;
        align-items: center;
        justify-content: flex-end;
        position: unset;
        top: 0px;
        left: 0px;
        background: unset;
        height: unset;
        width: auto;

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: unset;
            width: unset;
            height: unset;
            background: unset;
            padding: 0px;
            flex: 1;

            ::before {
                content: "";
            }



            .nav-logo {
                display: none;
            }

            nav {
                display: flex;
                justify-content: center;
                flex: 1;
                margin-right: 20px;
                ul {
                    flex-direction: row;

                    li a {
                        margin-left: 20px;
                        padding: 0px;
                        color: #fff;
                    }
                }
            }

            .auth-nav {
                padding: 0px;
                ul {
                    flex-direction: row;

                    li {
                        a {
                            height: 40px;
                            margin-top: 0px;
                            background-color: ${props => props.theme.primaryColor};
                            border: 1px solid transparent;
                        }
                        &:last-child {
                            margin-left: 20px;
                        }
                    

                        &:first-child {
                            a {
                                color: #fffc;
                                background: transparent;
                                border: 1px solid #fff5;
                            }
                        }
                    }
                }
            }
        }
    }
`;
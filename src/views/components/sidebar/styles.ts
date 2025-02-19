import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const SidebarWrapper = styled.div<{$navigationState: boolean}>`
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 99999999;

    &::before {
        content: "";
        position: fixed;
        left: 0px;
        top: 0px;
        display: ${props => props.$navigationState ? "block" : "none"};
        height: 100vh;
        width: 100%;
        background-color: ${props => props.$navigationState ? "#0006" : "transparent"};
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        @media screen and (min-width: 800px) {
            background-color: transparent;
            width: 240px;
        }
    }
    @media screen and (min-width: 800px) {
        display: flex;
        left: 0px;
        width: 240px;
        z-index: 999999999;
    }
`;

export const SidebarContent = styled.div<{$navigationState: boolean}>`
    display:  flex;
    flex-direction: column;
    position: fixed;
    left: ${props => props.$navigationState ? "0px" : "-240px"};
    top: 0px;
    width: 240px;
    height: 100vh;
    transition: all 0.2s ease-in-out;
    background: #203035;

    @media screen and (min-width: 880px) {
        display: flex;
        left: 0px;
        z-index: 999999999;
        transition: none;
    }
`;

export const Head = styled.div`
    padding: 20px 20px;
    margin-bottom: 2vh;
`;

export const HeadContent = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0px 0px;
    /* height: 28px; */
    border-radius: 6px;

    img {
        height: 45px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

`;
export const MezoLtd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    width: 100%;
    background-color: #FFFFFF;
    color: #203035;
    font-size: 14px;
    padding: 10px 10px;
    border-radius: 4px;
`;
export const Title = styled.h5`
   margin-bottom: 15px;
   font-size: 12px;
   color: #ccc;
   padding: 0px 10px;
   text-transform: uppercase;
`;
export const Home = styled.li<{isActive?: boolean}>`
    margin-bottom: 16px;
    a {
        display: flex;
        /* align-items: flex-end; */
        color: ${props => props.isActive ? props.theme.secondaryColor : "#fff" } !important;
        padding: 8px 10px;
        svg {
            margin-right: 10px;
            font-size: 18px;
        }
        span {
            font-size: 13px;
            font-weight: 400;
            color: ${props => props.isActive ? props.theme.secondaryColor : "#fafafa" };
        }
        background-color: ${props => props.isActive ? "#fff" : "transparent" };
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`;
export const Content = styled.div`
    padding: 0px 0px 0px 0px;
    overflow-y: auto;

    h3 {
        font-size: 13px;
        font-weight: 600;
        color: #E3E3E3;
        padding: 0px 20px;
        margin-bottom: 10px;
        text-transform: capitalize;
    }

    ul {
        margin-bottom: 40px;
    }
`;


export const MenuItems = styled.li<{$isActive?: boolean, isActiveSubMenu?: boolean}>`
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        color: #fff;
        padding: 10px 30px;
        padding-bottom: ${props => props.isActiveSubMenu ? "10px" : "10px"};
        svg {
            /* width: 30px; */
            margin-right: 20px;
            font-size: 20px;
            color: ${props => props.$isActive ? "#203035" : "#fff" };
        }
        span {
            font-size: 15px;
            font-weight: 400;
            color: ${props => props.$isActive ? "#203035" : "#fff" };
        }
        background-color: ${props => props.$isActive ? "#02CB63" : "transparent" };
        border-left: 4px solid ${props => props.$isActive ? "#fff" : "transparent"};
    }
`;


export const SubMenu = styled.ul<{isActive?: boolean}>`
    display: ${props => props.isActive ? "block" : "none"};
    padding: 0px 0px 0px 30px;
    cursor: pointer;
`;


export const SubMenuItems = styled.li<{isActive?: boolean}>`
    a {
        display: flex;
        align-items: center;
        color: ${props => props.isActive ? props.theme.primaryColor : "#fff" };
        padding: 20px 30px;
        img {
            width: 30px;
            margin-right: 20px;
            font-size: 20px;
            filter:  ${props => props.isActive ? "invert(0%) sepia(75%) saturate(918%) hue-rotate(357deg) brightness(103%) contrast(100%)" : "none" };

            :nth-of-type(2) {
                margin-right: 0px;
                margin-left: 20px;
            }
        }
        span {
            font-size: 15px;
            font-weight: 300;
            color: ${props => props.isActive ? props.theme.primaryColor : "#98A5B1" };
        }
        background-color: ${props => props.isActive ? "#151E2A" : "transparent" };
        border-left: 4px solid ${props => props.isActive ? props.theme.primaryColor : "transparent"};
    }
`;


export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 40px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background-color: #FF8E8E21;
        border: none;
        color: #FF8E8E;
        border-radius: 3px;
        cursor: pointer;

        svg {
            font-size: 15px;
        }
    }
`;
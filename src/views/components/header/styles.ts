import styled from "styled-components";

export const  HeaderWrapper = styled.header`
    background-color: #0E201F;
    padding: 20px 8% 20px 8%;
    position: relative;

    .overlay-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const  HeadContent = styled.div`

`;


export const  HeadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FDF8E5;
    padding: 0px 20px;
    border-radius: 15px;

    .banner {
        display: flex;
        align-items: center;
        height: 50px;

        img {
            height: 40px;
            margin-right: 10px;
        }

        h2 {
            font-size: 25px;
            color: #FDF8E5;
            font-weight: 900;
        }
    }
`;

export const ToggleMenu = styled.div`
    display: block;
    width: 22px;
    cursor: pointer;

    span {
        margin: 4px 0px;
    }
    span, &::before, &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: #fff;
    }

    @media screen and (min-width: 880px) {
        display: none;
    }
`;

export const  Nav = styled.nav<{navigationState: boolean}>`
    display: block;
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100vh;
    z-index: 9999;

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

        @media screen and (min-width: 800px) {
            background-color: transparent;
            width: 240px;
            height: unset;
            z-index: 999999999;
        }
    }

    @media screen and (min-width: 800px) {
        width: 100%;
        height: unset;
        position: unset;
        background-color: transparent;
    }
`;
export const NavContent = styled.div<{navigationState: boolean}>`
    display: block;
    background-color: #000;
    position: fixed;
    left: ${props => props.navigationState ? "0px" : "-240px"};
    width: 240px;
    height: 100%;
    z-index: 999999;
    transition: all 0.2s ease-in-out;

    .nav-head {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 20px 30px;
        border-bottom: 1px solid #ccc;
        h2 {
            font-size: 18px;
            font-weight: 500;
            margin-left: 10px;
            color: ${props => props.theme.primaryColor};
        }
        img {
            width: 40px;
        }
    }

    ul {
        &:first-of-type {
            padding: 0px 20px;
            margin-top: 20px;
            li {
                margin-bottom: 15px;
                a {
                    display: block;
                    padding: 10px 10px;
                    color: #fff;
                    font-weight: 400;
                }
            }
        }
        &:last-child {
            margin-top: 20px;
            padding: 20px 30px;
            li {
                margin-bottom: 20px;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 50px;
                    font-weight: 600;
                    color: #fff;
                    background-color: #476160;
                    font-size: 11px;
                    border:  1px solid ${props => props.theme.primaryColor};
                    border-radius: 4px;
                    text-transform: capitalize;
                }
            }
        }
    }

    @media screen and (min-width: 880px) {
        display: flex;
        align-items: center;
        position: unset;
        background-color: unset;
        height: unset;
        flex: 1;
        justify-content: flex-end;
        width: 100%;
        transition:unset;

        .nav-head {
            display: none;
        }

        ul {
            display: flex;
            padding: 0px 0px;
            margin-top: 0px;
            &:first-of-type {
                flex: 1;
                justify-content: center;
                padding: 0px 0px;
                margin-top: 0px;
                li {
                    margin-bottom: 0px;
                    margin-right: 20px;
                    &&:last-child {
                        margin-right: 0px;
                    }
                    a {
                        color: #fff;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
            &:last-child {
                padding: 0px;
                li {
                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: none;
                        height: unset;
                        padding: 14px 15px;
                        font-size: 14px;
                        border-radius: 8px;
                        text-transform: capitalize;
                        color: #fff;
                        font-weight: 400;
                        white-space: nowrap;
                        background-color: #476160;
                        border:  0.5px solid #fff;

                    }
                }
            }
        }
    }
`;

export const SlideWrapper = styled.div`
    padding: 20px 0%;
    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding-bottom: 100px;
        position: relative;
    }
`;

export const SlideTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 550px;
    margin-top: 40px;
    margin-bottom: 40px;
    
    .tag {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 38px;
        border-radius: 19px;
        padding: 0px 10px;
        background-color: #4B5757;
        border: 1px solid #8BB7A0;
        
        img {
            height: 20px;
        }

        span {

            font-size: 13px;
            font-weight: 400;
            color: #FEFBEF;
        }
    }

    h1 {
        font-size: 30px;
        color: #fff;
        text-align: center;
        font-weight: 700;
        margin-bottom: 0px;
    }

    h6 {
        color: #FEFBEF;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        line-height: 23px;
        max-width: 480px;
    }

    img.ai-prompt {
        width: 100%;
        max-width: 480px;
    }

    @media screen and (min-width: 880px) {
        margin-bottom: 0px;

        .tag {
            margin-top: 40px;
        }

        h1 {
            font-size: 40px;
        }

        h6 {
            font-size: 18px;
            max-width: 640px;
            line-height: 28px;
        }
    }
`;
export const SlideImgWrapper = styled.div`
    position: relative;
    height: 400px;
    img {
        position: absolute;
        height: 100%;
    }

    @media screen and (min-width: 880px) {
        position: absolute;
        left: 0px;
        width: 400px;
        height: 400px;
        bottom: 100px;
        /* background-color: #f0f; */
    }
`;
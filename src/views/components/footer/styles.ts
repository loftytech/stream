import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    padding: 100px 8% 40px 8%;
`;
export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
        gap: 30px;

    @media screen and (min-width: 1080px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }
`;
export const Container = styled.div`
    padding: 20px 20px 20px 20px;
    background-color: #0B0B0B;
    border-radius: 10px;
    flex: 1;
`;
export const TopSection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 40px;

    @media screen and (min-width: 720px) {
        flex-direction: row;
        align-items: flex-start;
    }

    .logo-section {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media screen and (min-width: 880px) {
            justify-content: flex-end;
            align-items: flex-end;
        }

        .logo {
            height: 40px;
            @media screen and (min-width: 880px) {
                height: 30px;
            }

            img {
                height: 100%;
            }
        }

        ul {
            display: flex;
            flex-direction: row;
            gap: 30px;

            @media screen and (min-width: 880px) {
                flex-direction: column;
            }

            li {
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 46px;
                    height: 46px;
                    background: linear-gradient(180deg, rgba(5, 83, 177, 0.075) 0%, rgba(255, 255, 255, 0.075) 100%);
                    border: 1px solid #23252A;
                    border-radius: 50%;

                    img {
                        height: 20px;
                    }
                }
            }
        }
    }
`;


export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 200px;
    width: 100%;
    flex: 1;

    ul {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        h5 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #747578;
        }

        li {
            display: block;
            margin-bottom: 15px;
            a {
                display: block;
                color: #EFEFEF;
                font-size: 13px;
                font-weight: 400;
            }
        }

        @media screen and (min-width: 880px) {
            width: 50%;
        }

        @media screen and (min-width: 960px) {
            width: unset;
        }
    }

    @media screen and (min-width: 640px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 720px) {
        width: unset;
        /* justify-content: space-between; */
    }

    @media screen and (min-width: 880px) {
        /* flex-direction: column; */
    }

    @media screen and (min-width: 1080px) {
        flex-direction: row;
    }
`;
export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 40px 0px 20px 0px;
    /* background-color: #ff6633; */

    @media screen and (min-width: 480px) {
        flex-direction: row;
    }

    .credits {
        display: flex;
        gap: 15px;

        li {
            display: flex;
            align-items: center;
            gap: 15px;
            a {
                display: block;
                color: #EFEFEF;
                font-size: 14px;
                font-weight: 400;
            }

            &:first-child {
                &::after {
                    content: "";
                    display: block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #E4DBDB;
                }
            }
        }
    }

    .copyright {
        span {
            color: #A7A7A9;
            font-size: 14px;
            font-weight: 400;
        }
    }

`;

export const BuiltByDevs = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    background-color: #0553B1;
    padding: 40px 40px;
    border-radius: 8px;
    gap: 40px;
    background-image: url("/assets/img/noice.png");
    background-repeat: repeat;
    flex: 1;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (min-width: 1080px) {
        max-width: 480px;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 480px;

        h2 {
            font-size: 30px;
            font-weight: 800;
            color: #EFEFEF;
            margin-bottom: 20px;
        }

        p {
            font-size: 17px;
            color: #D2D2D2;
            margin-bottom: 20px;
            font-weight: 400;
            line-height: 28px;
        }

        .actions {
            display: flex;
            a {
                display: flex;
                gap: 10px;
                align-items: center;
                height: 50px;
                padding: 0px 25px;
                border-radius: 8px;
                background-color: #D2D2D2;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                color: #363636;
            }

            svg {
                font-size: 20px;
                color: #212121;
            }
        }
    }

    .img-content {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 140px;
        opacity: 0.3;
    }
`;

import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    background-color: #FEFBEF;
`;

export const HeaderContent = styled.header`
    display: block;
    position: fixed;
    width: 100%;
    top: 0px;
    right: 0px;
    height: 70px;
    z-index: 9999;
    padding: 0px 20px;
    background-color: #FDF8E5;

    @media screen and (min-width: 880px) {
        padding: 0px 20px;
        top: 4%;
        right: 4%;
        box-shadow: 0px 2px 5px -2px #ccc;
        width: calc(88% - 100px);
        border-radius: 20px;
    }
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .toggle-menu {
        display: block;
        font-size: 28px;
        color: #222;
        cursor: pointer;
    }

    .logo {
        height: 30px;
        img {
            height: 100%;
        }
    }

    @media screen and (min-width: 880px) {
         .logo {
            display: none;
         }
        .toggle-menu {
            display: none;
        }
    }
`;
export const Title = styled.div`
    display: none;
    h5 {
        font-size: 14px;
        font-weight: 600;
        color: #476160;
        margin-bottom: 2px;
    }
    
    h6 {
        font-size: 14px;
        font-weight: 400;
        color: #A0ABBB;
    }

    @media screen and (min-width: 880px) {
        display: block;
        font-size: 17px;
    }
`;

export const HeadMeta = styled.div`
    display: none;
    align-items: center;
    gap: 20px;

    img {
        height: 40px;
        width: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        h4 {
            font-size: 13px;
            font-weight: 500;
            color: #7B8C82;
            border-bottom: 1px solid #7B8C82;
        }

        .row {
            display: flex;
            align-items: flex-end;
            gap: 10px;

            span {
                font-size: 14px;
                font-weight: 300;
            }

            svg {
                margin-bottom: 2px;
            }
        }
    }

     @media screen and (min-width: 880px) {
        display: flex;
    }
`;

export const MobileExtraMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    background-color: #FDF8E5;
    box-shadow: 0px 4px 5px -3px #ccc;
    margin-top: 90px;
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;

     @media screen and (min-width: 880px) {
        display: none;
    }
`;

export const TitleMobile = styled.div`
    h5 {
        font-size: 15px;
        font-weight: 600;
        color: #476160;
        margin-bottom: 6px;
    }
    
    h6 {
        font-size: 14px;
        font-weight: 400;
        color: #A0ABBB;
    }
`;

export const HeadMetaMobile = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        svg {
            height: 20px;
            width: 20px;
        }

        h4 {
            font-size: 14px;
            font-weight: 500;
            color: #7B8C82;
            border-bottom: 1px solid #7B8C82;
        }

        .row {
            display: flex;
            align-items: center;
            align-items: flex-end;
            gap: 10px;

            span {
                font-size: 14px;
                font-weight: 300;
            }

            svg {
                height: 8px;
                margin-bottom: 2px;
            }
        }
    }
`;
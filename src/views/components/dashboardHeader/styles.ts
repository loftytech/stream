import styled from 'styled-components'

export const HeaderWrapper = styled.header`
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
        font-size: 23px;
        color: #222;
        cursor: pointer;
    }

    @media screen and (min-width: 880px) {
        .toggle-menu {
            display: none;
        }
    }
`;
export const Title = styled.div`
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
        font-size: 17px;
    }
`;

export const HeadMeta = styled.div`
    display: flex;
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
`;
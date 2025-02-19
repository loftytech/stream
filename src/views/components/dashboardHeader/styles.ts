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
    background-color: #fff;

    @media screen and (min-width: 880px) {
        padding: 0px 4%;
        width: calc(100% - 240px);
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
export const Title = styled.h5`
    font-size: 14px;
    font-weight: 600;
    color: #0E141C;

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
            font-size: 14px;
            font-weight: 600;
            color: #1D1D1D;
        }

        span {
            font-size: 14px;
            font-weight: 300;
        }
    }
    
    
    .notification-wrapper {
        svg {
            font-size: 22px;
        }
    }
`;
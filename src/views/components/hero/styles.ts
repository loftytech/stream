import styled from 'styled-components'

export const Wrapper = styled.div`
    /* background-color: rgb(249, 249, 249); */
`;
export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(1deg, rgba(138, 39, 131, 0.97) 12.72%, #2A1027 70.42%, #1E1E1E 99.99%, #7C557A 100%);
    box-shadow: 0px 0px 20px -14px #ccc;
    /* padding: 90px 0px 50px 0px; */
    padding: 90px 4% 50px 4%;

    @media screen and (min-width: 880px) {
        padding: 20px 6% 50px 6%;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
    padding: 20px 20px 50px 20px;
    width: 100%;
    /* max-width: 1280px; */

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 6%;
        padding: 100px 20px 20px 20px;
    }
`;

export const TextContent = styled.div`
    width: 100%;
    max-width: 640px;

    @media screen and (min-width: 880px) {
        /* max-width: 500px; */
    }
    
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: #fff;

        @media screen and (min-width: 880px) {
        font-size: 60px;
        }
    }

    h6 {
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        line-height: 30px;
        font-weight: 400;
        margin: 35px 0px 45px 0px;

        @media screen and (min-width: 880px) {
            text-align: unset;
        }
    }

    .link-sec {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        flex-direction: column;
        justify-content: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            height: 55px;
            width: 100%;
            color: #fff;
            padding: 0px 40px;
            font-weight: 500;
            border-radius: 5px;
            background-color: #ab52c3;
            border: 1px solid ${props => props.theme.primaryColor};

            svg {
                font-size: 17px;
            }

            :last-child {
                color: #fff;
                background-color: transparent;
                border: 1px solid #fff;
            }

            @media screen and (min-width: 880px) {
                width: unset;
            }
        }


        @media screen and (min-width: 480px) {
            flex-direction: row;
        }
        @media screen and (min-width: 880px) {
            justify-content: start;
        }
    }
    
`;
export const ImageContent = styled.div`
    width: 100%;
    max-width: 640px;
`;


export const Stacks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    h3 {
        font-size: 14px;
        color: #fff;
    }

    .stacks-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        overflow-y: auto;

        -ms-overflow-style: none;
        scrollbar-width: none;

        ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
            display: none;
        }

        .img-wrapper {
            height: 40px;
            min-width: max-content;
            /* min-width: 100%; */
            img {
                /* max-width: 100%; */
                height: 100%;
                min-width: 100%;
            }

            @media screen and (min-width: 880px) {
                height: 60px;
            }
        }
    }
`;
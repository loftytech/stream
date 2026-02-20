import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #0E201F;
    position: relative;
    z-index: 99;

    position: relative;

    .overlay-wrapper {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 100px;
        z-index: 1;

        img {
            object-fit: cover;
        }
    }
`;


export const TrustedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 0%;

    h2 {
        color: #FDF8E5;
        margin-bottom: 30px;
        text-align: center;
        font-size: 16px;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow-x: auto;
        gap: 20px;

        li {
            min-width: 100px;
            height: 40px;

            img {
                object-fit: contain;
                min-width: 100px;
                height: 40px;
            }
        }
    }
`;

export const FeaturesWrapper = styled.div`
    padding: 20px 8%;

    h2 {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        color: #FDF8E5;
        margin-bottom: 10px;
    }

    h6 {
        color: #FEFBEF;
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        margin: auto;
        margin-bottom: 30px;
        max-width: 640px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media screen and (min-width: 720px) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #fff;
            border-radius: 10px;
            padding: 20px 20px;


            @media screen and (min-width: 720px) {
                width: calc(50% - 15px);
            }


            @media screen and (min-width: 1080px) {
                width: calc(33.33% - 30px);
            }

            img {
                height: 70px;
                margin-bottom: 15px;
            }

            h3 {
                color: #FDF8E5;
            }

            p {
                color: #FEFBEF;
                text-align: center;
                font-size: 14px;
                font-weight: 300;
                line-height: 23px;
            }
        }
    }
`;


export const ExperienceWrapper = styled.div`
    padding: 100px 8%;

    h2 {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #FDF8E5;
        margin-bottom: 10px;
    }

    h6 {
        color: #FEFBEF;
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        margin: auto;
        margin-bottom: 30px;
        max-width: 640px;
    }


    img {
        width: 100%;
        max-width: 640px;
        margin: 0px auto;
    }

    @media screen and (min-width: 880px) {
        h2 {
            font-size: 30px;
        } 

        h6 {
            font-size: 15px;
            font-weight: 300;
        }
    }
`;

export const WhoWeAreWrapper = styled.div`
    padding: 100px 8%;

`;

export const WhoWeAreContent = styled.div`
    
    img {
        width: 100%;
        max-width: 640px;
        margin: 0px auto;
    }
`;


export const ExploreWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 100px 8%;

    p {
        font-size: 14px;
        font-weight: 400;
        color: #FDF8E5;
        text-align: center;
        line-height: 24px;
        max-width: 720px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #476160;
        color: #FEFBEF;
        border: 1px solid #FEFBEF;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        padding: 0px 20px;
    }
`;

export const ReasonWrapper = styled.div`
    padding: 100px 8%;
`;


export const ReasonContent = styled.div`
    background-color: #2F4F4E;
    padding: 50px 20px;
    border-radius: 10px;
    border: 1px solid #fffa;
    box-shadow: 0px 0px 17px -2px #fff inset;

    .head {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;


        @media screen and (min-width: 880px) {
            flex-direction: row;
            justify-content: space-between;

            &::before {
                content: "";
            }
        }

        .steam-board {
            width: 100%;
            max-width: 100px;
            margin-bottom: 40px;
        }

        .text-info {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                color: #FDF8E5;
                text-align: center;
                font-weight: 600;
                font-size: 20px;
                margin-bottom: 15px;
            }

            h6 {
                text-align: center;
                color: #FEFBEF;
                font-weight: 300;
                font-size: 14px;
                line-height: 22px;
                max-width: 640px;
            }

            @media screen and (min-width: 880px) {
                h2 {
                    font-size: 30px;
                }
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 20px;

        @media screen and (min-width: 880px) {
            flex-direction: row;
        }

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-bottom: 1px solid #E4E4E7;
            padding: 40px 0px;

            @media screen and (min-width: 880px) {
                width: 33.33%;
                border-bottom: none;
                border-right: 1px solid #E4E4E7;
            }

            &:last-child {
                border: none;
            }

            img {
                height: 80px;
                margin-bottom: 15px;
            }

            h4 {
                text-align: center;
                color: #FDF8E5;
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            p {
                text-align: center;
                color: #FEFBEF;
                font-size: 14px;
                font-weight: 400;
                line-height: 23px;
                max-width: 340px;
            }
        }
    }


    a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #476160;
        color: #FEFBEF;
        border: 1px solid #FEFBEF;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 400;
        height: 48px;
        padding: 0px 20px;
        width: fit-content;
        margin: 0px auto;

        @media screen and (min-width: 880px) {
            margin: 40px 0px 0px 0px;
        }
    }
`;

export const ReviewWrapper = styled.div`
    padding: 100px 8%;
`;

export const ReviewContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    overflow-x: hidden;

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

    h2 {
        color: #FDF8E5;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    ul {
        display: block;
        gap: 20px;

        .content {
            display: flex;
            overflow-x: auto;
            width: 100%;
        }

        li {
            display: flex;
            gap: 20px;
            margin-right: 20px;
            /* width: 2000px; */

            .img-box {
                width: 200px;
                height: 200px;

                img {
                    object-fit: contain;
                }
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex: 1;
                width: 200px;

                img {
                    width: 120px;
                    margin-bottom: 10px;
                }

                p {
                    color: #FEFBEF;
                    font-size: 14px;
                    line-height: 23px;
                    margin-bottom: 10px;
                }

                h4 {
                    color: #FDF8E5;
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        width: 100%;

        div {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;

            svg {
                color: #FEFBEF;
                font-size: 14px;
            }

            span {
                font-size: 14px;
                color: #FEFBEF;
            }
        }
    }
`;

export const FaqWrapper = styled.div`
    padding: 20px 8%;

    h2 {
        font-size: 25px;
        font-weight: 600;
        text-align: center;
        color: #FDF8E5;
        margin-bottom: 10px;
    }

    h6 {
        color: #FEFBEF;
        text-align: center;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        margin: auto;
        margin-bottom: 30px;
        max-width: 640px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        li {
            display: flex;
            width: 100%;
            max-width: 720px;
            padding: 15px 0px;
            border-bottom: 1px solid #EAECF0;

            &:last-child {
                border: none;
            }

            .info {
                flex: 1;

                h4 {
                    font-size: 15px;
                    font-weight: 600;
                    color: #FDF8E5;
                    padding: 10px 0px;
                }

                p {
                    display: none;
                    color: #FEFBEF;
                    font-size: 13px;
                    font-weight: 300;
                    line-height: 23px;
                }
            }

            &:first-child {
                .info {

                    p {
                        display: block;
                    }
                }
            }

            svg {
                color: #FEFBEF;
                font-size: 20px;
            }
        }
    }
`;



export const QuestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 8%;

    img {
        height: 60px;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        color: #FDF8E5;
        margin-bottom: 10px;
    }

    h6 {
        font-size: 20px;
        font-weight: 300;
        color: #FDF8E5;
        text-align: center;
        margin-bottom: 30px;
        max-width: 640px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #476160;
        color: #FEFBEF;
        border: 1px solid #FEFBEF;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 400;
        height: 57px;
        width: 200px;
        padding: 0px 20px;
        margin: 0px auto;
    }
`;


export const GetStartWrapper = styled.div`
    position: relative;
    padding: 50px 8%;
    z-index: 2;
`;

export const GetStartedContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 40px 0px 40px;
        border-radius: 10px;
        border: 1px solid #fffa;
        box-shadow: 0px 0px 17px -2px #fff inset;
    }

    .form {
        width: 100%;
        max-width: 480px;
        h2 {
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
            text-align: center;
        }

        .row {
            display: flex;
            gap: 10px;

            input {
                flex: 1;
                height: 40px;
                padding: 0px 15px;
                color: #2A3A36;
                background-color: #FDF8E5;
                border-radius: 4px;
                border: none;
                min-width: 100px;
                
            }
        }

        button {
            width: 100%;
            height: 50px;
            border-radius: 10px;
            border: none;
            background-color: #476160;
            border: 1px solid #fff;
            color: #FEFBEF;
            margin-top: 25px;
        }

        p {
            font-size: 14px;
            color: #FDF8E5;
            margin-top: 20px;
            line-height: 24px;
            font-weight: 300;
        }

        @media screen and (min-width: 880px) {
            max-width: 540px;
            h2 {
                font-size: 30px;
                margin-bottom: 40px;
            }

            .row {
                display: flex;
                gap: 20px;

                input {
                    height: 50px;
                    
                }
            }

            p {
                font-size: 18px;
            }
        }
    }

    img {
        width: 100%;
        max-width: 480px;
        
        @media screen and (min-width: 880px) {
            align-self: flex-end;
            margin: 20px;
        }
    }
`;
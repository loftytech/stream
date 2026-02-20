import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FEFBEF;
    overflow: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
        display: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    padding: 20px 0%;
`;

export const PlanTab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    padding: 0px 8%;

    &::before {
        content: "";
        flex: 1;
        height: 2px;
        width: 100%;
        background-color: #E5EAF1;
        order: 2;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 25px;
        order: 1;

        &:last-child {
            order: 3;
        }


        span {
            &:first-child {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 40px;
                border-radius: 3px;
                font-size: 14px;
                font-weight: 400;
                color: #FEFBEF;
                background-color: #2F4F4E;
            }


            &:last-child {
                color: #7B8C82;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
`;

export const ContentRow = styled.div`
    padding: 0px 8%;
    margin-top: 100px;
    position: relative;

    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 0px 0px 0px 8%;
    }

    .text-content {
        h2 {
            color: #476160;
            font-size: 25px;
            font-weight: 400;
            margin-bottom: 10px;
        }

        h3 {
            color: #7B8C82;
            font-weight: 300;
            font-size: 16px;
            margin-bottom: 40px;
        }

        form {
            .referred {
                width: 100%;
                padding: 15px 20px;
                border-radius: 20px;
                margin-bottom: 20px;
                background-color: rgba(47, 79, 78, 0.55);
                box-shadow: 0px 0px 2px -1px #2F4F4E inset;

                span {
                    color: #FEFBEF;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
            input {
                height: 45px;
                padding: 0px 0px;
                width: 100%;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #E5EAF1;
                margin-bottom: 20px;
                border-radius: 0px;
                color: #476160;
                font-size: 14px;
                font-weight: 400;
            }

            button {
                width: 100%;
                height: 44px;
                border-radius: 4px;
                border: none;
                color: #FEFBEF;
                font-size: 14px;
                font-weight: 400;
                background-color: #2F4F4E;
            }

            .terms {
                display: flex;
                width: 100%;
                margin-bottom: 25px;
                gap: 12px;
                cursor: pointer;

                div.check-box {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 16px;
                    width: 16px;
                    border-radius: 3px;
                    border: 1px solid #E5EAF1;

                    svg {
                        display: none;
                        font-size: 17px;
                    }
                }

                div.checked {
                    background-color: #2F4F4E;

                    svg {
                        display: block;
                        color: #fff;
                    }
                }

                a {
                    font-size: 14px;
                    font-weight: 300;
                    flex: 1;
                    color: #7B8C82;
                    text-transform: capitalize;
                }
            }

            .meta {
                margin-top: 10px;

                a {
                    font-size: 13px;
                    font-weight: 400;
                    color: #7B8C82;
                    font-weight: 300;

                    span {
                        font-weight: 600;
                        color: #476160;
                        margin-left: 7px;
                    }
                }
            }
        }
    }

    .img-content {
        display: none;

        @media screen and (min-width: 880px) {
            display: block;
            max-width: 480px;
        }
    }
`;

export const ExploreCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 8%;
`;
export const ExploreCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: #2F4F4E;
    padding: 20px;
    margin-top: 100px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: transparent;
        border: 3px solid #FDF8E566;
        position: absolute;
        top: -98px;
        left: -98px;
    }

    &::after {
        content: "";
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: transparent;
        border: 3px solid #FDF8E5;
        position: absolute;
        bottom: -98px;
        right: -98px;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        color: #FEFBEF;
        line-height: 24px;
        max-width: 640px;

        @media screen and (min-width: 880px) {
            font-size: 18px;
            line-height: 28px;
        }
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        width: 200px;
        border-radius: 8px;
        background-color: #fff;
        color: #476160;
        margin-top: 20px;
    }
`;

export const SignupSuccess = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2F4F4E;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    .close-btn {
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
        
        svg {
            color: #FDF8E5;
            font-size: 20px;
        }
    }

    img {
        flex: 1;
        height: 200px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 20px;
        margin-bottom: 20px;

        h2 {
            color: #FDF8E5;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        p {
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            color: #FDF8E5;
            margin-bottom: 20px;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            border: none;
            font-size: 14px;
            font-weight: 600;
            height: 40px;
            border-radius: 20px;
            background-color: #FEFBEF;
            color: #476160;
        }
    }
`;
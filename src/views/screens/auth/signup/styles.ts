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

        ul {
            li {
                display: flex;
                background-color: #FDF8E5;
                padding: 20px 20px;
                border-radius: 10px;
                box-shadow: 0px 2px 4px -1px #ccc;

                .col {
                    flex: 1.5;
                    .save {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        .check-box {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 30px;
                            height: 30px;
                            border-radius: 4px;
                            border: 1px solid #476160;

                            &::before {
                                content: "";
                                width: 20px;
                                height: 20px;
                                border-radius: 4px;
                                background-color: #476160;
                            }
                        }

                        span {
                            color: #65EB1C;
                            font-size: 16px;
                            font-weight: 600;
                        }
                    }

                    h4 {
                        font-size: 25px;
                        font-weight: 400;
                        color: #476160;
                        margin-top: 20px;
                        margin-bottom: 16px;
                    }

                    p {
                        font-size: 14px;
                        font-weight: 300;
                        line-height: 20px;
                        color: #7B8C82;
                    }
                }

                .action {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;
                    flex: 1;

                    .amount {
                        display: flex;
                        flex-direction: column;
                        text-align: right;

                        span {
                            font-size: 17px;
                            font-weight: 400;
                            color: #476160;

                            &:last-child {
                                color: rgba(71, 97, 96, 0.3);
                                margin-top: 8px;
                                font-size: 13px;
                            }
                        }
                    }

                    .locked-amount {
                        display: flex;
                        gap: 10px;

                        span {
                            font-size: 18px;
                            color: #476160;
                        }

                        img {
                            height: 30px;
                        }
                    }

                    button {
                        height: 40px;
                        background-color: #476160;
                        border-radius: 6px;
                        border: none;
                        padding: 0px 24px;
                        color: #FDF8E5;
                        font-size: 13px;
                        font-weight: 400;
                        margin-top: 20px;
                    }
                }
            }

            .limited {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
                margin-top: 60px;

                img {
                    height: 30px;
                }

                span {
                    color: #476160;
                    font-size: 20px;
                    font-weight: 400;
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
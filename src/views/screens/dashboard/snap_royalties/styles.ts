import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;
`;
export const Container = styled.div`

`;

export const BalanceWrapper = styled.div`
    width: 100%;
`;

export const BalanceContent = styled.div`
    display: flex;
    padding: 20px 20px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    .img-overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;

        img {
            object-fit: cover;
        }
    }

    .text-content {
        flex: 1;
        position: relative;

        h4 {
            color: #FEFBEF;
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 20px;
        }

        h2 {
            color: #FEFBEF;
            font-size: 30px;
            margin-bottom: 20px;
            font-weight: 600;
        }

        h5 {
            font-size: 14px;
            font-weight: 400;
            color: #FEFBEF;
            margin-bottom: 15px;
        }

        .row {
            display: flex;
            align-items: flex-end;
            gap: 15px;

            button {
                border: none;
                background-color: #FDF8E5;
                color: #476160;
                font-size: 14px;
                padding: 10px 10px;
                border-radius: 4px;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                color: #FEFBEF;
                margin-bottom: 10px;
            }
        }
    }

    .logo-box {
        position: relative;
        width: 60px;
    }


    @media screen and (min-width: 880px) {
        padding: 40px 40px;
        
        .text-content {
            h4 {
                font-size: 19px;
            }

            h2 {
                font-size: 80px;
                margin-bottom: 30px;
            }

            h5 {
                font-size: 14px;
                margin-bottom: 20px;
            }

            .row {
                button {
                    font-size: 16px;
                    padding: 15px 26px;
                }

                span {
                    font-size: 14px;
                }
            }
        }
    }
`;

export const ProductWrapper = styled.div`
    max-width: 100%;
    margin-top: 40px;
    @media screen and (min-width: 880px) {
        flex-direction: row;
        flex: 1;
        max-width: unset;
        /* max-width: 640px; */
    }


    .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: #2F4F4E;
        }
    }

    ul {
        display: flex;
        gap: 30px;
        overflow-x: auto;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 250px;
            flex: 0 0 250px;
            border-radius: 8px;
            overflow: hidden;
            background-color: #FDF8E5;
            padding: 20px 20px;
            border-radius: 20px;

             @media screen and (min-width: 880px) {
                width: 250px;
                flex: 0 0 250px;
             }
        
             b {
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #476160;
             }

            .img-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                width: 100%;
                height: 120px;
                overflow: hidden;
                border-radius: 8px;

                img {
                    object-fit: cover;
                }
            }

            .content {

                h4 {
                    font-size: 12px;
                    font-weight: 400;
                    margin-bottom: 10px;
                    color: #7B8C82;
                }

                .actions {
                    display: flex;
                    gap: 25px;

                    .sub-action {
                        display: flex;
                        align-items: center;
                        gap: 4px;

                        svg {
                            font-size: 14px;
                            color: #2F4F4E;
                        }

                        span {
                            font-size: 14px;
                            font-weight: 400;
                            color: #2F4F4E;
                        }

                        &:first-child {
                            svg {
                                color: #2F4F4E;
                            }
                        }
                    }
                }

                .meta {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;

                    span {
                        &:first-child {
                            font-size: 16px;
                            font-weight: 600;
                            color: #2F4F4E;
                        }

                        &:last-child {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 24px;
                            border-radius: 12px;
                            padding: 0px 20px;
                            background-color: #E5EAF1;
                            color: #0925DB;
                            font-size: 12px;
                        }
                    }
                }

                button {
                    border: none;
                    height: 40px;
                    border-radius: 8px;
                    background-color: #2F4F4E;
                    width: 100%;
                    color: #FDF8E5;
                    font-size: 14px;
                    font-weight: 600;
                    margin-top: 12px;
                }

            }
        }
    }
`;

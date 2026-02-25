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

export const Categories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    ul {
        display: flex;
        gap: 10px;

        li {
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #D7D3BA;
            color: #2F4F4E;
            font-size: 14px;
            font-weight: 600;

            &:first-child {
                background-color: transparent;
            }
        }
    }

`;


export const TrendingLiveStream = styled.div`
    max-width: 100%;
    margin-top: 40px;
    @media screen and (min-width: 880px) {
        flex-direction: row;
        flex: 1;
        max-width: unset;
        /* max-width: 640px; */
    }

    /* background-color: #FDF8E5;
    padding: 20px;
    border: 1px solid #E4E4E7; */

    .head {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 15px;

        h3 {
            font-size: 16px;
            font-weight: 400;
            color: #2F4F4E;
        }

        .row {
            display: flex;
            gap: 10px;
            align-items: center;

            img {
                height: 25px;
            }
        }
    }

    ul {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            overflow: hidden;

            @media screen and (min-width: 880px) {
                width: calc(50% - 15px);
            }

            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .content {
                display: flex;
                align-items: flex-start;
                width: 100%;
                padding: 20px 0px 0px 0px;
                gap: 10px;
                flex: 1;

                .info {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;


                    img {
                        width: unset;
                        height: 30px;
                        object-fit: contain;
                    }

                    .actions {
                        display: flex;
                        gap: 15px;

                        button {
                            height: 40px;
                            border-radius: 8px;
                            padding: 5px 20px;
                            margin-top: 20px;
                            color: #FEFBEF;
                            background-color: #476160;
                            border: 1px solid #476160;

                            &:first-child {
                                background-color: transparent;
                                color: #476160;
                            }
                        }
                    }
                }

                .meta {
                    img {
                        height: 40px;
                        object-fit: contain;
                    }
                }
            }
        }
    }
`;


export const TrendingVideo = styled.div`
    max-width: 100%;
    margin-top: 40px;
    @media screen and (min-width: 880px) {
        flex-direction: row;
        flex: 1;
        max-width: unset;
        /* max-width: 640px; */
    }

    /* background-color: #FDF8E5;
    padding: 20px;
    border: 1px solid #E4E4E7; */

    .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: #2F4F4E;
            text-transform: uppercase;
        }

        a {
            color: #2F4F4E;
            font-size: 11px;
            font-weight: 400;
        }
    }

    ul {
        display: flex;
        gap: 30px;
        overflow-x: auto;

        li {
            .container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                min-width: 200px;
                height: 250px;
                position: relative;
                border-radius: 10px;
                overflow: hidden;

                &::before {
                    content: "";
                    height: 30px;
                    width: 10px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                }

                img.play-circle {
                    position: relative;
                    width: 40px;
                    height: 40px;
                }

                .content {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    width: 100%;
                    padding: 0px 10px;
                    padding-bottom: 10px;

                    img {
                        height: 20px;
                        width: 20px;
                        position: relative;
                    }
                    .info {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;

                        span {
                            font-size: 13px;
                            color: #FEFBEF;
                            text-transform: uppercase;

                            &:first-child {
                                font-weight: 600;
                                margin-bottom: 8px;
                                font-size: 11px;
                            }

                            &:nth-child(2) {
                                text-transform: uppercase;
                                font-weight: 600;
                                font-size: 11px;
                            }
                        }
                    }
                }
            }

            .row {
                display: flex;
                justify-content: space-between;
                margin-top: 8px;

                h4 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #476160;
                }

                b {
                    font-size: 14px;
                    font-weight: 600;
                    color: #F20000;
                }
            }
        }
    }
`;

export const TrendingVideoAlt = styled.div`
    background-color: #FDF8E5;
    border-radius: 10px;
    max-width: 100%;
    margin-top: 40px;
    border: 1px solid #E4E4E7;
    padding: 20px 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        flex: 1;
        max-width: unset;
        /* max-width: 640px; */
    }

    /* background-color: #FDF8E5;
    padding: 20px;
    border: 1px solid #E4E4E7; */

    .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: #2F4F4E;
            text-transform: uppercase;
        }

        a {
            color: #2F4F4E;
            font-size: 11px;
            font-weight: 400;
        }
    }

    ul {
        display: flex;
        gap: 30px;
        overflow-x: auto;

        li {
            .container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                min-width: 180px;
                height: 200px;
                position: relative;
                border-radius: 15px;
                overflow: hidden;

                &::before {
                    content: "";
                    height: 30px;
                    width: 10px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                }

                img.play-circle {
                    position: relative;
                    width: 40px;
                    height: 40px;
                }

                .content {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    width: 100%;
                    padding: 0px 10px;
                    padding-bottom: 10px;

                    img {
                        height: 20px;
                        width: 20px;
                        position: relative;
                    }
                    .info {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;

                        span {
                            font-size: 13px;
                            color: #FEFBEF;
                            text-transform: uppercase;

                            &:first-child {
                                font-weight: 600;
                                margin-bottom: 8px;
                                font-size: 11px;
                            }

                            &:nth-child(2) {
                                text-transform: uppercase;
                                font-weight: 600;
                                font-size: 11px;
                            }
                        }
                    }
                }
            }

            .row {
                display: flex;
                justify-content: space-between;
                margin-top: 8px;

                h4 {
                    font-size: 14px;
                    font-weight: 600;
                    color: #476160;
                }

                b {
                    font-size: 14px;
                    font-weight: 600;
                    color: #F20000;
                }
            }
        }
    }
`;
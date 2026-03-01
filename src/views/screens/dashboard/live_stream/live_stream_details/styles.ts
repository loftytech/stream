import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 40px;
`;
export const MainContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        gap: 40px;
    }
`;

export const Container = styled.div`
    @media screen and (min-width: 880px) {
        flex: 1;
    }
`;

export const LiveStreamVideo = styled.div`
    width: 100%;

    .img-wrapper {
        border-radius: 18px;
        background-color:  #476160;
        overflow: hidden;
        height: 300px;

        .lofty-yt-video-player {
            width: 100%;
            height: 300px;
            border-radius: 8px;
            overflow: hidden;

            iframe {
                height: 300px;
            }
        }
        
        img {
            width: 100%;
            object-fit: contain;
            border-radius: 10px;
        }

        @media screen and (min-width: 880px) {
            height: 480px;
            .lofty-yt-video-player {
                width: 100%;
                height: 480px;

                iframe {
                    height: 480px;
                }
            }
        }
    }

    .details {
        display: flex;
        gap: 25px;
        margin-top: 15px;
        margin-bottom: 15px;
        padding-top: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid #E5EAF1;

        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .info {
            margin-right: auto;
            .head {
                display: flex;
                gap: 10px;
                align-items: center;

                h2  {
                    font-size: 16px;
                    color: #476160;
                    font-weight: 600;
                }

                img {
                    height: 20px;
                    width: 20px;
                }
            }

            span {
                font-size: 13px;
                font-weight: 300;
                color: #476160;
            }
        }

        .actions {
            display: flex;
            gap: 10px;

            button {
                width: 100px;
                height: 45px;
                border-radius: 8px;
                border: none;
                color: #FEFBEF;
                background-color: #2F4F4E;

                &:first-child {
                    color: #2F4F4E;
                    border: 1px solid #476160;
                    background-color: transparent;
                }
            }
        }
        
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 20px;
        margin-bottom: 20px;

        li {
            font-size: 14px;
            font-weight: 400;
            color: #7B8C82;
        }
    }

    .chat {
        display: flex;
        align-items: center;
        gap: 15px;

        .input-section {
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            border-radius: 25px;
            background-color: rgba(164, 159, 159, 0.5);
            padding: 0px 5px 0px 20px;
            flex: 1;

            input {
                flex: 1;
                border: none;
                background-color: transparent;
            }

            .heart {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #fff;

                img {
                    height: 20px;
                }
            }
        }

        .row {
            display: flex;
            align-items: center;
            gap: 15px;

            img {
                height: 35px;
            }

            span {
                color: #7B8C82;
                font-weight: 400;
                font-size: 14px;
            }
        }
    }
`;

export const SideBar = styled.div`
    @media screen and (min-width: 880px) {
        flex: 1;
        width: 100%;
        max-width: 480px;
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
        padding-bottom: 10px;
        border-bottom: 0.5px solid #D7D3BA;

        h3 {
            font-size: 16px;
            font-weight: 500;
            color: #2F4F4E;
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(50% - 10px);
            border-radius: 8px;
            overflow: hidden;
            background-color: #FDF8E5;
            padding: 20px 20px;
            border-radius: 20px;

             @media screen and (min-width: 880px) {

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

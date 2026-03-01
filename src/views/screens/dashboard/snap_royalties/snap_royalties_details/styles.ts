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

export const RoyaltyDetails = styled.div`
    width: 100%;

    .img-wrapper {
        padding: 40px 15px;
        border-radius: 18px;
        /* height: 400px; */
        background-color:  #476160;
        
        img {
            width: 100%;
            object-fit: contain;
            border-radius: 10px;
        }
    }

    .actions {
        display: flex;
        gap: 25px;
        margin-top: 15px;
        margin-bottom: 15px;

        .sub-action {
            display: flex;
            align-items: center;
            gap: 4px;

            svg {
                font-size: 18px;
                color: #2F4F4E;
            }

            span {
                font-size: 18px;
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

    h2 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 5px;
        color: #476160;
    }

    h4 {
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 10px;
        color: #2F4F4E;
        padding-bottom: 10px;
        border-bottom: 0.5px solid #D7D3BA;
    }

    p {
        font-size: 14px;
        font-weight: 300;
        color: #476160;
        line-height: 20px;
    }

    .earn-actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 40px;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            border-radius: 8px;
            background-color: transparent;
            border: 1px solid #2F4F4E;
            color: #476160;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;

             &:last-child {
                background-color: #476160;
                color: #FDF8E5;
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

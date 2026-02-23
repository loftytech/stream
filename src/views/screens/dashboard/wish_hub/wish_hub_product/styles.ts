import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding-top: 40px;
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

export const BalanceWrapper = styled.div`
    background-color: #FDF8E5;
    padding: 20px 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px -5px #ccc;
`;
export const BalanceContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    padding: 20px 20px;
    border-radius: 20px;

    .hot-deal {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 6px;
        padding: 8px 10px;
        background-color: #FDF8E5;
        width: fit-content;
        margin-bottom: 20px;
        box-shadow: 0px 2px 6px -2px #ccc;

        img {
            height: 16px;
        }

        span {
            color: #476160;
            font-size: 13px;
        }
    }

    .img-wrapper {
        width: 100%;
        max-width: 200px;
        align-self: center;

        img {
            width: 100%;
            object-fit: contain;
        }
    }
`;

export const ProductInfo = styled.div`
    margin-top: 20px;

    h2 {
        color: #476160;
        font-weight: 700;
        font-size: 23px;
        margin-bottom: 20px;
    }

    .details {
        display: flex;
        border-radius: 16px;
        overflow: hidden;
        background: #BAA1FC;
        background: linear-gradient(230deg, rgba(186, 161, 252, 1) 0%, rgba(216, 206, 247, 1) 100%);

        .col {
            padding: 20px 20px;
            flex: 1;

            .row {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 13px;

                span {
                    font-size: 14px;
                    font-weight: 400;
                    color: #476160;
                }

                b {
                    font-size: 20px;
                    color: #2F4F4E;
                }
            }

            h3 {
                font-size: 14px;
                font-weight: 400;
                color: #476160;
            }
        }

        .col-2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 20px 20px;
            background-color: #B095FD;

            span {
                color: #EBE0CC;
                text-align: center;
                margin-bottom: 5px;
            }

            .row {
                display: flex;
                align-items: center;
                gap: 7px;
                
                img {
                    height: 20px;
                }

                span {
                    font-size: 20px;
                    font-weight: 400;
                    color: #EBE0CC;
                }
            }
        }
    }
`;


export const PrizeInfo = styled.div`
    background-color: #FDF8E5;
    padding: 20px 20px;
    border-radius: 15px;
    margin-top: 40px;

    h2 {
        color: #476160;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .sub-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;

        img {
            height: 20px;
        }

        h4 {
            font-size: 16px;
            font-weight: 400;
            color: #7B8C82;
            margin-top: 4px;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            display: flex;
            flex-direction: column;
            gap: 6px;

            b {
                color: #7B8C82;
                font-weight: 600;
            }

            span {
                font-size: 13px;
                font-weight: 400;
                color: #7B8C82;
            }
        }
    }

    button {
        height: 55px;
        border-radius: 8px;
        background-color: #2F4F4E;
        width: 100%;
        margin-top: 40px;
        border: none;
        color: #fff;
        font-size: 20px;
    }
`;


export const SideBar = styled.div`
    @media screen and (min-width: 880px) {
        flex: 1;
        width: 100%;
        max-width: 480px;
    }

    .featured-product {
        background-color: #FDF8E5;
        padding: 20px 20px;
        border-radius: 10px;
        box-shadow: 0px 5px 5px -5px #ccc;

        .top-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: #fff;
            padding: 20px 20px;
            border-radius: 20px;

            .hot-deal {
                display: flex;
                align-items: center;
                gap: 5px;
                border-radius: 6px;
                padding: 8px 10px;
                background-color: #FDF8E5;
                width: fit-content;
                margin-bottom: 20px;
                box-shadow: 0px 2px 6px -2px #ccc;

                img {
                    height: 16px;
                }

                span {
                    color: #476160;
                    font-size: 13px;
                }
            }

            .img-wrapper {
                width: 100%;
                max-width: 200px;
                align-self: center;

                img {
                    width: 100%;
                    object-fit: contain;
                }
            }
        }

        .text-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 15px;

            h2 {
                font-size: 18px;
                color: #476160;
            }

            span {
                font-size: 14px;
                color: #476160;
            }
        }
    }
`;


export const PreviousWinners = styled.div`
    padding: 20px 0px;
    border-radius: 15px;
    margin-top: 40px;

    h2 {
        color: #476160;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .sub-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;

        img {
            height: 20px;
        }

        h4 {
            font-size: 16px;
            font-weight: 400;
            color: #7B8C82;
            margin-top: 4px;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            display: flex;
            gap: 10px;

            h3 {
                color: #7B8C82;
                font-size: 16px;
                font-weight: 700;
            }

            .row {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .info {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    flex: 1;

                    b {
                        color: #7B8C82;
                        font-weight: 600;
                    }

                    span {
                        font-size: 13px;
                        font-weight: 400;
                        color: #7B8C82;
                    }
                }

                img {
                    height: 15px;
                }
            }
        }
    }
`;
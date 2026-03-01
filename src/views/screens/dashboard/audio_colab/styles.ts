import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
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
        justify-content: center;
        align-items: center;
        gap: 20px;
        overflow-x: auto;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            flex: 0 0 100px; 

            @media screen and (min-width: 880px) {
                flex: 0 0 200px;
            }

            img {
                width: 100%;
                aspect-ratio: 1/1;
            }

            span {
                color: #7B8C82;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

`;


export const TrendingArtists = styled.div`
    background-color: #FDF8E5;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #E4E4E7;
    margin-top: 40px;

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
            display: flex;
            align-items: flex-end;
            min-width: 200px;
            height: 200px;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
            }

            .content {
                display: flex;
                justify-content: space-between;
                position: relative;
                width: 100%;
                padding-left: 4px;
                padding-right: 10px;
                padding-bottom: 10px;

                img {
                    height: 40px;
                    width: 40px;
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
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;

export const ForYou = styled.div`
    flex: 1;
    width: 100%;

    h4 {
        color: #476160;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-x: auto;

        li {
            display: flex;
            flex-direction: column;
            flex: 0 0 150px; 

            img {
                width: 100%;
                aspect-ratio: 1/1;
                margin-bottom: 8px;
                object-fit: cover;
            }

            .row {
                display: flex;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 6px;

                b {
                    font-size: 14px;
                    font-weight: 600;
                    color: #476160;
                }

                span {
                    font-size: 14px;
                    font-weight: 600;
                    color: #476160;
                }
            }

            p {
                color: #6C7072;
                font-size: 13px;
                font-weight: 400;
            }
        }
    }
`;
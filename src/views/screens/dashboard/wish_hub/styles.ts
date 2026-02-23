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
    padding: 40px 20px 60px 20px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    @media screen and (min-width: 880px) {
        padding: 40px 40px 60px 40px;
    }

    .img-overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;

        img {
            object-fit: cover;
            min-height: 100%;
        }
    }

    .text-content {
        flex: 1;
        position: relative;

        .hot-deal {
            display: flex;
            align-items: center;
            gap: 5px;
            border-radius: 6px;
            padding: 8px 10px;
            background-color: #FDF8E5;
            width: fit-content;
            margin-bottom: 20px;

            img {
                height: 16px;
            }

            span {
                color: #476160;
                font-size: 13px;
            }
        }

        h4 {
            color: #FEFBEF;
            font-size: 15px;
            font-weight: 600;
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

        p {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            max-width: 480px;
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
            align-items: center;
            width: 200px;
            flex: 0 0 200px;
            border-radius: 8px;
            overflow: hidden;

             @media screen and (min-width: 880px) {
                width: 250px;
                flex: 0 0 250px;
             }
        

            .img-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #fff;
                margin-bottom: 18px;
                width: 100%;
                padding: 20px 20px;
                img {
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
                }
            }

            .content {
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;

                h4 {
                    font-size: 12px;
                    font-weight: 400;
                    margin-bottom: 4px;
                    color: #2F4F4E;
                }

                h3 {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 6px;
                    color: #2F4F4E;
                }

                h6 {
                    font-size: 12px;
                    font-weight: 400;
                    margin-bottom: 4px;
                    color: #4CE039;
                }

            }
        }
    }
`;

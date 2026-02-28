import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
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
    padding: 0px 4%;

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
    padding: 0px 4%;
    position: relative;

    @media screen and (min-width: 880px) {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 0px 0px 0px 4%;
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
            max-width: 480px;
        }

        form {
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

export const VendorList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 4%;
    gap: 40px;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: flex-start;
    }

    .items {
        display: flex;
        width: 100%;
        background-color: #FDF9EA;
        padding: 20px 20px;
        border-radius: 10px;
        align-items: center;
        box-shadow: 0px 4px 10px -5px #476160;

        @media screen and (min-width: 880px) {
            width: calc(50% - 20px);
        }

        .img-wrapper {
            width: 80px;
            height: 80px;
            padding: 10px;
            border-radius: 50%;
            background-color: #E5EAF1;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .text-content {
            flex: 1;
            margin-left: 15px;

            h3 {
                font-size: 14px;
                font-weight: 600;
                color: #476160;
                margin-bottom: 10px;
            }

            .row {
                display: flex;
                align-items: center;

                img {
                    height: 14px;
                    margin-right: 4px;
                }

                span {
                    font-weight: 400;
                    color: #7B8C82;
                    font-size: 13px;
                    margin-right: 10px;
                }

                .status {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    padding: 4px 6px;
                    margin-left: 4px;
                    border-radius: 4px;
                    background-color: rgba(255, 0, 0, 0.19);

                    svg {
                        font-size: 14px;
                        color: #D30707;
                    }

                    b {
                        color: #D30707;
                        font-weight: 400;
                        font-size: 12px;
                    }
                }
            }
        }

        button {
            background-color: #2F4F4E;
            height: 40px;
            padding: 0px 20px;
            border-radius: 8px;
            border: none;
            color: #FDF9EA;
        }
    }
`;

export const ExploreCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 4%;
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
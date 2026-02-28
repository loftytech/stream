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

export const ContentHead = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 4%;
    position: relative;

    @media screen and (min-width: 880px) {
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
    }

    .switch-country {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            height: 20px;
        }

        select {
            border: none;
            color: #7B8C82;
            font-size: 14px;
            background-color: transparent;
        }
    }
`;

export const TopThreeStreamers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;

    .items {
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
            padding: 5px;
            border-radius: 50%;
            background-color: #E5EAF1;
            border: 2px solid #476160;
            position: relative;

            img.avatar {
                width: 95px;
                height: 95px;
                border-radius: 50%;
                object-fit: contain;
                position: relative;
                z-index: 1;
            }

            img.crown {
                height: 30px;
                position: absolute;
                z-index: 2;
                top: -20px;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                background-color: #476160;
                color: #FDF8E5;
                font-size: 14px;
                font-weight: 600;
                border-radius: 50%;
                position: absolute;
                bottom: -15px;
                z-index: 2;
            }
        }

        .text-info {
            margin-top: 20px;
            .head {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                h3 {
                    font-size: 14px;
                    font-weight: 400;
                    color: #7B8C82;
                }

                img {
                    height: 14px;
                }
            }

            h4 {
                text-align: center;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 400;
                color: #476160;
            }
        }
    }

    .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 380px;
        align-self: center;

        .items {

            img.badge {
                width: 40px;
                position: absolute;
                z-index: 2;
                bottom: 0px;
                right: -10px;
            }
        }

    }
`;

export const StreamersList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 4%;
    gap: 40px;

    .items {
        display: flex;
        width: 100%;
        background-color: #FDF9EA;
        padding: 12px 20px;
        border-radius: 10px;
        align-items: center;
        box-shadow: 0px 4px 10px -5px #476160;


        h4 {
            font-size: 14px;
            font-weight: 600;
            margin-right: 20px;
            color: #2F4F4E;
        }

        .img-wrapper {
            width: 70px;
            height: 70px;
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
            }
        }

        b {
            font-size: 14px;
            font-weight: 600;
            color: #2F4F4E;
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
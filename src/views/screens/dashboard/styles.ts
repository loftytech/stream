import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`;
export const Container = styled.div`

`;

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1080px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
    }
`;

export const BalanceContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;

    @media screen and (min-width: 1080px) {
        max-width: 480px;
    }
`;

export const BalanceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./assets/img/tmp/balance-img-2.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 320px;
    width: 100%;
`;

export const BalanceCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 250px;
    width: 100%;
    max-width: 407px;
    /* background-color: #031B1A; */
    /* background-color: #f0f; */
    margin-top: 22px;
    border-radius: 20px;

    .text-content {
        margin-left: 40px;
        margin-top: 40px;

        h4 {
            font-size: 14px;
            font-weight: 400;
            color: #FEFBEF;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 19px;
            font-weight: 600;
            color: #FEFBEF;
        }
    }
`;

export const PlayerWrapper = styled.div`
    background-image: url("./assets/img/tmp/music-player-img.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 150px;
    border-radius: 15px;

`;

export const ExperienceContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 20px;
    flex: 1;
    .experience {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background: url("./assets/img/experience-img.png");
        background-position: center;
        background-size: cover;
        width: 200px;
        height: 320px;
        border-radius: 25px;
        padding: 20px 10px;

        h2 {
            color: #FFFDFD;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            border-radius: 15px;
            color: #476160;
            font-size: 13px;
            font-weight: 600;
            padding: 0px 10px;
            background-color: #FEFBEF;
        }

        @media screen and (min-width: 1080px) {
            width: 320px;
            height: 400px;
        }
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;

        .netflix {
            display: flex;
            justify-content: flex-end;
            background: url("./assets/img/youtube-netflix-img.png");
            background-position: center;
            background-size: cover;
            height: 150px;
            border-radius: 20px;
            padding: 20px 20px;
            flex: 1;

            .info {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                height: 100%;

                h2 {
                    color: #FFFDFD;
                    font-size: 10px;
                    margin-bottom: 4px;
                    padding-left: 10px;
                }

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 24px;
                    border-radius: 15px;
                    color: #476160;
                    font-size: 12px;
                    width: fit-content;
                    white-space: nowrap;
                    font-weight: 600;
                    padding: 0px 10px;
                    background-color: #FEFBEF;
                }
            }
        }

        .pintrest {
            display: flex;
            justify-content: flex-end;
            background: url("./assets/img/pinterest-img.png");
            background-position: center;
            background-size: cover;
            height: 150px;
            border-radius: 20px;
            padding: 20px 20px;
            flex: 1;

            .info {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                height: 100%;

                h2 {
                    color: #2F4F4E;
                    font-size: 18px;
                    margin-bottom: 4px;
                    padding-left: 10px;
                }

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 24px;
                    border-radius: 15px;
                    color: #476160;
                    font-size: 12px;
                    width: fit-content;
                    white-space: nowrap;
                    font-weight: 600;
                    padding: 0px 10px;
                    background-color: #FEFBEF;
                }
            }

            @media screen and (min-width: 1080px) {
                height: 200px;
            }
        }

        .downloadables {
            display: flex;
            justify-content: flex-end;
            background: url("./assets/img/downloadables-img.png");
            background-position: center;
            background-size: cover;
            height: 150px;
            border-radius: 20px;
            padding: 20px 20px;

            .info {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                height: 100%;

                h2 {
                    color: #2F4F4E;
                    font-size: 14px;
                    margin-bottom: 4px;
                    padding-left: 10px;
                }

                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 24px;
                    border-radius: 15px;
                    color: #476160;
                    font-size: 12px;
                    width: fit-content;
                    white-space: nowrap;
                    font-weight: 600;
                    padding: 0px 10px;
                    background-color: #FEFBEF;
                }
            }

            @media screen and (min-width: 1080px) {
                display: none;
            }
        }
    }
`;

export const LiveStreamWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 30px;
    overflow-x: auto;

    @media screen and (min-width: 880px) {
        overflow-x: unset;
    }

    .items {
        display: flex;
        background-color: #FDF8E5;
        border-radius: 10px;
        border: 1px solid #E4E4E7;
        overflow: hidden;
        min-width: 100%;

        @media screen and (min-width: 880px) {
            min-width: unset;
            flex: 1;
        }


        .info {
            flex: 1;
            padding: 20px 20px;

            .meta {
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                img {
                    height: 30px;
                    width: 30px;
                }

                span {
                    font-size: 10px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    color: #9146FF;
                }
            }

            h2 {
                font-size: 13px;
                color: #2F4F4E;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 5px;
            }

            p {
                font-size: 13px;
                font-weight: 400;
                color: #2F4F4E;
                line-height: 22px;
                text-transform: capitalize;
            }
        }

        img {
            width: 200px;
        }
    }
`;

export const LiveStreamIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 20px;
    margin-bottom: 20px;

    span {
        width: 25px;
        height: 3px;
        border-radius: 1.5px;
        background-color: #D9D9D9;
    }

    span.active {
        background-color: #2F4F4E;
    }
`;


export const ReferralLink = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 20px;

    h2 {
        font-size: 15px;
        font-weight: 600;
        color: #2F4F4E;
        width: 100%;
        margin-bottom: 4px;
    }

    a {
        font-size: 16px;
        color: #476160;
        text-decoration: underline;
        margin-right: 10px;
    }

    svg {
        height: 20px;
    }

    @media screen and (min-width: 880px) {
        h2 {
            width: unset;
            font-size: 18px;
            margin-right: 20px;
            margin-bottom: 0px;
        }
        a {
            font-size: 20px;
        }
    }
`;

export const TrendingArtists = styled.div`
    background-color: #FDF8E5;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #E4E4E7;

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

export const TrendingVideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 100%;
    overflow: hidden;

    @media screen and (min-width: 880px) {
        flex-direction: row;
    }
`;


export const TodayTrendingVideo = styled.div`
    .head {
        margin-bottom: 15px;

        h3 {
            font-size: 14px;
            font-weight: 600;
            color: #2F4F4E;
            text-transform: uppercase;
        }
    }

    img {
        height: 250px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .lofty-yt-video-player {
        width: 100%;
        height: 250px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #ccc;

        iframe {
            height: 250px;
        }
    }

    @media screen and (min-width: 880px) {
        min-width: 440px;
    }
`;

export const TrendingVideo = styled.div`
    max-width: 100%;
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
    }
`;

export const MoreFeatures = styled.div`
    margin-bottom: 20px;

    h2 {
        font-size: 15px;
        font-weight: 600;
        color: #2F4F4E;
        margin-bottom: 10px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media screen and (min-width: 880px) {
            flex-direction: row;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 200px;
            background: url('./assets/img/wish-hub-gift.png');
            background-position: top;
            background-size: cover;
            padding: 20px;
            width: 100%;
            border-radius: 10px;

            @media screen and (min-width: 880px) {
                max-width: 480px;
            }

            h4 {
                font-size: 20px;
                font-weight: 600;
                color: #EFDE92;
                margin-bottom: 10px;
            }

            p {
                color: #EDEDED;
                max-width: 200px;
            }

            a {
                background-color: #FEFBEF;
                color: #476160;
                width: fit-content;
                padding: 8px 10px;
                border-radius: 4px;
                font-size: 14px;
                margin-top: 10px;
            }

            &:last-child {
                background: url('./assets/img/user-trigger-img.png');
                background-position: center;
                background-size: cover;

                h4 {
                    color: #101F35;
                }

            }
        }
    }
`;

export const RecentActivities = styled.div`
    margin-bottom: 20px;

    h2 {
        font-size: 15px;
        font-weight: 600;
        color: #2F4F4E;
        margin-bottom: 10px;
    }
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FDF8E5;
            padding: 20px 20px;
            box-shadow: 0px 1px 4px -2px #0006;
            border-radius: 10px;

            .info {
                .top {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px;

                    .icon-box {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                        background-color: #476160;

                        svg {
                            height: 28px;
                        }
                    }

                    .text-content {
                        h4 {
                            color: #476160;
                            font-size: 15px;
                            font-weight: 400;
                        }

                        span {
                            color: #7B8C82;
                            font-size: 14px;
                            font-weight: 300;
                        }
                    }
                }

                .trans-type {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #FEFBEF;
                    width: 120px;
                    height: 40px;
                    border-radius: 8px;
                    color: #2F4F4E;
                    font-size: 13px;
                    box-shadow: 0px 4px 8px -2px #0006 inset;
                }
            }

            .meta {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 20px;

                span {
                    &:first-child {
                        font-size: 25px;
                        font-weight: 600;
                        color: #476160;
                    }

                    &:last-child {
                        color: #44FF00;
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
            }
        }
    }
`;
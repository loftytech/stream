import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
`;
export const Container = styled.div`

`;
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E5E9EB;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
    }

    .side-section {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
            color: #fff;
            padding: 10px 15px;
            border-radius: 6px;
            background-color: ${props => props.theme.primaryColor};
        }
    }
`;

export const HeaderStats = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        align-items: center;
    }

    li {
        flex: 1;
        max-width: 320px;

        &:first-child {
            h5 {
                font-size: 16px;
                font-weight: 600;
                color: #252C32;
            }

            h2 {
                color: #252C32;
                font-size: 28px;
                font-weight: 600;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            span {
                color: #252C32;
                font-size: 14px;
            }
        }
        &:nth-child(2) {
            background-color: #E2FFF0;
            border-radius: 6px;

            h4 {
                font-size: 14px;
                font-weight: 500;
                padding: 10px 20px;
                color: #203035;
                border-bottom: 0.5px solid #20303566;
            }

            h5 {
                color: #203035;
                padding: 10px 20px;

            }

            h2 {
                color: #203035;
                font-size: 30px;
                padding: 0px 20px 20px 20px;
            }
        }
    }
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 880px) {
        flex-direction: row;
    }

    .col-1 {
        border: 1px solid #E5E9EB;
        border-radius: 5px;

        @media screen and (min-width: 880px) {
            width: 40%;
        }

        .stats {
            padding: 20px  20px;
            position: relative;

            h5 {
                font-size: 15px;
                font-weight: 600;
                color: #828282;
                margin-bottom: 10px;
            }

            h2 {
                font-size: 30px;
                font-weight: 600;
                color: #203035;
            }

            h6 {
                font-size: 14px;
                font-weight: 400;
                margin-top: 15px;
                color: #4F4F4F;
            }

            svg {
                width: 20px;
                position: absolute;
                top: 10px;
                right: 10px;
            }
        }

        .graph {
            padding: 10px 10px;
            border-top: 1px solid #ECECEC;
        }
    }

    .col-2 {
        flex: 1;
        border: 1px solid #E5E9EB;
        border-radius: 5px;

        h2 {
            font-size: 20px;
            font-weight: 600;
            padding: 10px 20px;
        }

        ul.table-head {
            display: none;
            background-color: #EEF8F3;

            @media screen and (min-width: 880px) {
                display: flex;
            }

            li {
                flex: 1;
                padding: 15px 15px;
                font-size: 14px;
                font-weight: 400;
                color: #6E7C87;
                white-space: break-spaces;
            }
        }

        ul.table-row {
            display: flex;
            flex-wrap: wrap;
            border-top: 1px solid #E5E9EB;
            padding-top: 15px;

            @media screen and (min-width: 880px) {
                flex-wrap: nowrap;
                padding-top: 0px;
            }

            li {
                flex: 1;
                padding: 0px 15px 15px 15px;
                color: #252C32;
                font-size: 14px;
                white-space: nowrap;

                &:last-child {
                    span {
                        font-size: 12px;
                        font-weight: 300;
                        border: 1px solid #20E781;
                        border-radius: 25px;
                        padding: 8px 10px;
                        white-space: nowrap;
                    }
                }

                @media screen and (min-width: 880px) {
                    white-space: unset;
                    padding: 15px 15px;
                }
            }
        }
    }
`;

export const RecentOrders = styled.div`
    h2 {
        font-size: 20px;
        font-weight: 600;
        padding: 10px 20px;
    }
    .table {
        overflow: auto;
    }

    ul.table-head {
        display: flex;
        background-color: #EEF8F3;
        width: max-content;

        li {
            padding: 15px 15px;
            font-size: 14px;
            font-weight: 400;
            color: #6E7C87;
            width: 150px;

            &:last-child {
                width: 180px;
            }
        }
    }

    ul.table-row {
        display: flex;
        border-top: 1px solid #E5E9EB;
        padding-top: 15px;
        white-space: nowrap;
        width: max-content;


        li {
            padding: 0px 15px 15px 15px;
            color: #252C32;
            font-size: 14px;
            width: 150px;


            &:nth-child(6) {
                text-overflow: ellipsis;
                word-break: break-all;
                white-space: normal !important;
                word-wrap: break-word !important;
            }

            &:last-child {
                width: 180px;
                span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                    font-weight: 300;
                    border-radius: 25px;
                    padding: 8px 5px;
                    white-space: nowrap;
                    background-color: #DCFCE7;

                    &::before {
                        content: "";
                        display: block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: #22C55E;
                    }
                }
            }
        }
    }
`;



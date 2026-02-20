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


export const RecentOrders = styled.div`
    .search {
        display: flex;
        align-items: center;
        gap: 15px;
        border: 1px solid #9A9A9A;
        height: 50px;
        border-radius: 6px;
        background-color: transparent;
        font: 14px;
        padding: 0px 15px;
        margin-bottom: 20px;

        svg {
            color: #71797D;
        }


        input {
            height: 100%;
            border: none;
            flex: 1;

            &::placeholder {
                color: #71797D;
            }
        }
    }

    .table-top-head {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 20px;

        h2 {
            font-size: 20px;
            font-weight: 600;
        }

        select {
            padding: 10px 20px;
            border: 1px solid #979797;
            border-radius: 4px;
            font-size: 14px;
            color: 32454C;
            font-weight: 400;
            background-color: transparent;
        }
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


        }
    }
`;
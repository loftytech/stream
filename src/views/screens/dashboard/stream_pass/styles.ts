import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`;
export const Container = styled.div`

`;


export const TabWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-bottom: 20px;

    &::before {
        content: "";
        flex: 1;
        height: 2px;
        width: 100%;
        background-color: #E5EAF1;
        order: 2;
    }


    &::after {
        content: "";
        flex: 1;
        height: 2px;
        width: 100%;
        background-color: #E5EAF1;
        order: 4;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 25px;

        &:first-of-type {
            order: 1;
        }

        &:nth-of-type(2) {
            order: 3;
        }


        &:nth-of-type(3) {
            order: 5;
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
                color: #2F4F4E;
                background-color: #E5EAF1;
            }


            &:last-child {
                color: #7B8C82;
                font-size: 14px;
                font-weight: 400;
            }
        }

        &:first-of-type {
            span {
                &:first-child {
                    background-color: #2F4F4E;
                    color: #FEFBEF;
                }
            }
        }
    }
`;


export const ProfileCard = styled.div`
    width: 100%;
    background-color: #2F4F4E;
    border-radius: 20px;
`;


export const ProfileContent = styled.div`
    display: flex;
    padding: 20px 20px;
    border-radius: 20px;
    gap: 20px;
    overflow: hidden;

    .profile-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 20px;

        @media screen and (min-width: 880px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;

            @media screen and (min-width: 880px) {
                max-width: 320px;
                width: 100%;
            }

            li {
                display: flex;
                justify-content: space-between;
                width: 100%;

                b {
                    font-size: 15px;
                    font-weight: 600;
                    color: #FEFBEF;
                }

                img {
                    height: 20px;
                }

                span {
                    color: #7B8C82;
                    font-size: 14px;
                    font-weight: 400;
                    text-transform: uppercase;

                    &:first-child {
                        
                    }

                    &:last-child {
                        
                    }
                }
            }
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border: none;
            height: 45px;
            background-color: #FEFBEF;
            border-radius: 4px;
            padding: 0px 20px;

            svg {
                font-size: 20px;
                color: #2F4F4E;
            }

            span {
                font-weight: 400;
                color: #2F4F4E;
            }
        }
    }
    


    @media screen and (min-width: 880px) {
        padding: 40px 40px;
        
    }
`;

export const TableWrapper = styled.div`
    background-color: #FDF8E5;
    border-radius: 10px;
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
        width: max-content;

        li {
            padding: 15px 15px;
            font-size: 14px;
            font-weight: 600;
            color: rgba(25, 29, 35, 1);
            width: 200px;

            &:first-child {
                width: 300px;
            }

            /* &:first-child {
                width: 50px;
            }
        
            &:nth-child(2) {
                width: 350px;
            }

            &:last-child {
                width: 100px;
            } */
        }
    }

    ul.table-row {
        display: flex;
        border-bottom: 1px solid #E5E9EB;
        padding-top: 15px;
        white-space: nowrap;
        width: max-content;


        li {
            padding: 0px 15px 15px 15px;
            color: #252C32;
            font-size: 14px;
            width: 200px;



            &:first-child {
                width: 300px;
            }

            &:last-child {
                display: flex;
                align-items: center;
                gap: 20px;

                svg {
                    font-size: 15px;
                    color: #476160;

                    &:last-of-type {
                        font-size: 18px;
                    }
                }
            }
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
    }
`;

export const ResubCard = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background-color: #FDF8E5;
    padding: 20px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px -5px #476160;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        max-width: 640px;
    }

    .date-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100px;


        img {
            width: 100%;
            object-fit: contain;
            position: relative;
        }
        span {
            font-size: 50px;
            font-weight: 600;
            color: #E6F3FF;
            position: absolute;
        }

        @media screen and (min-width: 880px) {
            width: 200px;
            img {
                width: 100%;
            }
            span {
                font-size: 100px;
            }
        }
    }

    .text-content {
        display: flex;
        flex-direction: column;
        flex: 1;

        h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 24px;
        }

        ul {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;

            li {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 10px 20px;
                border-radius: 10px;
                background-color: #2F4F4E;

                b {
                    font-size: 30px;
                    font-weight: 600;
                    color: #CFDBE6;
                }

                span {
                    font-size: 13px;
                    font-weight: 400;
                    color: #CFDBE6;
                }
            }
        }

        p {
            font-size: 14px;
            font-weight: 400;
            color: #7B8C82;
            line-height: 20px;
            text-transform: capitalize;
        }
    }
`;

export const DeleteAccount = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDF8E5;
    padding: 20px 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 10px -5px #476160;
    
    h4 {
        font-size: 16px;
        font-weight: 600;
        color: #FF0000;
        margin-bottom: 20px;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        color: #FF9393;
        margin-bottom: 20px;
    }

    button {
        display: flex;
        gap: 10px;
        align-items: center;
        width: fit-content;
        height: 45px;
        padding: 0px 14px;
        border-radius: 8px;
        border: none;
        background-color: #760F0F;

        span {
            font-size: 14px;
            font-weight: 600;
            color: #FEFBEF;
        }

        svg {
            color: #FEFBEF;
            font-size: 15px;
        }
    }
`;

export const SaveChanges = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 45px;
    border-radius: 8px;
    border: noe;
    background-color: #2F4F4E;
    width: fit-content;
    padding: 0px 20px;
    margin-bottom: 20px;
    cursor: pointer;

    svg {
        font-size: 23px;
        color: #FEFBEF;
    }

    span {
        font-size: 15px;
        font-weight: 400;
        color: #FEFBEF;
    }
`;
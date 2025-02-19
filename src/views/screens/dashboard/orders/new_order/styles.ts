import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
`;
export const Container = styled.div`

`;
export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 4px;
    svg {
        font-size: 30px;
        color: #203035;
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h2 {
            font-size: 19px;
            font-weight: 600;
            color: #203035;
        }

        span {
            font-size: 13px;
            font-weight: 400;
            color: #71797D;
        }
    }
`;


export const Form = styled.form`
    margin-top: 40px;
    max-width: 720px;

    h4 {
        font-size: 15px;
        font-weight: 600;
        color: #203035;
        margin-bottom: 15px;
    }

    .row, .row-alt {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;

        .input-col {
            display: flex;
            flex-direction: column;
            gap: 4px;
            flex: 1;

            label {
                font-size: 13px;
                font-weight: 400;
                color: #344054;
            }

            input, select {
                height: 44px;
                border-radius: 4px;
                padding: 0px 15px;
                border: 0.5px solid #D0D5DD;
                width: 100%;
                background-color: transparent;
                color: #667085;
            }
        }
    }

    .row-alt {
        &::after {
            content: "";
            flex: 1;
        }

        .upload-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            background-color: #EFEFEF;
            border: 0.5px solid #D0D5DD;
            height: 150px;
            border-radius: 8px;
            cursor: pointer;

            svg {
                color: #667085;
                font-size: 20px;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                color: #667085;
            }

            .attachments {
                display: flex;
                flex-direction: column;
                gap: 4px;

                li {
                    display: flex;
                    gap: 2px;
                    font-size: 13px;
                    color: #667085;

                    &::after {
                        content: ',';
                        display: inline-block;
                        font-size: 14px;
                    }

                    &:last-child {
                        &::after {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .actions {
        display: flex;
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 40px;

        button {
            background-color: #02CB63;
            height: 45px;
            border-radius: 8px;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border: none;
            flex: 1;
            max-width: 140px;
            cursor: pointer;

            &:last-child {
                background-color: transparent;
                border: 0.5px solid #FF8E8E;
                color: #FF8E8E;
            }
        }
    }

`;
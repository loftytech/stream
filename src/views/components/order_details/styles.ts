import styled from 'styled-components'


export const PurchaseModal = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
        display: none;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px dashed #979797;
    
        .col {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h2 {
                font-size: 18px;
                font-weight: 600;
                color: #203035;
            }

            h6 {
                font-size: 14px;
                font-weight: 400;
                color: #71797D;
            }
        }

        img {
            height: 20px;
        }
    }

    h3 {
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
`;
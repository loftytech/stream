import styled from 'styled-components';

export const Wrapper = styled.div<{$showPopup: boolean, $isDashboard: boolean}>`
    display: ${props => props.$showPopup ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    background: #0006;
    width: 100%;
    height: 100%;
    padding: 20px;
    position: fixed;
    top: 0px;
    right: 0px;
    cursor: pointer;
    z-index: 9999999999;

    @media screen and (min-width: 880px) {
        /* width: ${props => props.$isDashboard ? "calc(100% - 240px)" : "100%"}; */
    }
`;

export const Content = styled.div<{$maxWidth: string, $background: string, scale: number, opacity: number}>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.$background};
    padding: 25px;
    border-radius: 10px;
    width: 100%;
    max-width: ${props => props.$maxWidth};
    max-height: calc(100vh - 40px);
    cursor: default;
    transform: scale(${props => props.scale});
    opacity: ${props => props.opacity};
    transition: all 0.2s ease-in-out;


    h4 {
        font-size: 18px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 30px;
        color: ${(props) => props.theme.primaryColor};
    }
    label {
        display: block;
        font-size: 14px;
        font-weight: 500;
        color: #909090;
        margin-bottom: 8px;
    }
    .form-page-wrapper .input-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 35px;
        position: relative;
    }
    input, select, textarea {
        display: block;
        background: #fff;
        height: 50px;
        font-size: 13px;
        font-weight: 300;
        color: ${props => props.theme.textColor};
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 20px;
        border: 1px solid rgba(145, 145, 145, 0.3);

        :disabled {
            background-color: ${props => props.theme.disabledInputColor};
        }
    }
    textarea {
        height: 200px;
        resize: none;
    }
    .form-wrapper .password-input-wrapper input {
        padding-right: 50px;
    }
    .form-wrapper .password-input-wrapper svg {
        position: absolute;
        right: 20px;
        color: #ccc;
        font-size: 18px;
    }

    input::placeholder {
        color: #959393;
    }
    input:focus, textarea:focus {
        border: 1px solid ${props => props.theme.lightPrimaryColor};
        outline: none;
    }
    button {
        width: 100%;
        height: 50px;
        background: ${(props) => props.theme.primaryColor};
        color: #fff;
        border: none;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
    }

`;
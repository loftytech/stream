import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
        display: none;
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SideSection = styled.aside`
    display: none;
    background-color: #203035;
    height: 100%;
    overflow: hidden;
    width: 50%;
    padding: 0px 20px;
    flex: 1;

    @media screen and (min-width: 880px) {
        display: flex;
        flex-direction: column;

        img {
            height: 60px;
            width: unset;
            object-fit: contain;
            margin-top: 10px;
        }

        h2 {
            font-size: 50px;
            color: #02CB63;
            margin-top: auto;
        }
        h6 {
            font-size: 14px;
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: auto;
            color: #FFFFFF;
        }

        span {
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            text-align: center;
            margin-bottom: 20px;
        }
    }

`;
export const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 20px;
    gap: 40px;
    flex: 1;
    min-height: 100vh;
    max-height: 100vh;
    overflow: scroll;

    &::before {
        content: "";
    }
`;

export const Form = styled.form`
    position: relative;
    z-index: 2;
    padding: 20px 20px;
    width: 100%;
    max-width: 480px;


`;

export const TabWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const TabItem = styled.div<{isActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    flex: 1;
    position: relative;
    border-bottom: 0.5px solid #5B5B5B;

    &::before {
        content: "";
        display: ${props => props.isActive ? "block" : "none"};
        position: absolute;
        width: 100%;
        bottom: -2px;
        height: 4px;
        background-color: #02CB63;
    }
`;

export const InputSec = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #667185;
    padding: 0px 15px;

    img {
        height: 20px;
    }

    input {
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        font-size: 13px;
        color: #222;
        border: none;
        background: transparent;
        &::placeholder {
            color: #CDCDCD;
        }
    }
`;
export const PasswordInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .input-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        border: 1px solid #667185;
        background: transparent;


        img {
            height: 20px;
        }


        input {
            flex: 1;
            font-size: 13px;
            color: #222;
            border: none;
            background: transparent !important;
            border-radius: 0px;
            background: #fff;
            padding: 0px 0px 0px 10px;
            &::placeholder {
                color: #CDCDCD;
            }
        }

        svg {
            fill: #898B8D;
            font-size: 18px;
            cursor: pointer;
        }
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 47px;
    color: #203035;
    font-size: 16px;
    font-weight: 600;
    background-color: #02CB63;
    margin-top: 60px;
    border: none;
    cursor: pointer;
`;

export const UsePhone = styled.div`
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    margin-top: -10px;
    margin-bottom: 15px;

    span {
        font-size: 13px;
        font-weight: 300;
        color: #5B5B5B;
    }

    a {
        font-size: 14px;
        font-weight: 600;
        color: #02CB63;
    }
`;

export const ForgotPass = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    margin-bottom: 15px;

    span {
        font-size: 13px;
        font-weight: 400;
        color: #5B5B5B;
    }

    a {
        font-size: 14px;
        font-weight: 600;
        color: #02CB63;
    }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

    &::before {
        content: "";
        height: 20px;
        width: 1px;
        background-color: #1D1D1D;
        order: 2;
    }

    a {
        font-size: 14px;
        font-weight: 400;
        color: #1D1D1D;

        &:first-child {
            order: 1;
        }
        &:last-child {
            order: 3;
        }
    }
`;
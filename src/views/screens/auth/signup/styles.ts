import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: #0B0B0B;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
        display: none;
    }
`;

export const Container = styled.div`
    background-color: #0B0B0B;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    gap: 40px;
    width: 100%;

    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        z-index: 1;
        background: #11b4b8;
        opacity: 0.4;
        margin-bottom: -10px;
        /* bottom: 0px; */
        /* background: linear-gradient(0deg, rgba(4,116,187,0.5816527294511555) 33%, rgba(17,180,184,0.5284314409357493) 76%); */
        box-shadow: 0px 0px 500px 200px #11b4b8;
    }

    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            display: block;
            height: 20px;
        }
    }
`;

export const Form = styled.form`
    position: relative;
    z-index: 2;
    padding: 20px 20px;
    border-radius: 8px;
    background-color: #1F1F1F66;
    width: 100%;
    max-width: 480px;

    h3 {
        font-size: 20px;
        font-weight: 700;
        color: #F0F2F5;
        margin-bottom: 10px;
    }

    .sub-title-row {
        display: flex;
        gap: 10px;
        margin-bottom: 35px;
        span {
            font-size: 14px;
            font-weight: 400;
            color: #98A2B3;
        }

        a {
            font-size: 14px;
            font-weight: 400;
            color: ${props => props.theme.primaryColor};

        }
    }


`;

export const InputSec = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 8px;
        font-size: 13px;
        font-weight: 600;
        color: #D0D5DD;
    }

    input {
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        font-size: 13px;
        color: #fff;
        border: 1px solid #667185;
        border-radius: 8px;
        background: transparent;
        ::placeholder {
            color: #667185;
        }
    }
`;
export const PasswordInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 8px;
        font-size: 13px;
        font-weight: 600;
        color: #D0D5DD;
    }
    .input-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        border: 1px solid #667185;
        border-radius: 4px;
        background: transparent;

        input {
            flex: 1;
            font-size: 13px;
            color: #fff;
            border: none;
            background: transparent !important;
            border-radius: 0px;
            background: #fff;
            ::placeholder {
                color: #667185;
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
    height: 45px;
    border-radius: 4px;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    background-color: #0553B1;
    margin-top: 10px;
    border: none;
    cursor: pointer;
`;

export const FormFooter = styled.div`
    .or-alt {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 20px;
        height: 40px;
        margin: 20px 0px 20px 0px;

        ::before, ::after {
            content: "";
            display: block;
            height: 1px;
            width: 100%;
            flex: 1;
            background-color: #515151;
        }

        span {
            color: #D7D7D7;
            font-size: 12px;
            font-weight: 400;
        }
    }
    
    .social-auth {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        border: 1px solid #98A2B3;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 12px;
            font-weight: 600;
            color: #fff;
        }
    }
`;
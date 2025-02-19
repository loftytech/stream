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
        width: 0px;
        height: 0px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        z-index: 1;
        background: #11b4b8;
        opacity: 0.4;
        margin-bottom: -10px;
        box-shadow: 0px 0px 200px 100px #11b4b8;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    padding: 20px 20px;
    border-radius: 8px;
    background-color: #1F1F1F66;
    width: 100%;
    max-width: 400px;

    h3 {
        font-size: 18px;
        font-weight: 700;
        color: #FFF;
        margin-bottom: 10px;
    }

    .sub-title-row {
        display: flex;
        gap: 10px;
        margin-bottom: 35px;
        span {
            font-size: 13px;
            font-weight: 400;
            color: #667185;
        }

        a {
            font-size: 14px;
            font-weight: 400;
            color: ${props => props.theme.primaryColor};

        }
    }


    .github-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 25px;

        img {
            height: 100px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    a {
        font-size: 13px;
        color: #98A2B3;
    }
`;
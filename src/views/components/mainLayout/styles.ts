import styled from 'styled-components'

export const MainLayoutWrapper = styled.div`
    background-color: #FEFBEF;
    min-height: 100vh;
`;

export const Content = styled.div`
    flex: 1;
    margin-top: 70px;
    position: relative;
    z-index: 99;
    padding: 0px 20px;

    @media screen and (min-width: 880px) {
        margin-left: 200px;
        padding: 4% 4%;
    }
`;
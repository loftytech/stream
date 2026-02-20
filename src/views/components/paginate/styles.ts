import styled from 'styled-components'

export const Pagination = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px 0px 0px;
    
    .next, .prev, span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        height: 35px;
        width: 35px;
        cursor: pointer;
        /* border-radius: 2px; */

        svg {
            font-size: 22px;
            color: #5d5b5b;
        }
    }

    .pages-wrapper {
        display: flex;
        gap: 10px;

        span.pages {
            font-size: 15px;
            color: #5d5b5b;
        }

        span.active {
            background-color: ${props => props.theme.primaryColor};
            color: #fff;
        }
    }
`;
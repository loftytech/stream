import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    img {
        height: 40px;
        width: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 2px;

        h4 {
            font-size: 14px;
            font-weight: 600;
            color: #1D1D1D;
        }

        span {
            font-size: 14px;
            font-weight: 300;
        }
    }
    
    
    .notification-wrapper {
        svg {
            font-size: 22px;
        }
    }
`;

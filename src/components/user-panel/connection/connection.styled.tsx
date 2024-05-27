import styled from 'styled-components';


export const ConnectionBlock = styled.div`
    width: 232px;
    height: 36px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 3px;
    background: #fc4c1e;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ConnectionText = styled.span`
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
`;

export const ConnectionLink = styled.a`
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    transition: all 0.5s;

    &:hover {
        text-decoration: none;
        opacity: 0.6;
    }
`;

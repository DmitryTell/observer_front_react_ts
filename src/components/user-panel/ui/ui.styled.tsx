import styled from 'styled-components';


export const Link = styled.a`
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    line-height: normal;
    opacity: 0.5;
    transition: all 0.5s;

    &:hover {
        opacity: 1;
    }
`;

export const Button = styled.button`
    width: 171px;
    height: 37px;
    border: none;
    border-radius: 6px;
    background: #a96afc;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    line-height: 20px;
    transition: all 0.5s;

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }

    &:hover {
        opacity: 0.5;
    }
`;

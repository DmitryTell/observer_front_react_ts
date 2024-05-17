import styled from 'styled-components';


export const Input = styled.input`
    width: 245px;
    height: 35px;
    margin-bottom: 21px;
    padding: 8px 11px;
    border-radius: 4px;
    border: 1px solid #444;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 14px;
    opacity: 0.7;

    &::placeholder {
        opacity: 0.5;
    }
`;

export const Button = styled.button`
    width: 248px;
    height: 54px;
    border-radius: 4px;
    background: #3574f0;
    border: none;
    color: #e5e5e5;
    font-weight: 400;
    line-height: normal;
    transition: all 0.5s;

    &:hover {
        opacity: 0.5;
    }

    &:disabled {
        opacity: 0.1;
    }
`;

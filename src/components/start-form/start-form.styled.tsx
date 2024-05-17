import styled from 'styled-components';


interface IStatusProp {
  $isOnline: boolean;
}

export const Container = styled.div`
    padding-top: 185px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

export const Link = styled.a`
    color: #fff;
    font-size: 16px;
    line-height: normal;
    opacity: 0.5;
    transition: all 0.5s;

    &:hover {
        opacity: 1;
    }
`;

export const Form = styled.div`
    width: 354px;
    height: 343px;
    padding-top: 30px;
    border-radius: 6px;
    background: #242424;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const Title = styled.h2`
    margin-bottom: 8px;
    color: #fff;
    font-size: 32px;
    line-height: normal;
`;

export const Text = styled.p`
    margin-bottom: 30px;
    color: #fff;
    font-size: 16px;
`;

export const Status = styled.div<IStatusProp>`
    margin-bottom: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    & svg circle {
        fill: ${(props) => (props.$isOnline ? '#00DD80' : '#DD0000')};
    }
`;

export const StatusText = styled.span`
    color: #fff;
    font-size: 14px;
    opacity: 0.7;
`;

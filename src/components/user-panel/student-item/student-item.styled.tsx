import styled from 'styled-components';


interface IItemProps {
  $isActive: boolean;
  $hasUnreadMessages: boolean;
  $hasNoneStatus: boolean;
}

interface IItemNameProp {
  $isReadMessages: boolean;
}

export const Item = styled.li<IItemProps>`
    height: 50px;
    padding-left: 13px;
    padding-right: 13px;
    background: ${(props) => (props.$isActive ? '#606060' : 'transparent')};
    border-bottom: ${(props) => (props.$hasUnreadMessages ? '1px solid #fff' : 'none')};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.5s;

    &:hover {
        opacity: 0.8;
    }

    &::before {
        content: "";
        width: ${(props) => (props.$hasNoneStatus ? '20px' : '0')};
        background: transparent;
    }
`;

export const ItemName = styled.span<IItemNameProp>`
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    opacity: ${({ $isReadMessages }) => ($isReadMessages ? '0.8' : '1')};

    &:hover {
        opacity: 0.8;
    }
`;

export const ItemUnreadMessages = styled.div`
    width: 28px;
    height: 24px;
    border-radius: 6px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

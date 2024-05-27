import styled from 'styled-components';


interface IStudentsProp {
  $isEmpty: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Panel = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const PanelTitle = styled.h2`
    color: #fff;
    font-size: 24px;
    line-height: normal;
`;

export const PanelAmount = styled.p`
    color: #fff;
    font-size: 15px;
    line-height: 20px;
    opacity: 0.5;
    display: flex;
    gap: 5px;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 16px;

    & svg {
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
            opacity: 0.5;
        }
    }
`;

export const Students = styled.div<IStudentsProp>`
    min-height: 200px;
    background: #242424;
    border-radius: 6px;
    display: flex;
    overflow-x: hidden;
    justify-content: ${({ $isEmpty }) => ($isEmpty ? 'center' : 'start')};
    align-items: ${({ $isEmpty }) => ($isEmpty ? 'center' : 'stretch')};
`;

export const StudentsEmpty = styled.p`
    width: 168px;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.5;
    text-align: center;
`;

export const StudentsList = styled.ul`
    width: 229px;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

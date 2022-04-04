import styled from 'styled-components';

export const StyledDeleteButton = styled.button`
  width: 22px;
  height: 22px;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

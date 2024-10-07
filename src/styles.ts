import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f7f7;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
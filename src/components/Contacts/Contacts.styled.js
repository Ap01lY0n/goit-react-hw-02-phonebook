import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
  padding-left: 20px;
`;
export const ListItem = styled.li`
  list-style: none;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DelBtn = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid black;
  background-color: #ff3838;
  border-radius: 15px; 
  color: #2a2a2a;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
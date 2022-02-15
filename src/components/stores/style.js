import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const StoresWrapper = styled(Box)`
  list-style-type: none;
`;

export const StoreContainer = styled.li`
  display: flex;
  background-color: #fff;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  div {
    flex-grow: 1;
    margin-left: 10px;
  }
`;

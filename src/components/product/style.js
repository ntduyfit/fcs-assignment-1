import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ProductWrapper = styled(Box)`
  display: flex;
  padding: 5px;

  img {
    border-radius: 5px;
  }
`;

export const ProductInfo = styled.div`
  margin-left: 10px;
`;

export const ProductDetailWrapper = styled(Box)`
  background-color: silver;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 10px;

  .MuiBox-root {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px;
  }
`;

export const ProductDetailInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CartActions = styled.div`
  display: flex;
`;

export const QtyButton = styled(Button)`
  padding: 2px;
  min-width: 30px;
  height: 30px;
`;

export const SubmitButton = styled(Button)`
  flex-grow: 1;
  display: flex;
  justify-content: ${(props) => (props.remove ? 'center' : 'space-between')};
  height: 30px;
  margin-left: 10px;
`;

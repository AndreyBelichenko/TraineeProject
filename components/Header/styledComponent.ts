import styled from 'styled-components';
import { Header, Button } from 'semantic-ui-react';

export const HeaderStyled = styled(Header)({
  margin: '0!important',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const ButtonStyled = styled(Button)({
  height: '100%',
  width: '100%',
});

export const BtnWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 10px;
`;

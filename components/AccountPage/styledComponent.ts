import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const AccountMain = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AccountContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;

export const AccountContent = styled.div`
    width: 80%;
    height: 100%;
    background: white;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const AccountInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    width: 20%;
    height: 300px;
    padding: 0 20px 20px;
`;

export const AccountInfoAvatar = styled.div`
  height: 40%;
  display: flex;
  align-items:center;
  border-bottom: 1px solid grey;
`;

export const AccountInfoAvatarWrapper = styled.div`
  height: 70%;
  margin: auto 5%;
`;

export const AccountInfoName = styled.div`
  height: 20%;
  border-bottom: 1px solid grey;
  display: flex;
  align-items:center;
  justify-content: flex-start;
`;

export const AccountInfoNameTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin: auto 7%;
`;

export const AccountName = styled.div`
  font-weight: normal;
  font-size: 13px;
  margin-top: 5px;
`;

export const AccountInfoButtons = styled.div`
    height: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const HeaderStyled = styled(Header)({
    margin: '0!important',
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: '80px',
});
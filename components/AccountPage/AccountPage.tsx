import * as React from 'react';
import * as Styled from './styledComponent';
import { Button, Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';

const AccountPage: React.FC = () => {
  const userData = useSelector((state:any) => state.userData.userData);
  return (
        <Styled.AccountMain>
            <Header page="account"/>
            <Styled.AccountContentWrapper>
                <Styled.AccountContent>
                    <Styled.AccountInfo>
                        <Styled.AccountInfoAvatar>
                            <Styled.AccountInfoAvatarWrapper><Image src={userData.avatar} size="tiny" circular /></Styled.AccountInfoAvatarWrapper>
                            <Button primary size="small">Change Photo</Button>
                        </Styled.AccountInfoAvatar>
                        <Styled.AccountInfoName>
                            <Styled.AccountInfoNameTitle>Name:</Styled.AccountInfoNameTitle>
                            <Styled.AccountName>{userData.name}</Styled.AccountName>
                        </Styled.AccountInfoName>
                        <Styled.AccountInfoButtons>
                            <Button primary size="mini" color="red">Cancel</Button>
                            <Button primary size="mini">Save</Button>
                        </Styled.AccountInfoButtons>
                    </Styled.AccountInfo>
                </Styled.AccountContent>
            </Styled.AccountContentWrapper>
        </Styled.AccountMain>
  );
};

export default AccountPage;

import * as React from 'react';
import * as Styled from './styledComponent';
import Header from '../Header/Header';

const AuthPage: React.FC = () => (
        <Styled.AuthMain>
            <Header page="auth"/>
            <Styled.AuthContentWrapper>
                <Styled.AuthContent />
            </Styled.AuthContentWrapper>
        </Styled.AuthMain>
  );

export default AuthPage;

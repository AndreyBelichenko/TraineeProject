import * as React from 'react';
import * as Styled from './styledComponent';
import Router from 'next/router';
import * as Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLoginWithButton from 'react-facebook-login';
import { Button } from 'semantic-ui-react';
import * as actions from '../../redux/actionCreators/userDataActionCreators';

const Header = (props: any) => {
  const dispatch = useDispatch();

  const handleRouteAccount = () => Router.push('/account');
  const handleRedirectList = () => Router.push('/list');

  const logOut = () => {
    Cookies.remove('userData');
    dispatch(actions.logOut());
    return Router.push('/auth');
  };

  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      const dataToSend = {
        name: response.profileObj.name,
        avatar: response.profileObj.imageUrl,
      };
      Cookies.set('userData', dataToSend);
      dispatch(actions.setUserData(dataToSend));
      dataToSend.name ? Router.push('/list') : null;
    }
  };

  const responseFacebook = (response: any) => {
    console.log(response);
    if (response.accessToken) {
      const dataToSend = {
        name: response.name,
        avatar: response.picture.data.url,
      };
      Cookies.set('userData', dataToSend);
      dispatch(actions.setUserData(dataToSend));
      dataToSend.name ? Router.push('/list') : null;
    }
  };

  const displayButtons = (page: string) => {
    switch (page) {
      case 'auth': return(
                <>
                    <GoogleLogin
                        clientId="411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className="header_auth auth"
                    />
                    <FacebookLoginWithButton
                        appId="263020944839635"
                        textButton=""
                        fields="name,email,picture"
                        onClick={responseFacebook}
                        callback={responseFacebook}
                        icon={<Button circular color="facebook" icon="facebook" />} />
                </>
      );
      case 'list': return(
                <>
                    <Styled.BtnWrapper>
                      <Styled.ButtonStyled
                          size="massive"
                          circular
                          icon="user"
                          onClick={handleRouteAccount}/>
                    </Styled.BtnWrapper>
                    <Styled.BtnWrapper>
                      <Styled.ButtonStyled
                          size="massive"
                          circular
                          icon="log out"
                          onClick={logOut}/>
                    </Styled.BtnWrapper>
                </>
      );
      case 'account': return <Styled.BtnWrapper>
        <Styled.ButtonStyled
            circular
            icon="arrow left"
            onClick={handleRedirectList}/>
      </Styled.BtnWrapper>;
    }
  };

  return (
      <div className="header_content">
        <Styled.HeaderStyled block>
            {displayButtons(props.page)}
        </Styled.HeaderStyled>
      </div>
  );
};

export default Header;

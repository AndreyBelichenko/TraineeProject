import * as React from 'react';
import * as Styled from './styledComponent';
import GoogleLogin from 'react-google-login';
import FacebookLoginWithButton from 'react-facebook-login';
import { connect } from 'react-redux';
import {userDataAllActionType} from "../../redux/actionTypes/userDataActionType";
import { Dispatch } from "redux";
import {setUserData} from '../../redux/actionCreators/userDataActionCreators';
import Router from 'next/router'

const AuthPage: React.FC = (props: any) => {
    const responseGoogle = (response: any) => {
        console.log("response google", response);
        let dataToSend = {
            name: response.profileObj.name,
            avatar: response.profileObj.imageUrl,
        }
        props.setUserData(dataToSend);
        dataToSend.name ? Router.push('/list') : null;
    };

    const responseFacebook = (response: any) => {
        console.log("response facebook", response);
        if(response.accessToken){
            let dataToSend = {
                name: response.name,
                avatar: response.picture.data.url,
            }
            props.setUserData(dataToSend)
            dataToSend.name ? Router.push('/list') : null;
        }
    };

  return (
        <Styled.AuthMain>
            <Styled.HeaderStyled block>
                <GoogleLogin
                    clientId="411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com"
                    buttonText=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <FacebookLoginWithButton
                    appId="263020944839635"
                    // autoLoad={false}
                    textButton=""
                    fields="name,email,picture"
                    onClick={responseFacebook}
                    callback={responseFacebook}
                    icon="fa-facebook" />
            </Styled.HeaderStyled>
            <Styled.AuthContentWrapper>
                <Styled.AuthContent />
            </Styled.AuthContentWrapper>
        </Styled.AuthMain>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<userDataAllActionType>) => ({
  setUserData: (payload: object) => dispatch(setUserData(payload)),
});

export default connect(
    null,
    mapDispatchToProps,
)(AuthPage);

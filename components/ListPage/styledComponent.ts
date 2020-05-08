import styled from 'styled-components';
import {Header, List} from 'semantic-ui-react';

export const ListStyled = styled(List)({ //TODO
    height: 'calc(100% - 80px)',
    // width: '30%',
    width: '100%',
    display: 'flex',
    overflow: 'scroll',
    overflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const ListMain = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ListContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;

export const ListContent = styled.div`
    width: 80%;
    height: 100%;
    background: white;
    display:flex;
    justify-content: center;
    //align-items: center;
`;

export const HeaderStyled = styled(Header)({
    margin: '0!important',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '80px',
});
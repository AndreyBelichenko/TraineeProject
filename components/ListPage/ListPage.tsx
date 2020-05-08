import * as React from 'react';
import Item from "../Item/Item";
import users from "../../mockdata/users";
import * as Styled from "./styledComponent"
import { Button } from 'semantic-ui-react';
import Router from 'next/router'

const handleRoute = () => Router.push('/account')

const ListPage: React.FC = () => {
    return (
        <Styled.ListMain>
            <Styled.HeaderStyled block>
                <Button circular icon='user' onClick={handleRoute}/>
                <Button circular icon='log out' />
            </Styled.HeaderStyled>
            <Styled.ListContentWrapper>
                <Styled.ListContent>
                    <Styled.ListStyled>
                        {users.map(item => (
                            <Item name={item.name} rate={item.rate} img={item.img} key={item.id}/>
                        ))}
                    </Styled.ListStyled>
                    </Styled.ListContent>
            </Styled.ListContentWrapper>
        </Styled.ListMain>
);
};

export default ListPage;

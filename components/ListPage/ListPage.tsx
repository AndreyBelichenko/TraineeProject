import * as React from 'react';
import Item from '../Item/Item';
import users from '../../mockdata/users';
import * as Styled from './styledComponent';
import Header from '../Header/Header';

const ListPage: React.FC = () => {
  return (
        <Styled.ListMain>
            <Header page="list"/>
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

import * as React from 'react';
import Item from '../components/Item/Item';
import { List } from 'semantic-ui-react';
import users from '../mockdata/users';
import styled from 'styled-components';

const ListStyled = styled(List)({
  height: '50%',
  width: '30%',
  display: 'flex',
  overflow: 'scroll',
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'center',
});

const ListComponent: React.FC = () => {
  return (
        <ListStyled divided relaxed>
            {users.map((item, index) => (
                <Item name={item.name} rate={item.rate} img={item.img} key={item.id} />
            ))}
        </ListStyled>
  );
};

export default ListComponent;

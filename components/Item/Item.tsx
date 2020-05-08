import * as React from 'react';
import { Rating, Image, List } from 'semantic-ui-react';

interface IProps {
  name?: string;
  img?: string;
  rate?: number;
}

const Item = (props: IProps) => (
    <List.Item>
        <Image src={props.img} avatar />
        <List.Content>
            <List.Header as="a">{props.name}</List.Header>
            <List.Description as="a">{props.rate}</List.Description>
            <Rating icon="star" defaultRating={`${props.rate}`} maxRating={5} />
        </List.Content>
    </List.Item>
);

export default Item;

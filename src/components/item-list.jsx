import React, { useContext } from 'react';

import { GlobalContext } from '../context/global-state';

import { Link } from 'react-router-dom';

import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const ItemList = () => {
    const { items } = useContext(GlobalContext);

    return (
        <ListGroup className='mt-4'>
            {items.map(item => (
                <ListGroupItem className='d-flex'>
                    <strong>{item.name}</strong>
                    <div className='ml-auto'>
                        <Link className='btn btn-warning mr-1' to={`/edit/${item.id}`}>Edit</Link>
                        <Button color='danger'>Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
};

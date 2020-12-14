import React, { useContext } from 'react';

import { GlobalContext } from '../context/global-state';

import { Link } from 'react-router-dom';

import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const ItemList = () => {
    const { items, removeItem } = useContext(GlobalContext);

    return (
        <ListGroup className='mt-4'>
            {items.length > 0 ? (
                <>
                    {items.map(item => (
                        <ListGroupItem className='d-flex'>
                            <strong>{item.name}</strong>
                            <div className='ml-auto'>
                                <Link className='btn btn-warning mr-1' color='warning' to={`/edit/${item.id}`}>Edit</Link>
                                <Button onClick={() => removeItem(item.id)} color='danger'>Delete</Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h1 className='text-center'>No Item</h1>
            )}
        </ListGroup>
    )
};

export default ItemList;

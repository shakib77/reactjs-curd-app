import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/global-state';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export const AddItem = () => {
   
    const [name, setName] = useState('');

    const { addItem } = useContext(GlobalContext);

    const history = useHistory();

    const itemSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name
        }
        addItem(newItem);
        history.push('/');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
        <Form onSubmit={itemSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' value={name} onChange={onChange} placeholder='Enter Item'></Input>
            </FormGroup>
            <Button type='submit'>Add Item</Button>
            <Link to='/' className='btn btn-danger ml-2' >Cancel</Link> 
        </Form>

    )
};

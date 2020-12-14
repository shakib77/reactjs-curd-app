import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/global-state';
import { Link, useHistory } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const EditItem = (props) => {

    const { editItem, items } = useContext(GlobalContext);

    const [selectedItem, setSelectedItem] = useState({
        id: '',
        name: ''
    });

    const history = useHistory();

    const currentItemId = props.match.params.id;

    useEffect (() => {
        const itemId = currentItemId;
        const selectedItem = items.find(item => item.id === itemId);
        setSelectedItem(selectedItem)
    }, [currentItemId, items])

    const onChange = (e) => {
        setSelectedItem ({ ...selectedItem, [e.target.name]: e.target.value })
    }

    const itemSubmit = (e) => {

        e.preventDefault();

        editItem(selectedItem);
            
        history.push('/')
    }

    return (
        <Form onSubmit={itemSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type='text' value={selectedItem.name} onChange={onChange} name='name' placeholder='Enter Name' required ></Input>
                <Button type='submit'>Submit</Button>
                <Link to='/' className='btn btn-danger ml-2' >Cancel</Link>
            </FormGroup>
        </Form>
    )
};

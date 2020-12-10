import React from 'react'
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const AddUser = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' placeholder='Enter Name' ></Input>
                    <Button type='submit'>Add</Button>
                    <Link to='/' className='btn btn-danger ml-2' >Cancel</Link>
                </FormGroup>
            </Form>
        </div>
    )
};

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const [items, setItems] = useState('');
    const navigate=useNavigate()

    const formHandle=(e)=>{
        e.preventDefault()
        if (items === "") {
           return navigate('/notfound')
        }
        navigate(`/search?q=${items}`)
    }
    return (
        <Form className="d-flex" onSubmit={formHandle}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>setItems(e.target.value)}
                required
              />
              <Button variant="outline-success" onClick={formHandle}>Search</Button>
        </Form>
    );
}

export default SearchBar;

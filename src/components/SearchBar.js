import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
const SearchBar = () => {
    const [items, setItems] = useState('');
    const navigate = useNavigate()

    const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character/?name=${items}`)
  const { data } = useFetch(url)
  const {results} = data
    
    const formHandle = (e) => {
        e.preventDefault()
        if (items === "") {
            return navigate('/notfound')
        }
        navigate(`/search?q=${items}`)
    }

  const onSearch=(nameItem)=>{
    setItems(nameItem)
  }

    return (
        <div className='position-relative'>
            <Form className="d-flex" onSubmit={formHandle}>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                             setItems(e.target.value)
                    }}
                    value={items}
                    required
                />
                <Button variant="outline-success" onClick={formHandle}>Search</Button>
            </Form>
                <ul className="list-group w-75 py-1  position-absolute  h-25" style={{ zIndex:"1" }}>
                    {results  && results.filter(item =>{
                        const searchTerm= items.toLowerCase();
                        const fullName=item.name.toLowerCase()

                        return searchTerm && fullName.startsWith(searchTerm) && fullName !==searchTerm
                    })
                    .map(r=>(
                        <li className="list-group-item " key={r.id} onClick={()=>onSearch(r.name)}  role="button"> {r.name} </li>
                    ))  }
                    
                </ul>
        </div>
    );
}

export default SearchBar;

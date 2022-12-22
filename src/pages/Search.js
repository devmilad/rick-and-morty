import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import CharList from '../components/CharList';
import Pegation from '../components/Pegation';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const [url,setUrl]=useState()
    const { error, isPending, data } = useFetch(url)
    const navigate = useNavigate()
    const { results, info } = data

       useEffect(() => {
        if (data  ) { 
            setUrl(`https://rickandmortyapi.com/api/character/?name=${query}`)
            
        }else{
           return  navigate('/notfound')
        }
          
       }, [query]);
  

    return (
        <div>
            {isPending &&
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="spinner-border text-danger text-center" role="status"></div>
                </div>
            }
            {error && <p className='text-center text-danger fs-3 fw-bold my-5'>{error}</p>}
            {!error && <h1 className='text-center  fw-bold my-5'>Search result ({query})</h1>}
            {data && 
            <Container>
                <div className='row'>
                    {results && results.map(chars =>
                        <CharList user={chars} key={chars.id} />
                    )}
                </div>
                <Pegation info={info} setUrl={setUrl} flag="search" query={query}/>
            </Container>
            }

        </div>
    );
}

export default Search;

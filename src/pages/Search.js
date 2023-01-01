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
    
    let [pageNumber, setPageNumber] = useState(1);
    const { error, isPending, data } = useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${query}`)
    const navigate = useNavigate()
    const { results, info } = data
console.log(pageNumber);
       useEffect(() => {
        if (data?.error ) { 
            return  navigate('/notfound')
        }
          
       }, [query]);
  
    document.title=`Serach Result (${query})`
    return (
        <div>
            {isPending &&
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="spinner-border text-danger text-center" role="status"></div>
                </div>
            }
            {error && <p className='text-center text-danger fs-3 fw-bold my-5'>{error}</p>}
            {!error && <h1 className='text-center  fw-bold my-5'>Search result ({query})</h1>}
         
            <Container>
                <div className='row'>
                    {results && results.map(chars =>
                        <CharList user={chars} key={chars.id} />
                    )}
                </div>
             <Pegation info={info}   pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            </Container>

        </div>
    );
}

export default Search;

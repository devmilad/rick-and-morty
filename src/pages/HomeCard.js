import { useState } from 'react';
import { Container } from 'react-bootstrap';
import CharList from '../components/CharList';
import Pegation from '../components/Pegation';
import { useFetch } from '../hooks/useFetch';

const HomeCard = () => {
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("");
    const {data  , isPending , error}=useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
    let { results , info } = data;
    document.title="HomePage"
    return (
        <div>
           {isPending && 
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="spinner-border text-danger text-center" role="status"></div>
                        </div> 
            }
          {error && <p className='text-center text-danger fs-3 fw-bold my-5'>{error}</p>} 
          {!error && <h1 className='text-center  fw-bold my-5'>Character Lists</h1>} 
          <Container>
            <div className='row'>  
          {results && results.map(chars=>
                    <CharList user={chars}  key={chars.id} />
          )}    
          </div>
          <Pegation info={info}   pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </Container>
        </div>
    );
}

export default HomeCard;

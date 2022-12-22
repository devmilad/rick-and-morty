import { useState } from 'react';
import { Container } from 'react-bootstrap';
import CharList from '../components/CharList';
import Pegation from '../components/Pegation';
import { useFetch } from '../hooks/useFetch';

const HomeCard = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    const [url, setUrl] = useState(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    const {data  , isPending , error}=useFetch(url)
    let { results , info } = data;
    
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
          <Pegation info={info}  setUrl={setUrl}  flag="home"/>
      </Container>
        </div>
    );
}

export default HomeCard;

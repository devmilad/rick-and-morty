import ReactPaginate from 'react-paginate';

const Pegation = ({ info,setUrl,flag,query }) => {



    const paginate =( {selected })=>{
        if (flag==="search") {
            setUrl(`https://rickandmortyapi.com/api/character/?page=${selected+1}&name=${query}`)
        }else{
            setUrl(`https://rickandmortyapi.com/api/character?page=${selected+1}`)
        }
       
    }
    return (
        <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(info?.pages)}
                  previousLabel={<span aria-hidden="true">&laquo;</span>}
                  nextLabel={ <span aria-hidden="true">&raquo;</span>}
                  containerClassName={'pagination justify-content-center my-4 gap-4'}
                  pageClassName={"page-item"}
                  breakLinkClassName={'text-primary text-decoration-none'}
                  pageLinkClassName={'page-link '}
                  previousLinkClassName={'page-link'}
                  nextLinkClassName={'page-link '}
                  activeLinkClassName={'active'}
               />
    );
}

export default Pegation;

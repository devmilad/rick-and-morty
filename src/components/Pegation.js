import ReactPaginate from 'react-paginate';

const Pegation = ({ info, pageNumber, setPageNumber}) => {
    

    const paginate =( {selected })=>{
       setPageNumber(selected+1)
    }

    return (
        <ReactPaginate
                  onPageChange={paginate}
                  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                  pageCount={ info?.pages > 1 && info?.pages === 42 ? (pageNumber >= (info?.pages-10)  ? info?.pages : pageNumber+9) : info?.pages}
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

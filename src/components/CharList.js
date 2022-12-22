import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import Status from './Status';


const CharList = ({ user }) => {
    return (
        <div className='col-lg-3 col-md-6 gap-lg-2'>
            <div className="card my-3 position-relative " style={{ width: "18em" }}>
               <Status status={user.status} />
                <img src={user.image} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                    <Link to={`/profile/${user.id}`} className="card-title fs-5 text-dark fw-bold text-decoration-none ">  {user.name}</Link>
                    </div>
            </div>
        </div>
    );
}

export default CharList;

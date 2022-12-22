import React, {  useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProfileCard } from '../context/ProfileContext';
import { useFetch } from '../hooks/useFetch';

// style

import "./profile.css"

const Profile = () => {
    let user_id = window.location.pathname.split("/")[2]
    const navigate = useNavigate()
    const url = `https://rickandmortyapi.com/api/character/${user_id}`
    const { data, isPending, error } = useFetch(url)
    const {addUser} = useContext(ProfileCard);


    useEffect(() => {
        
        if (isNaN(user_id)) {
            navigate('/')
        }
        if (user_id <=0 ||  user_id>826) {
            navigate('/')
        } 
          
       
           
               
                const {name,image}=data
                 addUser({ "id": user_id, "name" : name , "image":image})
        
    }, [user_id , data ]);
 



    return (
       
        <div> 
            {isPending && 
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="spinner-border text-danger text-center" role="status"></div>
                        </div> 
            }
            {error && <p className='text-center text-danger fs-3 fw-bold my-5'>{error}</p>}
            {!error && !isPending &&

                <section className="">
                    <h1 className='text-center  fw-bold my-5'>{data.name}`s Profile</h1>
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-lg-12 mb-4 mb-sm-5">
                                <div className="card card-style1 border-0">
                                    <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 mb-4 mb-lg-0">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="col-lg-6 px-xl-10">
                                                <div className="bg-secondary d-lg-inline-block p-2 my-2 rounded">
                                                    <h3  className="h2 text-white mb-0" ><span >{data.name}</span> </h3>
                                                </div>
                                                <ul className="list-unstyled mb-1-9">
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Species:</span> {data.species}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Type:</span> {(data.type != '') ? data.type : 'no type found'}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Gender:</span> {data.gender}</li>
                                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Location:</span> { data?.location?.name}</li>
                                                </ul>
                                                <Link to='/' className='btn btn-primary' >Back to   Home</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            }
        </div>
    );
}

export default Profile;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileCard } from '../context/ProfileContext';

const Footer = () => {
    const { profile } = useContext(ProfileCard);

    return (
        <div className="container bg-light w-100 ">
            <footer className="py-5">
                <div className="col-lg-12  mb-3 w-100">
                    <h5 className='footer-title'>Last 10 Visited Profiles</h5>
                    <div className="row">
                        {profile && profile.reverse().map((p,i )=>
                           (
                             <div className='col-lg-2' key={i}>
                                <div className='card w-50 h-25 my-2'>
                                    <img src={p.image} alt="" />
                                    <Link to={`/profile/${p.id}`} className="text-decoration-none small py-2 text-secondary">{p.name}</Link>
                                </div>
                             </div>
                           )
                        )}

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

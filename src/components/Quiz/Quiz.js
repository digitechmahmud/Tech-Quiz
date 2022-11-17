import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div>
            <div className="card card-compact w-96 bg-yellow-300  shadow-xl mb-3">
                <figure><img src={logo} alt="Tech"/></figure>
                <div className="card-body flex font-bold border-t-2 border-slate-500">
                    <div className='flex p-2'>
                        <h2 className="mt-2">{name}</h2>
                        <p className='mt-2'>Total Quiz: {total}</p>
                        <Link to={`/quiz/${id}`}><button className="btn-success p-2 pl-5 pr-5 rounded-lg">Solve Quiz <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Quiz;
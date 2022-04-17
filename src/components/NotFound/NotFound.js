import React from 'react';
import notFound from '../../images/not-found.png';
import './NotFound.css';

const NotFound = () => {
    return (
      <div className="container py-5 mt-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
            <img className='img-fluid' src={notFound} alt="" />
          </div>
          <div className="col-6">
              <h1 className='text-danger'>404</h1>
              <h1 className='text-danger'>Page Not Found......</h1>
          </div>
        </div>
      </div>
    );
};

export default NotFound;
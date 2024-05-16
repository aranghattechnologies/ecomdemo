import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid bg-light p-0 m-0 vh-100'>
        <nav className="nav bg-dark text-white py-4">
         
           <div className="container-fluid">  <div className="row">
            <div className="col">
                <Link to="/" className='fs-3'>My Cart</Link>
            </div>
            <div className="col-auto">
                <a href='/register'>Register</a>
            </div>
          </div>
           </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
             <div className="col">
               <Outlet />
             </div>
          </div>
        </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useCurrentProfile from './hooks/useCurrentProfile';

function App() {

  let {isLoggedIn, profile} = useCurrentProfile();

  return (
    <div className='container-fluid bg-light p-0 m-0 vh-100'>
        <nav className="nav bg-dark text-white py-4">
         
           <div className="container-fluid">  <div className="row">
            <div className="col">
                <Link to="/" className='fs-3'>My Cart</Link>
            </div>
            { !isLoggedIn  ?
            <>
            <div className="col-auto">
                <a href='/register'>Register</a>
            </div>
            <div className="col-auto">
                <a href='/login'>Login</a>
            </div></> : <div className='col-auto'>

                Welcome Back {profile?.name}
            </div>
          }
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

import { useForm } from "react-hook-form";
import { httpBaseUrl } from "../common/constants";
import { useNavigate, useNavigation } from "react-router-dom";


export default function Register(){

    const {register,handleSubmit,formState : {errors}} = useForm();
    const nav = useNavigate();

    function onSubmit(data:any){
        fetch(`${httpBaseUrl}/users`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(response => response.json()).then(data => {
            sessionStorage.setItem("profile",JSON.stringify(data));
            nav('/');
        });
        
    }

    return (<>
            <h1>Register</h1>
            <form  className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" 
                                {...register('name',{required : 'Name is required'})}
                            className="form-control" id="name" placeholder="Enter your name" />
                            {errors.name && <p className="text-danger">Name is required</p> }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" 
                            {...register('email',{required : 'Email is required', pattern : {value : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ , message : 'Invalid email'}})}
                            id="email" placeholder="Enter your email" />
                            {errors.email && <p className="text-danger">Invalid Email Address</p> }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" 
                            {...register('password',{required : 'Password is required', minLength : 6})}
                            id="password" placeholder="Enter your password" />
                            {errors.password && <p className="text-danger">Password is required and must be 6 chars</p> }
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
    </>)
}
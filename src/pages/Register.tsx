export default function Register(){
    return (<>
            <h1>Register</h1>
            <form  className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
    </>)
}
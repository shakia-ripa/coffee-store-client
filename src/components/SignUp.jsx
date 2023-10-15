import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useAuth()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const lastLoggedAt = result.user?.metadata?.lastSignInTime;
            const user = {email, createdAt: createdAt, lastLoggedAt: lastLoggedAt};
            fetch('https://practice-coffee-server-ip1znse06-shakia-ripas-projects.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'User created successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })
        })
        .catch(error =>{
            console.log(error.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                        </div>
                        <p>Already have an account? <Link to={'/signin'}>
                            <span>Sign In</span></Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
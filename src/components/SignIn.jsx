import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SignIn = () => {
    const {signInUser} = useAuth();

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            const user = {
                email, 
                lastLoggedAt: result.user?.metadata?.lastSignInTime,
            }
            // update last logged at in the database
            fetch('https://practice-coffee-server-ip1znse06-shakia-ripas-projects.vercel.app/user', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)

            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sing In now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <p>First time here? <Link to={'/signup'}>Sign Up</Link></p>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
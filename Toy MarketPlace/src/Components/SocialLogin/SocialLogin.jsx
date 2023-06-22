/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle  } from 'react-icons/fa';

const SocialLogin = () => {
    const {user,signInWithGoogle}=useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
          })
          .catch((error) => {
            console.log(error);
          });
        };
    return (
        <div> 
            <h1 className=" mb-3 font-bold text-xl">Or </h1>
             <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary  btn-xs"><FaGoogle  />&nbsp;Continue with Google</button>
        </div>
    );
};

export default SocialLogin;